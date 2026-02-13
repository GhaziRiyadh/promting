
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding landing content...');

  const heroContent = [
    {
      section: 'hero',
      key: 'headline',
      content: {
        en: 'Master the Art of AI Prompting',
        ar: 'أتقن فن صياغة أوامر الذكاء الاصطناعي',
      },
    },
    {
      section: 'hero',
      key: 'subheadline',
      content: {
        en: 'Design, refine, and manage powerful AI prompts for any model. Elevate your workflow with our advanced prompt engineering tools.',
        ar: 'صمم، حسن، وأدر أوامر ذكاء اصطناعي قوية لأي نموذج. ارتقِ بسير عملك مع أدواتنا المتقدمة لهندسة الأوامر.',
      },
    },
    {
      section: 'hero',
      key: 'ctaPrimary',
      content: {
        en: 'Start Building Free',
        ar: 'ابدا مجاناً',
      },
    },
    {
      section: 'hero',
      key: 'ctaSecondary',
      content: {
        en: 'Explore Features',
        ar: 'اكتشف المميزات',
      },
    },
  ];

  for (const item of heroContent) {
    await prisma.landingContent.upsert({
      where: {
        section_key: {
          section: item.section,
          key: item.key,
        },
      },
      update: {
        content: item.content,
      },
      create: {
        section: item.section,
        key: item.key,
        content: item.content,
      },
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
