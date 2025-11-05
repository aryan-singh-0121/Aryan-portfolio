export function Header({ onRequestProject }) {
  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/10"
      style={{ animation: "slideInDown 0.8s ease-out" }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="flex items-center gap-3"
          style={{ animation: "fadeInSlide 0.8s ease-out" }}
        >
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            style={{ animation: "rotateBounce 3s ease-in-out infinite" }}
          >
            AS
          </div>
          <span className="text-xl font-bold">Aryan Singh</span>
        </div>
        <button
          onClick={onRequestProject}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Request Project
        </button>
      </nav>
    </header>
  );
}
