export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Infobengs"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              INFOBENGS
            </h1>
            <p className="text-xs text-gray-500">
              Innovate. Transform. Elevate.
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Industries</li>
          <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Get In Touch
        </button>

      </div>
    </nav>
  );
}