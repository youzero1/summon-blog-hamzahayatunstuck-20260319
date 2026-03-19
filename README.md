# Next.js Dashboard Application

A production-ready dashboard built with Next.js 14, TypeScript, Tailwind CSS, Recharts, and SQLite with TypeORM.

## Features

- Modern dashboard UI with sidebar navigation and header
- Key metrics cards with mock data
- Interactive revenue chart using Recharts
- Recent activity table with data from SQLite database
- Fully responsive design with Tailwind CSS
- SQLite database with TypeORM for data persistence
- Production-ready Docker configuration

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up the database:
   ```bash
   npm run migrate
   npm run seed
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Database

The application uses SQLite with TypeORM. The database file is stored at `./data/database.db`.

- Entity: `Activity` with fields: `id`, `user`, `action`, `date`
- Seed script populates the database with sample data
- Database connection is automatically initialized

## Deployment with Coolify

This application is configured for easy deployment on Coolify:

- `Dockerfile` uses multi-stage builds for production
- `next.config.js` configured for standalone output
- All files are at the repository root as required by Coolify

### Environment Variables

- `DATABASE_URL`: SQLite database path (default: `file:./data/database.db`)

## Project Structure

```
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── entities/
│   ├── lib/
│   └── scripts/
├── .env
├── Dockerfile
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run seed` - Populate database with sample data
- `npm run migrate` - Run database migrations

## Dependencies

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- TypeORM with SQLite
- Lucide React for icons

## License

MIT