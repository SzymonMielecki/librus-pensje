/*
  Warnings:

  - You are about to drop the column `contractsId` on the `HoursMonths` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contractId,month]` on the table `HoursMonths` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contractId` to the `HoursMonths` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `HoursMonths` DROP FOREIGN KEY `HoursMonths_contractsId_fkey`;

-- AlterTable
ALTER TABLE `HoursMonths` DROP COLUMN `contractsId`,
    ADD COLUMN `contractId` VARCHAR(191) NOT NULL,
    MODIFY `hoursWorked` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `HoursMonths_contractId_month_key` ON `HoursMonths`(`contractId`, `month`);

-- AddForeignKey
ALTER TABLE `HoursMonths` ADD CONSTRAINT `HoursMonths_contractId_fkey` FOREIGN KEY (`contractId`) REFERENCES `Contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
