import 'reflect-metadata';
import { getDataSource } from '../lib/database';
import { Activity } from '../entities/Activity';
import * as fs from 'fs';
import * as path from 'path';

async function seedDatabase() {
  console.log('Starting database seeding...');

  // Ensure data directory exists
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const dataSource = await getDataSource();
  const activityRepository = dataSource.getRepository(Activity);

  // Clear existing data
  await activityRepository.clear();

  // Sample activity data
  const sampleActivities = [
    { user: 'John Doe', action: 'Logged in', date: new Date(Date.now() - 3600000) },
    { user: 'Alice Smith', action: 'Updated profile', date: new Date(Date.now() - 7200000) },
    { user: 'Bob Johnson', action: 'Created new project', date: new Date(Date.now() - 10800000) },
    { user: 'Carol Williams', action: 'Uploaded file', date: new Date(Date.now() - 14400000) },
    { user: 'David Brown', action: 'Changed settings', date: new Date(Date.now() - 18000000) },
    { user: 'Eva Davis', action: 'Deleted comment', date: new Date(Date.now() - 21600000) },
    { user: 'Frank Miller', action: 'Made purchase', date: new Date(Date.now() - 25200000) },
    { user: 'Grace Wilson', action: 'Sent message', date: new Date(Date.now() - 28800000) },
    { user: 'Henry Moore', action: 'Completed task', date: new Date(Date.now() - 32400000) },
    { user: 'Ivy Taylor', action: 'Reported issue', date: new Date(Date.now() - 36000000) },
  ];

  // Insert sample data
  for (const activityData of sampleActivities) {
    const activity = new Activity();
    activity.user = activityData.user;
    activity.action = activityData.action;
    activity.date = activityData.date;
    await activityRepository.save(activity);
  }

  console.log(`Successfully seeded ${sampleActivities.length} activities`);
  console.log('Database seeding completed');

  // Close connection
  await dataSource.destroy();
}

// Execute seed
seedDatabase().catch(error => {
  console.error('Error during seeding:', error);
  process.exit(1);
});