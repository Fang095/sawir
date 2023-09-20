# Sawir Project Setup
1. Clone the repo
   ```sh
    https://github.com/Fang095/sawir.git
   ```
2. cd to sawir folder
   ```sh
   cd sawir
   ```
3. Install packages with pnpm
    ```sh
    pnpm install
    ```
4. Setup your `.env` file
    - Duplicate `.env.example` to `.env`
    - Put in your database connection string `DATABASE_URL`
    - Put in your `GMAIL_USER`
    - Put in your `GMAIL_PASS` (this is the app passcord for your gmail account. you can find simple guide here https://miracleio.me/snippets/use-gmail-with-nodemailer

5. Setup the prisma database
    - It would probably be simpler if you delete the `prisma/migrations` folder then run the following two commands
      ```sh
        pnpm dlx prisma db push
      ```
       ```sh
        pnpm dlx prisma migrate dev --init
       ```

6. You should be ready to star the application now.
   ```sh
    pnpm dev
   ```
