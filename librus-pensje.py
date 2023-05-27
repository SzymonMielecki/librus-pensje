#!/usr/bin/env python3
import calendar
import mysql.connector
from datetime import datetime, timedelta
from librus_apix_test.get_token import get_token
from librus_apix_test.teachers import get_pages, get_teachers
from librus_apix_test.timetable import get_timetable, get_classes
from login import passw

token = get_token('10779101', passw)
dates = []
d1 = datetime(2022, 8, 1)
for i in range(10):
    d1 += timedelta(days=calendar.monthrange(d1.year, d1.month)[1])
    dates.append(d1)
while True:
    for d1 in dates:
        try:
            first = d1.replace(day=1)
            found_month = first

            connection = mysql.connector.connect(host='aws.connect.psdb.cloud',
                                                 database='librus-pensje',
                                                 user='9cugtcss4il3zw2z518u',
                                                 password='pscale_pw_vWaUI9XthIPmaQbDpa3gkRHXuzjhMtFyDktIBe3A4Xc')
            if connection.is_connected():
                db_Info = connection.get_server_info()
                cursor = connection.cursor()
            teachers_and_subjects = []
            for i in range(0, get_pages(token)):
                teachers_and_subjects += get_teachers(token, i)

            if first.weekday() != 0:
                while True:
                    last_month = first - timedelta(days=1)
                    if last_month.weekday() == 0:
                        found_month = last_month
                        break
                    else:
                        first = last_month

            count = {}
            next_month = found_month + timedelta(days=calendar.monthrange(d1.year, d1.month)[1]) - timedelta(days=1)
            used = []
            teacherlist = []
            remember = found_month
            cursor.execute(
                'select Employee.Name from Employee')
            teachername = cursor.fetchall()
            while found_month <= next_month:

                for class_ in get_classes(token, found_month):
                    recieved = get_timetable(token, monday_date=found_month, class_id=class_)

                    for i in recieved:
                        for day in recieved[i]:
                            if day.subject != '':
                                if day.date[-5:-3] == f"{next_month.month:02d}":

                                    if type(day.subject) == list:

                                        for teacher1, lesson in zip(day.teacher_and_classroom, day.subject):
                                            if day.teacher_and_classroom[0] != day.teacher_and_classroom[1]:
                                                if 'zastępstwo' in day.info and day.info['zastępstwo'][:4] == 'Data' and \
                                                        [ele for ele in
                                                         [[axt for axt in ext if axt in teacher1] for ext in
                                                          teachers_and_subjects] if ele != []][0][0] == teacher1:

                                                    teacher = \
                                                    day.info['zastępstwo'].split('Nauczyciel')[1].split('->')[1].split(
                                                        'Przedmiot')[0].strip()
                                                    if teacher not in count.keys():
                                                        count[teacher] = {lesson.strip(): 1, 'total': 1}
                                                    else:
                                                        if lesson.strip() not in count[teacher].keys():
                                                            count[teacher].update({lesson.strip(): 1,
                                                                                   'total': count[teacher][
                                                                                                'total'] + 1})
                                                        else:
                                                            count[teacher].update(
                                                                {lesson.strip(): count[teacher][lesson.strip()] + 1,
                                                                 'total': count[teacher]['total'] + 1})

                                                elif 'odwołane' in day.info.keys() and [ele for ele in [
                                                    [axt for axt in ext if axt in teacher1] for ext in
                                                    teachers_and_subjects] if ele != []][0][0] not in teacher1:

                                                    teacher = [ele for ele in
                                                               [[axt for axt in ext if axt in teacher1] for ext in
                                                                teachers_and_subjects] if ele != []][0][0]

                                                    if teacher not in count.keys():

                                                        count[teacher] = {lesson.strip(): 1, 'total': 1}
                                                    else:
                                                        if lesson.strip() not in count[teacher].keys():
                                                            count[teacher].update({lesson.strip(): 1,
                                                                                   'total': count[teacher][
                                                                                                'total'] + 1})
                                                        else:
                                                            count[teacher].update(
                                                                {lesson.strip(): count[teacher][lesson.strip()] + 1,
                                                                 'total': count[teacher]['total'] + 1})
                                                else:
                                                    teacher = [ele for ele in
                                                               [[axt for axt in ext if axt in teacher1] for ext in
                                                                teachers_and_subjects] if ele != []][0][0]

                                                    if teacher not in count.keys():

                                                        count[teacher] = {lesson.strip(): 1, 'total': 1}
                                                    else:
                                                        if lesson.strip() not in count[teacher].keys():
                                                            count[teacher].update({lesson.strip(): 1,
                                                                                   'total': count[teacher][
                                                                                                'total'] + 1})
                                                        else:
                                                            count[teacher].update(
                                                                {lesson.strip(): count[teacher][lesson.strip()] + 1,
                                                                 'total': count[teacher]['total'] + 1})
                                            else:

                                                if 'zastępstwo' in day.info and day.info['zastępstwo'][
                                                                                :4] == 'Data':

                                                    teacher = \
                                                        day.info['zastępstwo'].split('Nauczyciel')[1].split('->')[
                                                            1].split('Przedmiot')[0].strip()
                                                    if teacher not in count.keys():

                                                        count[teacher] = {lesson.strip(): 1, 'total': 1}
                                                    else:
                                                        if lesson.strip() not in count[teacher].keys():
                                                            count[teacher].update({lesson.strip(): 1,
                                                                                   'total': count[teacher][
                                                                                                'total'] + 1})
                                                        else:
                                                            count[teacher].update(
                                                                {lesson.strip(): count[teacher][lesson.strip()] + 1,
                                                                 'total': count[teacher]['total'] + 1})
                                                elif 'odwołane' in day.info.keys() and [ele for ele in
                                                                                        [[axt for axt in ext if
                                                                                          axt in teacher1] for ext in
                                                                                         teachers_and_subjects] if
                                                                                        ele != []][0][
                                                    0] not in teacher1:
                                                    teacher = [ele for ele in
                                                               [[axt for axt in ext if axt in teacher1] for ext in
                                                                teachers_and_subjects] if ele != []][0][0]

                                                    if teacher not in count.keys():

                                                        count[teacher] = {lesson.strip(): 1, 'total': 1}
                                                    else:
                                                        if lesson.strip() not in count[teacher].keys():
                                                            count[teacher].update({lesson.strip(): 1,
                                                                                   'total': count[teacher][
                                                                                                'total'] + 1})
                                                        else:
                                                            count[teacher].update(
                                                                {lesson.strip(): count[teacher][lesson.strip()] + 1,
                                                                 'total': count[teacher]['total'] + 1})
                                                else:
                                                    teacher = [ele for ele in
                                                               [[axt for axt in ext if axt in teacher1] for ext in
                                                                teachers_and_subjects] if ele != []][0][0]

                                                    if teacher not in count.keys():

                                                        count[teacher] = {lesson.strip(): 1, 'total': 1}
                                                    else:
                                                        if lesson.strip() not in count[teacher].keys():
                                                            count[teacher].update({lesson.strip(): 1,
                                                                                   'total': count[teacher][
                                                                                                'total'] + 1})
                                                        else:
                                                            count[teacher].update(
                                                                {lesson.strip(): count[teacher][lesson.strip()] + 1,
                                                                 'total': count[teacher]['total'] + 1})
                                                break

                                    else:
                                        if 'zastępstwo' in day.info and day.info['zastępstwo'][:4] == 'Data':
                                            teacher = \
                                            day.info['zastępstwo'].split('Nauczyciel')[1].split('->')[1].split(
                                                'Przedmiot')[
                                                0].strip()
                                            if teacher not in count.keys():
                                                count[teacher] = {day.subject.strip(): 1, 'total': 1}
                                            else:
                                                if day.subject.strip() not in count[teacher].keys():
                                                    count[teacher].update({day.subject.strip(): 1,
                                                                           'total': count[teacher]['total'] + 1})
                                                else:
                                                    count[teacher].update(
                                                        {day.subject.strip(): count[teacher][day.subject.strip()] + 1,
                                                         'total': count[teacher]['total'] + 1})
                                        elif 'odwołane' not in day.info.keys():
                                            teacher = [ele for ele in
                                                       [[axt for axt in ext if axt in day.teacher_and_classroom] for ext
                                                        in teachers_and_subjects] if ele != []][0][0]
                                            if teacher not in count.keys():

                                                count[teacher] = {day.subject.strip(): 1, 'total': 1}
                                            else:
                                                if day.subject.strip() not in count[teacher].keys():
                                                    count[teacher].update(
                                                        {day.subject.strip(): 1, 'total': count[teacher]['total'] + 1})
                                                else:
                                                    count[teacher].update(
                                                        {day.subject.strip(): count[teacher][day.subject.strip()] + 1,
                                                         'total': count[teacher]['total'] + 1})
                found_month += timedelta(weeks=1)
            found_month = remember
            # cursor.execute('select Employee.id,Service.name,Employee.name from Employee join Contract on Employee.id=Contract.employeeid join ContractService on ContractService.contractid=Contract.id join Service on ContractService.serviceid=Service.id')
            # x = cursor.fetchall()
            # print(x)
            '''for i in x:
                for teach in count.keys():
                    for les in count[teach].keys():
                        if les in i[1] and teach in i[2]:
                            if d1.date() <= datetime.now().date():
                                cursor.execute(
                                    f'UPDATE HoursMonths SET hoursWorked={count[teach][les]} WHERE contractId="{i[0]}" AND month="{d1.month}"')
            connection.commit()'''
            '''cursor.execute('select id,subjectName,teacherName from Contracts')
            x=cursor.fetchall()

            for i in x:
                    for teach in count.keys():
                        for les in count[teach].keys():
                            if les in i[1] and teach in i[2]:
                                if d1.date()<=datetime.now().date():
                                    cursor.execute(f'UPDATE HoursMonths SET hoursWorked={count[teach][les]} WHERE contractId="{i[0]}" AND month="{d1.month}"')
            connection.commit()'''
            if d1.month == 2 or d1.month == 3 or d1.month == 4:

                print(d1.date(), count)
            else:
                print(d1.month)
        except Exception as E:
            print(E, datetime.now())
            connection = mysql.connector.connect(host='aws.connect.psdb.cloud',
                                                 database='udar',
                                                 user='lbg60zpukzve577isga7',
                                                 password='pscale_pw_OUSrejt7nlQZuQS4nP2xWyzaPcD2ZEJhGHaVtI0Go3h')
            if connection.is_connected():
                db_Info = connection.get_server_info()
                cursor = connection.cursor()
            token = get_token('10779101', passw)
