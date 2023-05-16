import bcrypt from "bcrypt";
import * as fs from "fs/promises";

const userInput = process.argv[2];

async function register(password) {
  const hash = await bcrypt.hash(password, 10); //salted 10 times
  console.log(
    `your password is ${password}, and the hashed(salted) password is ${hash}.`
  );

  await fs.writeFile("user.txt", hash);
}

!userInput ? console.log("Please provide a password") : register(userInput);

