const Navbar = () => {
  return (
    <nav className="bg-black border-b border-neutral-800 w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white tracking-tight">DaiWick</a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 ml-12">
            <a href="/" className="text-white/80 hover:text-white font-medium transition">Home</a>
            <a href="/approach" className="text-white/80 hover:text-white font-medium transition">Our Approach</a>
            <a href="/services" className="text-white/80 hover:text-white font-medium transition">Services</a>
            <a href="/about" className="text-white/80 hover:text-white font-medium transition">About</a>
          </div>

          {/* Right-aligned buttons */}
          <div className="flex items-center space-x-3">
            <a href="/contact" className="px-4 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 font-semibold text-sm transition">Contact</a>
            <a href="/lets-talk" className="px-4 py-1.5 rounded-full bg-red-700 hover:bg-red-800 text-white font-semibold text-sm shadow transition">Let's Talk</a>
          </div>

          {/* Mobile menu button (hidden for now) */}
          {/* <div className="md:hidden flex items-center">
            <button className="text-white hover:text-red-600">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
