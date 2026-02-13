import { PrismaClient } from "./prisma/generated/prisma-client";

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.aIModel.count();
  console.log(`Found ${count} AI Models in DB.`);
  const models = await prisma.aIModel.findMany();
  console.log(models);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
