export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <span className="text-sm text-gray-600">Welcome back, Ashish 👋</span>
      <button className="text-sm text-red-600 hover:underline">Logout</button>
    </header>
  );
}
