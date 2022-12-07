/*
  Warnings:

  - Added the required column `breed_group` to the `Cats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cats` ADD COLUMN `bred_for` VARCHAR(191) NULL,
    ADD COLUMN `breed_group` VARCHAR(191) NOT NULL,
    ADD COLUMN `life_span` INTEGER NULL;
