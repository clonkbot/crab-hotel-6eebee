import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Ocean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5e6d3] via-[#88b5a3]/30 to-[#1a4a5e]/20" />

      {/* Sand Texture Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Wave Decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1a4a5e"
            fillOpacity="0.2"
            className="animate-wave"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="#1a4a5e"
            fillOpacity="0.4"
            className="animate-wave-slow"
            d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Floating Shells */}
      <div className="absolute top-1/4 left-10 text-4xl md:text-6xl animate-float opacity-40">🐚</div>
      <div className="absolute top-1/3 right-16 text-3xl md:text-5xl animate-float-delayed opacity-30">🐚</div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl md:text-4xl animate-float opacity-25">🌊</div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Animated Crab */}
        <div
          className={`text-6xl md:text-8xl lg:text-9xl mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block animate-crab-walk">🦀</span>
        </div>

        <h1
          className={`font-display text-4xl md:text-6xl lg:text-8xl font-bold text-[#1a4a5e] mb-4 md:mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          The Crab Hotel
        </h1>

        <p
          className={`font-display text-lg md:text-2xl lg:text-3xl text-[#e07b54] italic mb-6 md:mb-8 transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          "Where every guest walks sideways into luxury"
        </p>

        <p
          className={`font-body text-base md:text-lg text-[#1a4a5e]/70 max-w-2xl mx-auto mb-8 md:mb-12 transition-all duration-1000 delay-500 px-4 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Nestled on the pristine shores of Shell Bay, our boutique coastal retreat
          offers an unforgettable escape where the ocean meets unparalleled comfort.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#book"
            className="group relative px-8 py-4 bg-[#e07b54] text-white font-body uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#e07b54]/30"
          >
            <span className="relative z-10">Book Your Shell</span>
            <div className="absolute inset-0 bg-[#1a4a5e] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#rooms"
            className="px-8 py-4 border-2 border-[#1a4a5e] text-[#1a4a5e] font-body uppercase tracking-widest text-sm rounded-full hover:bg-[#1a4a5e] hover:text-[#f5e6d3] transition-all duration-300"
          >
            Explore Rooms
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#1a4a5e]/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
