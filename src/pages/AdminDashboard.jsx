import Sidebar from "../components/AdminSidebar.jsx";
import Navbar from "../components/AdminNavbar.jsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-6">
            Dashboard
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Users" value="1,245" />
            <StatCard title="Enrollments" value="312" />
            <StatCard title="Revenue" value="₹48,500" />
            <StatCard title="Active Sessions" value="87" />
          </div>

          {/* Section */}
          <div className="mt-8 bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-medium mb-4">
              Recent Activity
            </h2>
            <p className="text-gray-500 text-sm">
              No recent activity to display.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
