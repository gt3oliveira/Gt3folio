/*
  Warnings:

  - Added the required column `tipo` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projetos" ADD COLUMN     "tipo" TEXT NOT NULL;
