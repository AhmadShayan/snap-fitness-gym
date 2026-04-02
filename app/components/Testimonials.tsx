export default function Testimonials() {
  const reviews = [
    {
      name: "Hassan Ali",
      role: "Member since 2024",
      rating: 5,
      text: "Best gym in Johar Town, no doubt. The trainers are incredibly knowledgeable and the equipment is always in great condition. I lost 12kg in 4 months here.",
    },
    {
      name: "Fatima Noor",
      role: "Member since 2023",
      rating: 5,
      text: "I was nervous joining a gym for the first time but the staff here made me feel so comfortable. The ladies section is clean, private, and well-equipped.",
    },
    {
      name: "Usman Tariq",
      role: "Member since 2024",
      rating: 5,
      text: "The personal training program is worth every rupee. My trainer built a plan specifically for me and I've gained serious strength in just 3 months.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ef4444, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Members Say
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &quot;{r.text}&quot;
              </p>
              <div>
                <div className="text-white font-semibold text-sm">{r.name}</div>
                <div className="text-gray-500 text-xs">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
