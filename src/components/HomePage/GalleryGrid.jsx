export function GalleryGrid({ images, onImageClick }) {
  if (images.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p>No images yet. Upload your first study note! 📚</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div
          key={img.id}
          onClick={() => onImageClick(img)}
          className="backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30"
          style={{
            animation: `floatIn 0.5s ease-out ${index * 0.1}s both`,
          }}
        >
          <img
            src={img.image_url}
            alt={img.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="p-4">
            <p className="text-sm text-gray-300">{img.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
