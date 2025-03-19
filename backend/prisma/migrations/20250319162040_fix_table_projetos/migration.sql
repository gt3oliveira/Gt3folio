/*
  Warnings:

  - Changed the type of `nivel` on the `projetos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "nivel",
ADD COLUMN     "nivel" INTEGER NOT NULL;
