export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <span className="text-sm text-gray-600">
        Welcome back 👋
      </span>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">
          Ashish
        </span>
        <button className="text-sm text-red-600 hover:underline">
          Logout
        </button>
      </div>
    </header>
  );
}
