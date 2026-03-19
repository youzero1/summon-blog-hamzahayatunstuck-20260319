import 'reflect-metadata';
import { getDataSource } from './database';

async function runMigrations() {
  console.log('Running migrations...');
  const dataSource = await getDataSource();
  
  try {
    // Since we're using synchronize in development, migrations are optional
    // This file can be extended for proper migration handling
    console.log('Database schema is synchronized (synchronize: true)');
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1);
  } finally {
    await dataSource.destroy();
  }
}

runMigrations();