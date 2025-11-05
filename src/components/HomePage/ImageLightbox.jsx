import { X } from "lucide-react";

export function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      style={{ animation: "fadeInSlide 0.3s ease-out" }}
    >
      <div
        className="relative max-w-4xl w-full"
        style={{ animation: "scaleIn 0.3s ease-out" }}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transform hover:scale-125 transition-all"
        >
          <X size={32} />
        </button>
        <img
          src={image.image_url}
          alt={image.title}
          className="w-full rounded-xl"
        />
        <p className="text-center mt-4 text-gray-300">{image.title}</p>
      </div>
    </div>
  );
}
