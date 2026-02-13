
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../prisma/generated/prisma-client';
import { withAccelerate } from '@prisma/extension-accelerate'

let prisma
// Singleton pattern to prevent multiple instances in development
if (process.env.NODE_ENV !== 'production') {
    const globalForPrisma = globalThis as unknown as {
        prisma: PrismaClient | undefined;
    };

    // Create PostgreSQL adapter
    const adapter = new PrismaPg({
        connectionString: process.env.DATABASE_URL,
    });

    prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

    globalForPrisma.prisma = prisma;
} else {
    prisma = new PrismaClient().$extends(withAccelerate())
}

export default prisma;
