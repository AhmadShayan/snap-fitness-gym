export default function About() {
  const features = [
    {
      icon: "🏋️",
      title: "World-Class Equipment",
      desc: "Latest cardio machines, free weights, and strength training equipment maintained to the highest standards.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Trainers",
      desc: "Certified personal trainers who build custom plans tailored to your goals — whether fat loss, muscle gain, or fitness.",
    },
    {
      icon: "🕐",
      title: "Flexible Hours",
      desc: "Open 6 AM – 11 PM every day. Early birds and night owls both welcome.",
    },
    {
      icon: "🧹",
      title: "Clean & Safe Environment",
      desc: "Sanitized daily, air-conditioned, and secure — so you can focus entirely on your workout.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Left — Text */}
          <div>
            <div className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              More Than a Gym —{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ef4444, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A Community
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Located in Block H-2, Phase 2, Johar Town — Snap Fitness Gym has
              been transforming lives in Lahore with a commitment to real
              results, supportive coaching, and an environment where everyone
              belongs.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Whether you&apos;re just starting out or a seasoned athlete, our
              facility is equipped to take you to the next level.
            </p>
            <a
              href="https://wa.me/923229486920"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #ef4444, #f97316)" }}
            >
              Talk to Us on WhatsApp
            </a>
          </div>

          {/* Right — Gym image */}
          <div className="relative rounded-3xl overflow-hidden h-96 md:h-[480px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&q=80"
              alt="Snap Fitness Gym interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        {/* Feature cards row below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-red-500/40 transition"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
