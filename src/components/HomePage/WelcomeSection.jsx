export function WelcomeSection({ typewriterText }) {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{ animation: "fadeInSlide 0.8s ease-out forwards" }}
    >
      <div className="text-center">
        <h1
          className="text-6xl md:text-8xl font-bold mb-6"
          style={{
            animation: "fadeInSlide 0.8s ease-out forwards",
            backgroundImage:
              "linear-gradient(to right, #60a5fa, #a78bfa, #ec4899)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to
        </h1>
        <h2
          className="text-5xl md:text-7xl font-bold mb-8 min-h-[120px] flex items-center justify-center"
          style={{
            animation:
              "fadeInSlide 0.8s ease-out 0.2s forwards, textGlow 3s ease-in-out 1s infinite",
            opacity: 0,
            backgroundImage:
              "linear-gradient(to right, #60a5fa, #a78bfa, #ec4899)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {typewriterText}
          <span className="animate-pulse">|</span>
        </h2>
        <p
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          style={{
            animation: "fadeInSlide 0.8s ease-out 0.4s forwards",
            opacity: 0,
          }}
        >
          A Computer Science student at Lovely Professional University, Punjab.
          <br />
          Passionate web developer from Bihar turning ideas into reality. ✨
        </p>
        <div
          style={{
            animation: "fadeInSlide 0.8s ease-out 0.6s forwards",
            opacity: 0,
          }}
        >
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110"
          >
            Explore More ↓
          </a>
        </div>
      </div>
    </section>
  );
}
