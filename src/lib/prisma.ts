
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../prisma/generated/prisma-client';
import { withAccelerate } from '@prisma/extension-accelerate'

// Singleton pattern to prevent multiple instances in development
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Create PostgreSQL adapter
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
    
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });
// export const prisma = new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma

