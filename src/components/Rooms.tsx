import { useState } from 'react';

const rooms = [
  {
    name: 'The Hermit Suite',
    description: 'A cozy retreat perfect for solo travelers seeking solitude by the sea.',
    price: 189,
    features: ['Ocean View', 'King Bed', 'Private Balcony', 'Rain Shower'],
    emoji: '🐚',
    accent: '#e07b54',
  },
  {
    name: 'The Tide Pool Villa',
    description: 'Spacious family accommodation with direct beach access and tidal pool.',
    price: 349,
    features: ['Beachfront', '2 Bedrooms', 'Full Kitchen', 'Private Pool'],
    emoji: '🌊',
    accent: '#88b5a3',
  },
  {
    name: 'The Coral Penthouse',
    description: 'Our signature luxury suite spanning the entire top floor with panoramic views.',
    price: 599,
    features: ['360° Views', 'Butler Service', 'Rooftop Terrace', 'Spa Bath'],
    emoji: '🦀',
    accent: '#1a4a5e',
  },
];

export default function Rooms() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="rooms" className="relative py-16 md:py-24 lg:py-32 bg-[#1a4a5e]">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#1a4a5e"
            d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <span className="font-body text-[#e07b54] uppercase tracking-[0.3em] text-xs md:text-sm">
            Accommodations
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d3] mt-4">
            Choose Your Shell
          </h2>
          <p className="font-body text-[#f5e6d3]/60 mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
            Each room is uniquely designed to provide the ultimate coastal comfort experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative bg-[#f5e6d3] rounded-3xl p-6 md:p-8 transition-all duration-500 ${
                  hoveredIndex === index ? 'transform -translate-y-4 shadow-2xl' : ''
                }`}
              >
                {/* Room Emoji */}
                <div
                  className="text-5xl md:text-6xl mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    filter:
                      hoveredIndex === index
                        ? `drop-shadow(0 0 20px ${room.accent}40)`
                        : 'none',
                  }}
                >
                  {room.emoji}
                </div>

                {/* Room Name */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#1a4a5e] mb-3">
                  {room.name}
                </h3>

                {/* Description */}
                <p className="font-body text-[#1a4a5e]/70 text-sm mb-6">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-[#1a4a5e]/10 rounded-full font-body text-xs text-[#1a4a5e]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-body text-xs text-[#1a4a5e]/50 uppercase tracking-wider">
                      From
                    </span>
                    <div className="font-display text-2xl md:text-3xl font-bold text-[#1a4a5e]">
                      ${room.price}
                      <span className="text-sm font-normal text-[#1a4a5e]/50">
                        /night
                      </span>
                    </div>
                  </div>
                  <button
                    className="px-5 md:px-6 py-2 md:py-3 rounded-full font-body text-xs uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: room.accent }}
                  >
                    View
                  </button>
                </div>

                {/* Decorative Corner */}
                <div
                  className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 rounded-bl-3xl rounded-tr-3xl opacity-20"
                  style={{ backgroundColor: room.accent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
