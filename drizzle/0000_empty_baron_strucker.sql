-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migraitons
/*
CREATE TABLE `Category` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE TABLE `Contract` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`employeeId` varchar(191) NOT NULL,
	`number` varchar(191) NOT NULL,
	`contractTypeId` varchar(191) NOT NULL,
	`fixedSalary` double,
	`salaryTypeId` varchar(191));

CREATE TABLE `ContractEmployeeType` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE TABLE `ContractService` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`contractId` varchar(191) NOT NULL,
	`serviceId` varchar(191) NOT NULL,
	`salary` double,
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
	`hoursWorked` int,
	`contractServiceId` varchar(191));

CREATE TABLE `SalaryType` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE TABLE `Service` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL);

CREATE UNIQUE INDEX `Category_name_key` ON `Category` (`name`);
CREATE INDEX `Contract_contractTypeId_idx` ON `Contract` (`contractTypeId`);
CREATE INDEX `Contract_employeeId_idx` ON `Contract` (`employeeId`);
CREATE INDEX `Contract_salaryTypeId_idx` ON `Contract` (`salaryTypeId`);
CREATE UNIQUE INDEX `ContractEmployeeType_name_key` ON `ContractEmployeeType` (`name`);
CREATE INDEX `ContractService_categoryId_idx` ON `ContractService` (`categoryId`);
CREATE INDEX `ContractService_contractEmployeeTypeId_idx` ON `ContractService` (`contractEmployeeTypeId`);
CREATE INDEX `ContractService_contractId_idx` ON `ContractService` (`contractId`);
CREATE INDEX `ContractService_salaryTypeId_idx` ON `ContractService` (`salaryTypeId`);
CREATE INDEX `ContractService_serviceId_idx` ON `ContractService` (`serviceId`);
CREATE UNIQUE INDEX `ContractType_name_key` ON `ContractType` (`name`);
CREATE UNIQUE INDEX `Employee_name_key` ON `Employee` (`name`);
CREATE INDEX `HoursMonths_contractServiceId_idx` ON `HoursMonths` (`contractServiceId`);
CREATE UNIQUE INDEX `SalaryType_name_key` ON `SalaryType` (`name`);
CREATE UNIQUE INDEX `Service_name_key` ON `Service` (`name`);
*/