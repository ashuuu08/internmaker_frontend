export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 bg-white shadow-md flex-col">
      <div className="p-6 text-xl font-bold border-b">MyLearning</div>
      <nav className="flex-1 p-4 space-y-2">
        <SidebarItem label="Home" />
        <SidebarItem label="My Courses" />
        <SidebarItem label="Profile" />
        <SidebarItem label="Settings" />
      </nav>
    </aside>
  );
}

function SidebarItem({ label }) {
  return (
    <button className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
      {label}
    </button>
  );
}
