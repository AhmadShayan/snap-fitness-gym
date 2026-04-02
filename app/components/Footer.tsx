export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
            SF
          </div>
          <span className="font-bold text-lg text-white">
            Snap <span className="text-red-500">Fitness</span>
          </span>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#membership" className="hover:text-white transition">Membership</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Snap Fitness Gym, Johar Town, Lahore
        </div>
      </div>
    </footer>
  );
}
