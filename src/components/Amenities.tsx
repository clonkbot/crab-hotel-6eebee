const amenities = [
  {
    icon: '🦐',
    title: 'Seafood Restaurant',
    description: 'Fresh catch daily from local fishermen, prepared by our award-winning chef.',
  },
  {
    icon: '🧖',
    title: 'Ocean Spa',
    description: 'Rejuvenating treatments using sea minerals and coastal botanicals.',
  },
  {
    icon: '🏖️',
    title: 'Private Beach',
    description: 'Exclusive access to pristine white sand and crystal-clear waters.',
  },
  {
    icon: '🏊',
    title: 'Infinity Pool',
    description: 'Temperature-controlled pool overlooking the endless horizon.',
  },
  {
    icon: '🚴',
    title: 'Water Sports',
    description: 'Kayaking, paddleboarding, and snorkeling equipment available.',
  },
  {
    icon: '🌅',
    title: 'Sunset Cruises',
    description: 'Daily catamaran tours with champagne and hors d\'oeuvres.',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-16 md:py-24 lg:py-32 bg-[#f5e6d3] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 text-6xl md:text-8xl opacity-10 rotate-12">🦀</div>
      <div className="absolute bottom-32 left-10 text-5xl md:text-7xl opacity-10 -rotate-12">🐚</div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="font-body text-[#e07b54] uppercase tracking-[0.3em] text-xs md:text-sm">
            Experiences
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a4a5e] mt-4">
            Seaside Amenities
          </h2>
          <p className="font-body text-[#1a4a5e]/60 mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
            Everything you need for the perfect coastal getaway
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="group relative p-6 md:p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#1a4a5e]/10 hover:bg-white hover:shadow-xl hover:shadow-[#1a4a5e]/5 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {amenity.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl font-bold text-[#1a4a5e] mb-2">
                {amenity.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-[#1a4a5e]/60">
                {amenity.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e07b54] to-[#88b5a3] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
