-- DropIndex
DROP INDEX "EmailVerificationToken_user_id_idx";

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" TEXT NOT NULL,
    "expires" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_id_key" ON "PasswordResetToken"("id");

-- CreateIndex
CREATE INDEX "PasswordResetToken_id_user_id_idx" ON "PasswordResetToken"("id", "user_id");

-- CreateIndex
CREATE INDEX "EmailVerificationToken_id_user_id_idx" ON "EmailVerificationToken"("id", "user_id");

-- AddForeignKey
ALTER TABLE "PasswordResetToken" ADD CONSTRAINT "PasswordResetToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
