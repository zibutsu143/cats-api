/*
  Warnings:

  - You are about to drop the column `bred_for` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `breed_group` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `life_span` on the `Cats` table. All the data in the column will be lost.
  - Added the required column `breedGroup` to the `Cats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cats` DROP COLUMN `bred_for`,
    DROP COLUMN `breed_group`,
    DROP COLUMN `life_span`,
    ADD COLUMN `bredFor` VARCHAR(191) NULL,
    ADD COLUMN `breedGroup` VARCHAR(191) NOT NULL,
    ADD COLUMN `lifeSpan` INTEGER NULL;
