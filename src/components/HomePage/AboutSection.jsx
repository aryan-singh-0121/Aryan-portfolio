import { ProfileImage } from "./ProfileImage";
import { EngagementButtons } from "./EngagementButtons";
import { SocialLinks } from "./SocialLinks";

export function AboutSection({ engagement, contactDetails }) {
  return (
    <section
      id="about"
      className="py-20 px-4 max-w-6xl mx-auto"
      style={{ animation: "floatIn 0.8s ease-out" }}
    >
      <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ProfileImage />

          <div style={{ animation: "slideInRight 0.8s ease-out" }}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm Aryan Singh, a Computer Science student at Lovely Professional
              University, Punjab. A passionate web developer from Bihar who
              loves turning ideas into clean, functional, and creative digital
              experiences.
            </p>

            <EngagementButtons
              likes={engagement.likes}
              follows={engagement.follows}
              comments={engagement.comments}
              userLiked={engagement.userLiked}
              userFollowed={engagement.userFollowed}
              onLike={engagement.handleLike}
              onFollow={engagement.handleFollow}
            />

            <SocialLinks contactDetails={contactDetails} />
          </div>
        </div>
      </div>
    </section>
  );
}
