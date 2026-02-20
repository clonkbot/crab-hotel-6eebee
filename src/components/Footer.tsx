export default function Footer() {
  return (
    <footer className="bg-[#0f2d3a] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🦀</span>
              <span className="font-display text-xl font-bold text-[#f5e6d3]">
                The Crab Hotel
              </span>
            </div>
            <p className="font-body text-[#f5e6d3]/50 text-sm max-w-xs">
              Where every guest walks sideways into luxury. Located on the pristine
              shores of Shell Bay since 1987.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-[#f5e6d3] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Rooms', 'Amenities', 'Dining', 'Spa', 'Events'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block font-body text-sm text-[#f5e6d3]/50 hover:text-[#e07b54] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-[#f5e6d3] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2 font-body text-sm text-[#f5e6d3]/50">
              <p>123 Shell Bay Drive</p>
              <p>Crab Cove, CC 12345</p>
              <p className="hover:text-[#e07b54] transition-colors cursor-pointer">
                +1 (555) CRAB-HTL
              </p>
              <p className="hover:text-[#e07b54] transition-colors cursor-pointer">
                stay@crabhotel.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f5e6d3]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {['🦀', '🐚', '🌊', '🏖️'].map((emoji, i) => (
                <span
                  key={i}
                  className="text-2xl opacity-30 hover:opacity-100 hover:scale-125 transition-all cursor-pointer"
                >
                  {emoji}
                </span>
              ))}
            </div>
            <p className="font-body text-xs text-[#f5e6d3]/30">
              © 2024 The Crab Hotel. All rights reserved. Walk sideways responsibly.
            </p>
          </div>

          {/* Attribution Footer */}
          <div className="mt-6 pt-4 border-t border-[#f5e6d3]/5 text-center">
            <p className="font-body text-xs text-[#f5e6d3]/25">
              Requested by @OxPaulius · Built by @clonkbot
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
