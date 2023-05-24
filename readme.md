Opis projektu programu "Librus Pensje":

    Projekt programu "Librus Pensje" jest aplikacją służącą do obliczania pensji nauczycieli na podstawie umów zawartych między nauczycielami a szkołą. Program wykorzystuje bazę danych MySQL i interfejs dostarczany przez Prisma, który zapewnia dostęp do danych.

Model danych składa się z kilku tabel:

    Tabela "Employee" zawiera informacje o pracownikach (nauczycielach). Każdy pracownik ma unikalne ID, imię i nazwisko oraz może mieć wiele umów (Contract).

    Tabela "Service" zawiera informacje o usługach świadczonych przez pracowników. Każda usługa ma unikalne ID i nazwę. Usługi są powiązane z umowami poprzez tabelę "ContractService".

    Tabela "ContractType" zawiera informacje o typach umów. Każdy typ umowy ma unikalne ID i nazwę. Umowy są powiązane z typami umów poprzez pole "contractTypeId" w tabeli "Contract".

    Tabela "SalaryType" zawiera informacje o typach wynagrodzenia. Każdy typ wynagrodzenia ma unikalne ID i nazwę. Umowy i usługi są powiązane z typami wynagrodzenia poprzez pola "salaryTypeId" w tabelach "Contract" i "ContractService".

    Tabela "Contract" zawiera informacje o poszczególnych umowach zawartych między pracownikami a szkołą. Każda umowa ma unikalne ID, przypisanego pracownika (employeeId) i typu umowy (contractTypeId). Może również zawierać stałą pensję (fixedSalary) oraz odniesienie do typu wynagrodzenia (salaryType).

    Tabela "Category" zawiera informacje o kategoriach usług. Każda kategoria ma unikalne ID i nazwę. Usługi są powiązane z kategoriami poprzez pole "categoryId" w tabeli "ContractService".

    Tabela "ContractEmployeeType" zawiera informacje o typach pracowników na podstawie umowy. Każdy typ pracownika ma unikalne ID i nazwę. Usługi są powiązane z typami pracowników poprzez pole "contractEmployeeTypeId" w tabeli "ContractService".

    Tabela "HoursMonths" zawiera informacje o ilości przepracowanych godzin w danym miesiącu. Każdy rekord zawiera unikalne ID, numer miesiąca, ilość przepracowanych godzin oraz odniesienie do usługi w tabeli "ContractService".

    Tabela "ContractService" zawiera informacje o powiązaniu między umową a usługą. Każde powiązanie ma unikalne ID, przypisaną umowę (contractId) i usługę (serviceId). Zawiera również informacje o wynagrodzeniu (salary), typie wynagrodzenia (salaryType), kategorii usługi (categoryId) i typie pracownika na podstawie umowy (contractEmployeeTypeId).

Opis strony Internetowej (UI):

    Strona posiada zakładki do dodawania i edycji większości tabel. Strona posiada też skrypt pobierający dane z librusa i zapisujący je do bazy danych.
