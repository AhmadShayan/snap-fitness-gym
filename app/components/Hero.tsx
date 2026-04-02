export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(239,68,68,0.18) 0%, transparent 60%), #0a0a0a",
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          Johar Town&apos;s Premier Fitness Destination
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Build Your{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ef4444, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Best Body
          </span>
          <br />
          Start Today
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Snap Fitness Gym — state-of-the-art equipment, expert trainers, and a
          community that pushes you further. In the heart of Johar Town, Lahore.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#membership"
            className="px-8 py-4 rounded-full font-bold text-white text-base transition hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ef4444, #f97316)",
            }}
          >
            Get Started — Join Now
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full font-bold text-white text-base border border-white/20 hover:border-white/50 transition"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {[
            { value: "500+", label: "Active Members" },
            { value: "10+", label: "Expert Trainers" },
            { value: "50+", label: "Weekly Classes" },
            { value: "5★", label: "Google Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #ef4444, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
        <span>Scroll Down</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
