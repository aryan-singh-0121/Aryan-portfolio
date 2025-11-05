import { Upload } from "lucide-react";

export function GalleryUpload({ isUnlocked, onUnlock, onUpload }) {
  if (!isUnlocked) {
    return (
      <div className="text-center py-8">
        <button
          onClick={onUnlock}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
        >
          🔐 Unlock Upload Section
        </button>
      </div>
    );
  }

  return (
    <label className="block" style={{ animation: "scaleIn 0.5s ease-out" }}>
      <div className="backdrop-blur-lg bg-white/10 rounded-2xl border-2 border-dashed border-white/30 p-8 hover:border-white/50 transition-all duration-300 cursor-pointer transform hover:scale-105">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onUpload(file);
          }}
          className="hidden"
        />
        <div className="text-center">
          <Upload
            size={48}
            className="mx-auto mb-4 opacity-50 animate-bounce"
          />
          <p className="text-lg font-semibold">
            Click to upload your study notes or images
          </p>
          <p className="text-sm text-gray-400">Support: JPG, PNG, GIF</p>
        </div>
      </div>
    </label>
  );
}
