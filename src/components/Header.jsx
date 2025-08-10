import { Link } from "react-router";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-14 flex items-center justify-between">
            <Link to="/" className="font-bold text-xl tracking-tight text-gray-900 select-none">
              GhibliVault
            </Link>

            <nav className="flex items-center gap-6">
              <a
                href="#films"
                className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Films
              </a>
              <a
                href="#people"
                className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                People
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            GhibliVault
          </span>
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Explore the world of Studio Ghibli films & characters
        </p>
      </div>
    </>
  );
}

export default Header;
