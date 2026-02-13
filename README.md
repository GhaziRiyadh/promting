# AI Prompt Builder (Promting)

**Promting** is a powerful, open-source tool designed to help developers and prompt engineers design, refine, and manage AI prompts for various models (OpenAI, Gemini, DeepSeek). It provides a streamlined interface for creating prompt templates, testing them in real-time, and organizing them efficiently.

![AI Prompt Builder](public/og-image.png)

- **Main Website**: [https://promting.easycodeye.com/en](https://promting.easycodeye.com/en)
- **GitHub Repository**: [https://github.com/GhaziRiyadh/promting](https://github.com/GhaziRiyadh/promting)

## Features

- **Multi-Model Support**: Seamlessly switch between OpenAI (GPT-4), Google Gemini, and DeepSeek models to test your prompts.
- **Prompt Templating**: Create reusable prompt templates with dynamic variables.
- **Real-time Preview**: See how your prompt renders and executes in real-time.
- **Prompt Management**: Organize, save, and edit your prompts in a dedicated dashboard.
- **Internationalization (i18n)**: Fully localized interface (English & Arabic).
- **Dark/Light Mode**: Built-in theme switching for comfortable usage.
- **Mobile Responsive**: Fully accessible sidebar and interface on mobile devices.
- **User Authentication**: Secure login and registration using NextAuth.js.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Deployment**: Docker & Docker Compose

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) (optional, for running PostgreSQL easily)
- [PostgreSQL](https://www.postgresql.org/) (if not using Docker)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/GhaziRiyadh/promting.git
    cd promting
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    Copy the example environment file and update it with your credentials:

    ```bash
    cp .env.example .env
    ```

    Update `.env` with your specific keys:

    ```env
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/promting?schema=public"
    NEXTAUTH_SECRET="your-super-secret-key"
    NEXTAUTH_URL="http://localhost:3000"

    # AI Provider Keys
    GEMINI_API_KEY="your-gemini-key"
    OPENAI_API_KEY="your-openai-key"
    DEEPSEEK_API_KEY="your-deepseek-key"
    ```

4.  **Setup Database:**

    Run migrations to create the database schema:

    ```bash
    npx prisma migrate dev
    ```

    Seed the database with initial data (standard prompts, models, etc.):

    ```bash
    npx prisma db seed
    ```

5.  **Run the Application:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Deployment

You can easily run the entire stack (App + Database) using Docker Compose.

1.  **Configure `.env`**: Ensure your `.env` file is set up as described above.

2.  **Run with Docker Compose**:

    ```bash
    docker-compose up -d
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
