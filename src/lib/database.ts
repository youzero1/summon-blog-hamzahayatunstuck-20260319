import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Activity } from '@/entities/Activity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_URL?.replace('file:', '') || './data/database.db',
  synchronize: process.env.NODE_ENV !== 'production', // Auto-create tables in dev
  logging: false,
  entities: [Activity],
  migrations: [],
  subscribers: [],
});

let initialized = false;

async function initializeDatabase() {
  if (!initialized) {
    try {
      await AppDataSource.initialize();
      console.log('Database connection established');
      initialized = true;
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }
  return AppDataSource;
}

export async function getDataSource() {
  return await initializeDatabase();
}

export async function getActivities(): Promise<Activity[]> {
  const dataSource = await getDataSource();
  try {
    const activityRepository = dataSource.getRepository(Activity);
    return await activityRepository.find({
      order: { date: 'DESC' },
      take: 10, // Limit to 10 recent activities
    });
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
}

export default AppDataSource;