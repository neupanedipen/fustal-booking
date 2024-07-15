-- CreateTable
CREATE TABLE "Futsal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Futsal_pkey" PRIMARY KEY ("id")
);
