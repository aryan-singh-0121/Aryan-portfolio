import { Image as ImageIcon } from "lucide-react";

export function ProfileImage() {
  return (
    <div
      className="flex justify-center"
      style={{ animation: "slideInLeft 0.8s ease-out" }}
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 bg-gray-800 flex items-center justify-center transform hover:scale-110 transition-all duration-300">
          <img
            src="https://avatars.githubusercontent.com/u/aryan-singh-0121"
            alt="Aryan Singh"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div
            className="text-center absolute inset-0 flex flex-col items-center justify-center"
            style={{ display: "none" }}
          >
            <ImageIcon size={64} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm text-gray-400">Aryan Singh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
