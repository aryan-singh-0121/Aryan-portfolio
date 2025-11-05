export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-4 max-w-6xl mx-auto"
      style={{ animation: "floatIn 1s ease-out 0.4s both" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        🚀 Projects
      </h2>
      <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <p className="text-gray-300 mb-6">
          Coming soon! Check back later for my latest projects.
        </p>
        <a
          href="#downloads"
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110"
        >
          View Downloads
        </a>
      </div>
    </section>
  );
}
