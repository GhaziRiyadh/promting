const { Pool } = require('pg')
const { PrismaPg } = require('@prisma/adapter-pg')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('Seeding database (JS force)...')

    // 1. Create Users
    const passwordAdmin = await bcrypt.hash('admin123', 10)
    const passwordUser = await bcrypt.hash('user123', 10)

    const admin = await prisma.user.upsert({
        where: { email: 'admin@promptapp.com' },
        update: {},
        create: {
            email: 'admin@promptapp.com',
            name: 'Admin User',
            password: passwordAdmin,
            role: 'ADMIN', // Enum as string in JS and with Adapter
            preferredLanguage: 'en',
            preferredTheme: 'light',
        },
    })

    // For UserRole specifically, depending on Adapter/Prisma it might be represented as string or special object.
    // Standard JS client usually handles string <-> Enum mapping.

    const user = await prisma.user.upsert({
        where: { email: 'user@promptapp.com' },
        update: {},
        create: {
            email: 'user@promptapp.com',
            name: 'Regular User',
            password: passwordUser,
            role: 'USER',
            preferredLanguage: 'en',
            preferredTheme: 'light',
        },
    })

    console.log({ admin, user })

    // 2. Create Prompt Type: Debug Prompt
    const debugPrompt = await prisma.promptType.upsert({
        where: { key: 'debug-prompt' },
        update: {},
        create: {
            key: 'debug-prompt',
            name_i18n: { en: 'Debug Prompt', ar: 'مصحح الأخطاء' },
            description_i18n: { en: 'Debug your code by analyzing the error message.', ar: 'صحح الكود الخاص بك بتحليل رسالة الخطأ.' },
            rolePrompt: 'You are a senior Python developer. Analyze the code and error message provided below.',
            fields: {
                create: [
                    {
                        key: 'language',
                        type: 'select',
                        label_i18n: { en: 'Programming Language', ar: 'لغة البرمجة' },
                        required: true,
                        order: 1,
                        options: { python: 'Python', java: 'Java', js: 'JavaScript' }
                    },
                    {
                        key: 'code',
                        type: 'textarea',
                        label_i18n: { en: 'Code Snippet', ar: 'مقتطف الكود' },
                        placeholder_i18n: { en: 'Paste your code here...', ar: 'الصق الكود هنا...' },
                        required: true,
                        order: 2
                    },
                    {
                        key: 'error',
                        type: 'text',
                        label_i18n: { en: 'Error Message', ar: 'رسالة الخطأ' },
                        placeholder_i18n: { en: 'Paste the error message...', ar: 'الصق رسالة الخطأ...' },
                        required: true,
                        order: 3
                    }
                ]
            }
        }
    })

    // 3. Create Prompt Type: Generate Code Prompt
    const generatePrompt = await prisma.promptType.upsert({
        where: { key: 'generate-code' },
        update: {},
        create: {
            key: 'generate-code',
            name_i18n: { en: 'Generate Code', ar: 'توليد كود' },
            description_i18n: { en: 'Generate code snippets based on requirements.', ar: 'توليد مقتطفات برمجية بناءً على المتطلبات.' },
            rolePrompt: 'You are a senior backend engineer. Generate high-quality code based on the description and constraints.',
            fields: {
                create: [
                    {
                        key: 'description',
                        type: 'textarea',
                        label_i18n: { en: 'Task Description', ar: 'وصف المهمة' },
                        placeholder_i18n: { en: 'Describe the task...', ar: 'وصف المهمة...' },
                        required: true,
                        order: 1
                    },
                    {
                        key: 'constraints',
                        type: 'text',
                        label_i18n: { en: 'Constraints', ar: 'القيود' },
                        placeholder_i18n: { en: 'e.g. Use async/await, no external libs', ar: 'مثال: استخدم async/await، بدون مكتبات خارجية' },
                        required: false,
                        order: 2,
                        rules: {
                            field: 'description',
                            operator: 'contains',
                            value: 'api'
                        }
                    }
                ]
            }
        }
    })

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
