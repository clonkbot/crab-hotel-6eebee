import { useState } from 'react';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1a4a5e]/95 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-3xl md:text-4xl transform group-hover:-scale-x-100 transition-transform duration-500">
              🦀
            </span>
            <span
              className={`font-display text-xl md:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#f5e6d3]' : 'text-[#1a4a5e]'
              }`}
            >
              The Crab Hotel
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Rooms', 'Amenities', 'Reviews', 'Book'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-body text-sm uppercase tracking-widest transition-all duration-300 hover:tracking-[0.2em] ${
                  isScrolled
                    ? 'text-[#f5e6d3]/80 hover:text-[#e07b54]'
                    : 'text-[#1a4a5e]/80 hover:text-[#e07b54]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#f5e6d3]' : 'text-[#1a4a5e]'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a4a5e] transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {['Rooms', 'Amenities', 'Reviews', 'Book'].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-3xl text-[#f5e6d3] hover:text-[#e07b54] transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
