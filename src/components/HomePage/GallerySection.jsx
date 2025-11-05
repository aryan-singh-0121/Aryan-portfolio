import { GalleryUpload } from "./GalleryUpload";
import { GalleryGrid } from "./GalleryGrid";

export function GallerySection({
  images,
  isUnlocked,
  onUnlock,
  onUpload,
  onImageClick,
}) {
  return (
    <section
      id="gallery"
      className="py-20 px-4 max-w-6xl mx-auto"
      style={{ animation: "floatIn 1s ease-out 0.2s both" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        📸 My Study Notes & Gallery
      </h2>

      <div className="mb-12">
        <GalleryUpload
          isUnlocked={isUnlocked}
          onUnlock={onUnlock}
          onUpload={onUpload}
        />
      </div>

      <GalleryGrid images={images} onImageClick={onImageClick} />
    </section>
  );
}
