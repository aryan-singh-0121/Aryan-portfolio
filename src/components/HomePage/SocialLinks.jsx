import { Github, Linkedin, Instagram } from "lucide-react";

export function SocialLinks({ contactDetails }) {
  return (
    <div className="flex gap-4">
      <a
        href={contactDetails.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
        title="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href={contactDetails.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
        title="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href={contactDetails.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
        title="Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
}
