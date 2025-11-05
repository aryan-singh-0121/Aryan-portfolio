import { X } from "lucide-react";

export function UploadPasswordModal({
  isOpen,
  onClose,
  password,
  setPassword,
  onSubmit,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      style={{ animation: "fadeInSlide 0.3s ease-out" }}
    >
      <div
        className="backdrop-blur-lg bg-slate-900 rounded-2xl p-8 border border-white/20 max-w-md w-full"
        style={{ animation: "scaleIn 0.3s ease-out" }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">🔐 Unlock Upload</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSubmit()}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <button
            onClick={onSubmit}
            className="w-full px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-semibold"
          >
            Unlock
          </button>
        </div>
      </div>
    </div>
  );
}
