export default function Services() {
  const services = [
    {
      icon: "💪",
      title: "Personal Training",
      desc: "One-on-one sessions with a certified trainer who builds your custom workout plan, tracks progress, and keeps you accountable.",
    },
    {
      icon: "🔥",
      title: "Weight Loss Programs",
      desc: "Structured fat-burning programs combining cardio, strength, and nutrition guidance for real, lasting results.",
    },
    {
      icon: "🏃",
      title: "Cardio Zone",
      desc: "Treadmills, bikes, ellipticals, and rowing machines — a full cardio suite to boost endurance and burn calories.",
    },
    {
      icon: "🦾",
      title: "Strength Training",
      desc: "Full free weights section, barbells, dumbbells (up to 50kg), squat racks, and all major machine groups.",
    },
    {
      icon: "🧘",
      title: "Group Classes",
      desc: "High-energy group sessions including HIIT, Zumba, and core training. Motivation through community.",
    },
    {
      icon: "🥊",
      title: "Boxing & MMA",
      desc: "Punch bags, speed bags, and trained boxing coaches to build agility, strength, and discipline.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ef4444, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Everything you need to reach your fitness goals — under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
