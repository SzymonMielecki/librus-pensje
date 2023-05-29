CREATE TABLE `Category` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE TABLE `Contract` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`number` varchar(191) NOT NULL,
	`fixedSalary` double,
	`employeeId` varchar(191) NOT NULL,
	`contractTypeId` varchar(191) NOT NULL,
	`salaryTypeId` varchar(191));

CREATE TABLE `ContractEmployeeType` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE TABLE `ContractService` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`salary` double,
	`contractId` varchar(191) NOT NULL,
	`serviceId` varchar(191) NOT NULL,
	`salaryTypeId` varchar(191),
	`categoryId` varchar(191) NOT NULL,
	`contractEmployeeTypeId` varchar(191) NOT NULL);

CREATE TABLE `ContractType` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE TABLE `Employee` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE TABLE `HoursMonths` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`month` int NOT NULL,
	`hoursWorked` int);

CREATE TABLE `SalaryType` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE TABLE `Service` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);
