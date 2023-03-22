-- CreateTable
CREATE TABLE `Subjects` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Subjects_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teachers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Teachers_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContractTypes` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ContractTypes_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Categories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contracts` (
    `id` VARCHAR(191) NOT NULL,
    `contractNumber` VARCHAR(191) NOT NULL,
    `teacherName` VARCHAR(191) NOT NULL,
    `subjectName` VARCHAR(191) NOT NULL,
    `contractTypeName` VARCHAR(191) NOT NULL,
    `categoryName` VARCHAR(191) NOT NULL,
    `hourlyRate` DOUBLE NULL,
    `month` INTEGER NULL,
    `hoursWorked` INTEGER NULL,

    UNIQUE INDEX `Contracts_teacherName_subjectName_month_key`(`teacherName`, `subjectName`, `month`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contracts` ADD CONSTRAINT `Contracts_teacherName_fkey` FOREIGN KEY (`teacherName`) REFERENCES `Teachers`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contracts` ADD CONSTRAINT `Contracts_subjectName_fkey` FOREIGN KEY (`subjectName`) REFERENCES `Subjects`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contracts` ADD CONSTRAINT `Contracts_contractTypeName_fkey` FOREIGN KEY (`contractTypeName`) REFERENCES `ContractTypes`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contracts` ADD CONSTRAINT `Contracts_categoryName_fkey` FOREIGN KEY (`categoryName`) REFERENCES `Categories`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
