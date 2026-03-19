import MetricsCards from '@/components/MetricsCards';
import RevenueChart from '@/components/RevenueChart';
import ActivityTable from '@/components/ActivityTable';

export default async function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome to your analytics dashboard</p>
      </div>

      <MetricsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Revenue Trends</h2>
          <RevenueChart />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h2>
          <ActivityTable />
        </div>
      </div>
    </div>
  );
}