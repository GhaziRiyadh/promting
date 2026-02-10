import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // 1. Create 'Code Assistant' Prompt Type
    const codeAssistant = await prisma.promptType.upsert({
        where: { key: 'code-assistant' },
        update: {},
        create: {
            key: 'code-assistant',
            name_i18n: { en: 'Code Assistant', ar: 'مساعد برمجي' },
            description_i18n: { en: 'Generate high-quality code snippets and explanations.', ar: 'توليد مقتطفات برمجية وشروحات عالية الجودة.' },
            rolePrompt: 'You are an expert software engineer. {{language}}',
            fields: {
                create: [
                    {
                        key: 'language',
                        type: 'text',
                        label_i18n: { en: 'Programming Language', ar: 'لغة البرمجة' },
                        placeholder_i18n: { en: 'e.g., Python, TypeScript', ar: 'مثال: بايثون، تايب سكريبت' },
                        required: true,
                        order: 1
                    },
                    {
                        key: 'framework',
                        type: 'text',
                        label_i18n: { en: 'Framework', ar: 'إطار العمل' },
                        placeholder_i18n: { en: 'e.g., Next.js, Django', ar: 'مثال: نيكست، جانغو' },
                        required: false,
                        order: 2,
                        rules: {
                            // Show only if language contains 'script' or 'python' (simple test)
                            combinator: 'OR',
                            rules: [
                                { field: 'language', operator: 'contains', value: 'script' },
                                { field: 'language', operator: 'contains', value: 'python' }
                            ]
                        }
                    },
                    {
                        key: 'complexity',
                        type: 'select',
                        label_i18n: { en: 'Complexity', ar: 'التعقيد' },
                        options: { basic: 'Basic', intermediate: 'Intermediate', advanced: 'Advanced' },
                        required: true,
                        order: 3
                    },
                    {
                        key: 'task',
                        type: 'textarea',
                        label_i18n: { en: 'Task Description', ar: 'وصف المهمة' },
                        required: true,
                        order: 4
                    }
                ]
            }
        }
    });

    console.log({ codeAssistant });
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
