-- CreateTable
CREATE TABLE "DataPoint" (
    "id" SERIAL NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "domain" TEXT NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "DataPoint_pkey" PRIMARY KEY ("id")
);
