-- CreateTable
CREATE TABLE "Subjects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Teachers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ContractTypes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Contracts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "teachersId" TEXT NOT NULL,
    "subjectsId" TEXT NOT NULL,
    "contractTypesId" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "hoursWorked" INTEGER NOT NULL,
    CONSTRAINT "Contracts_teachersId_fkey" FOREIGN KEY ("teachersId") REFERENCES "Teachers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contracts_subjectsId_fkey" FOREIGN KEY ("subjectsId") REFERENCES "Subjects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contracts_contractTypesId_fkey" FOREIGN KEY ("contractTypesId") REFERENCES "ContractTypes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SubjectsToTeachers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_SubjectsToTeachers_A_fkey" FOREIGN KEY ("A") REFERENCES "Subjects" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SubjectsToTeachers_B_fkey" FOREIGN KEY ("B") REFERENCES "Teachers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectsToTeachers_AB_unique" ON "_SubjectsToTeachers"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectsToTeachers_B_index" ON "_SubjectsToTeachers"("B");
