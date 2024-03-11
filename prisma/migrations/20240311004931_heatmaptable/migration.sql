/*
  Warnings:

  - You are about to drop the `DataPoint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DataPoint";

-- CreateTable
CREATE TABLE "HeatMap" (
    "id" SERIAL NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "domain" TEXT NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "HeatMap_pkey" PRIMARY KEY ("id")
);
