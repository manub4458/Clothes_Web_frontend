
import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = global.prisma;
}

// module.exports = { db: global.prisma };
