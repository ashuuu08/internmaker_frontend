export default function ActivityList({ activities }) {
  return (
    <ul className="divide-y divide-gray-200">
      {activities.map((activity, index) => (
        <li key={index} className="py-2 flex justify-between">
          <span className="text-gray-600">{activity.action}</span>
          <span className="text-gray-400 text-sm">{activity.date}</span>
        </li>
      ))}
    </ul>
  );
}
