import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="book" className="relative py-16 md:py-24 lg:py-32 bg-[#1a4a5e] overflow-hidden">
      {/* Decorative Waves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#f5e6d3"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,181.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-body text-[#e07b54] uppercase tracking-[0.3em] text-xs md:text-sm">
            Reservations
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d3] mt-4">
            Book Your Escape
          </h2>
          <p className="font-body text-[#f5e6d3]/60 mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
            Begin your coastal journey today. Shell availability is limited!
          </p>
        </div>

        <div className="bg-[#f5e6d3] rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 md:py-12">
              <div className="text-5xl md:text-6xl mb-4 animate-bounce">🦀</div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#1a4a5e] mb-2">
                Pinch-Perfect!
              </h3>
              <p className="font-body text-[#1a4a5e]/60">
                We've received your inquiry. Our team will scuttle over to you shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Check In */}
                <div>
                  <label className="block font-body text-xs uppercase tracking-wider text-[#1a4a5e]/60 mb-2">
                    Check In
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) =>
                      setFormData({ ...formData, checkIn: e.target.value })
                    }
                    className="w-full px-4 py-3 md:py-4 bg-white rounded-xl border-2 border-transparent focus:border-[#e07b54] outline-none font-body text-[#1a4a5e] transition-colors"
                  />
                </div>

                {/* Check Out */}
                <div>
                  <label className="block font-body text-xs uppercase tracking-wider text-[#1a4a5e]/60 mb-2">
                    Check Out
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) =>
                      setFormData({ ...formData, checkOut: e.target.value })
                    }
                    className="w-full px-4 py-3 md:py-4 bg-white rounded-xl border-2 border-transparent focus:border-[#e07b54] outline-none font-body text-[#1a4a5e] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Guests */}
                <div>
                  <label className="block font-body text-xs uppercase tracking-wider text-[#1a4a5e]/60 mb-2">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="w-full px-4 py-3 md:py-4 bg-white rounded-xl border-2 border-transparent focus:border-[#e07b54] outline-none font-body text-[#1a4a5e] transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body text-xs uppercase tracking-wider text-[#1a4a5e]/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 md:py-4 bg-white rounded-xl border-2 border-transparent focus:border-[#e07b54] outline-none font-body text-[#1a4a5e] transition-colors placeholder:text-[#1a4a5e]/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 md:py-5 bg-[#e07b54] text-white font-body uppercase tracking-widest text-sm rounded-xl hover:bg-[#1a4a5e] transition-colors duration-300 flex items-center justify-center gap-3"
              >
                <span>Check Availability</span>
                <span className="text-xl">🦀</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
