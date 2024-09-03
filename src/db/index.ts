import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();


// example
// db.snippet.create({
//   data: {
//     title: "testing",
//     code: 'const abc = (_)'
//   }
// })