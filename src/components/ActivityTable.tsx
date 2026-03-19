import { getActivities } from '@/lib/database';

export default async function ActivityTable() {
  const activities = await getActivities();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200">{activity.user}</td>
              <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200">{activity.action}</td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                {new Date(activity.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {activities.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">No activities found</div>
      )}
    </div>
  );
}