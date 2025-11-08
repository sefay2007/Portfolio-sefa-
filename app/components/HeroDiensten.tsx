export default function HeroDiensten() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] flex flex-col items-center justify-center bg-[#0d0d0d] overflow-hidden">
      {/* Grid achtergrond */}
      <div className="absolute inset-0 bg-[#000000] bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative text-center px-6">
        <p className="text-white/80 text-lg font-medium mb-2">Diensten</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500">
          Wat bied ik aan?
        </h1>
      </div>
    </section>
  );
}
