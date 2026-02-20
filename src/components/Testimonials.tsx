import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "The Hermit Suite was absolutely perfect! I've never felt more relaxed. The staff even knew my coffee order by day two.",
    author: 'Sebastian T.',
    location: 'Under the Sea',
    rating: 5,
  },
  {
    text: "Best family vacation ever! The kids loved the tidal pools and we couldn't get enough of the private beach. Already planning our return!",
    author: 'Pearl C.',
    location: 'Shell Beach, CA',
    rating: 5,
  },
  {
    text: "The Coral Penthouse exceeded every expectation. Waking up to 360° ocean views with fresh pastries delivered to our door... pure magic.",
    author: 'Sandy B.',
    location: 'Coral Springs, FL',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reviews"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#88b5a3]/20 to-[#f5e6d3]"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-body text-[#e07b54] uppercase tracking-[0.3em] text-xs md:text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a4a5e] mt-4">
            Guest Reviews
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="relative h-[350px] md:h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === activeIndex
                  ? 'opacity-100 translate-x-0 scale-100'
                  : index < activeIndex
                  ? 'opacity-0 -translate-x-full scale-95'
                  : 'opacity-0 translate-x-full scale-95'
              }`}
            >
              <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl shadow-[#1a4a5e]/10 h-full flex flex-col justify-center">
                {/* Rating */}
                <div className="flex gap-1 mb-4 md:mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl md:text-2xl">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-lg md:text-xl lg:text-2xl text-[#1a4a5e] text-center italic mb-6 md:mb-8 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="font-display text-base md:text-lg font-bold text-[#1a4a5e]">
                    {testimonial.author}
                  </div>
                  <div className="font-body text-xs md:text-sm text-[#1a4a5e]/50">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-[#e07b54] w-8'
                  : 'bg-[#1a4a5e]/20 hover:bg-[#1a4a5e]/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
