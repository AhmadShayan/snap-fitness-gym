export default function Membership() {
  const plans = [
    {
      name: "Basic",
      price: "Rs. 3,000",
      period: "/month",
      desc: "Perfect for getting started",
      features: [
        "Full gym access",
        "Cardio & weights zone",
        "Locker & changing room",
        "1 fitness assessment",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "Rs. 5,000",
      period: "/month",
      desc: "Most popular choice",
      features: [
        "Everything in Basic",
        "4 personal training sessions",
        "Group class access",
        "Nutrition guidance",
        "Progress tracking",
      ],
      highlight: true,
    },
    {
      name: "Elite",
      price: "Rs. 8,000",
      period: "/month",
      desc: "For serious athletes",
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "Custom meal plan",
        "Priority equipment access",
        "Monthly body composition",
        "WhatsApp coach support",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="membership" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Membership{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ef4444, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Plans
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Choose a plan that works for your goals and budget. No hidden fees.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "border-2 border-red-500 bg-gradient-to-b from-red-500/10 to-transparent relative"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-500 to-orange-500">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/923229486920?text=Hi!%20I%27m%20interested%20in%20the%20Snap%20Fitness%20Gym%20membership."
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition hover:opacity-90 ${
                  plan.highlight
                    ? "text-white bg-gradient-to-r from-red-500 to-orange-500"
                    : "text-white border border-white/20 hover:border-red-500/50"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          All plans include free trial day. Contact us to schedule yours.
        </p>
      </div>
    </section>
  );
}
