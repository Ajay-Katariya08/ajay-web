# Ajay Katariya - Personal Portfolio & Freelance Website

Production-ready personal portfolio for **Ajay Katariya (Frontend Developer)**, built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Theme**: next-themes (Light & Dark Mode)
- **Package Manager**: `bun`

## Getting Started

First, install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```text
src/
├── app/            # Next.js App Router pages & metadata
├── components/     # Layout, sections, UI, and project components
├── config/         # Site configuration & social links
├── data/           # Centralized portfolio data (Projects, Experience, Services, Skills)
├── lib/            # Utility functions
└── types/          # Strict TypeScript type definitions
```

## Production Build

To build the application for production:

```bash
bun run build
bun run start
```
