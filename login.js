import bcrypt from "bcrypt";
import { promises as fs } from 'fs';
// or simply 
// import * as fs from "fs/promises";

const userInput = process.argv[2];

const loginUser = async (userInput) => {
  const savedPw = await fs.readFile("user.txt", "utf-8"); // reading the hashed password from user.txt
  const isMatch = await bcrypt.compare(userInput, savedPw); // comparing the original password with hashed one

  isMatch ? console.log("match!") : console.log("no Match");
};

loginUser(userInput);
