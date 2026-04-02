import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    alt: "Gym floor with equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    alt: "Weights and dumbbells",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    alt: "Athlete training",
  },
  {
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    alt: "Personal training session",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
    alt: "Gym equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    alt: "Fitness training",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6" style={{ background: "#111" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Inside Snap Fitness
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
              Facility
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Premium equipment, serious atmosphere. Come see it for yourself.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-2xl break-inside-avoid group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
