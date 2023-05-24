-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ContractType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalaryType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SalaryType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "contractTypeId" TEXT NOT NULL,
    "fixedSalary" DOUBLE PRECISION,
    "salaryTypeId" TEXT,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractEmployeeType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ContractEmployeeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HoursMonths" (
    "id" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "hoursWorked" INTEGER,
    "contractServiceId" TEXT,

    CONSTRAINT "HoursMonths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractService" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "salary" DOUBLE PRECISION,
    "salaryTypeId" TEXT,
    "categoryId" TEXT NOT NULL,
    "contractEmployeeTypeId" TEXT NOT NULL,

    CONSTRAINT "ContractService_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_name_key" ON "Employee"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Service_name_key" ON "Service"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ContractType_name_key" ON "ContractType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SalaryType_name_key" ON "SalaryType"("name");

-- CreateIndex
CREATE INDEX "Contract_employeeId_idx" ON "Contract"("employeeId");

-- CreateIndex
CREATE INDEX "Contract_contractTypeId_idx" ON "Contract"("contractTypeId");

-- CreateIndex
CREATE INDEX "Contract_salaryTypeId_idx" ON "Contract"("salaryTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ContractEmployeeType_name_key" ON "ContractEmployeeType"("name");

-- CreateIndex
CREATE INDEX "HoursMonths_contractServiceId_idx" ON "HoursMonths"("contractServiceId");

-- CreateIndex
CREATE INDEX "ContractService_contractId_idx" ON "ContractService"("contractId");

-- CreateIndex
CREATE INDEX "ContractService_serviceId_idx" ON "ContractService"("serviceId");

-- CreateIndex
CREATE INDEX "ContractService_salaryTypeId_idx" ON "ContractService"("salaryTypeId");

-- CreateIndex
CREATE INDEX "ContractService_categoryId_idx" ON "ContractService"("categoryId");

-- CreateIndex
CREATE INDEX "ContractService_contractEmployeeTypeId_idx" ON "ContractService"("contractEmployeeTypeId");

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_contractTypeId_fkey" FOREIGN KEY ("contractTypeId") REFERENCES "ContractType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_salaryTypeId_fkey" FOREIGN KEY ("salaryTypeId") REFERENCES "SalaryType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HoursMonths" ADD CONSTRAINT "HoursMonths_contractServiceId_fkey" FOREIGN KEY ("contractServiceId") REFERENCES "ContractService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractService" ADD CONSTRAINT "ContractService_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractService" ADD CONSTRAINT "ContractService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractService" ADD CONSTRAINT "ContractService_salaryTypeId_fkey" FOREIGN KEY ("salaryTypeId") REFERENCES "SalaryType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractService" ADD CONSTRAINT "ContractService_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractService" ADD CONSTRAINT "ContractService_contractEmployeeTypeId_fkey" FOREIGN KEY ("contractEmployeeTypeId") REFERENCES "ContractEmployeeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
