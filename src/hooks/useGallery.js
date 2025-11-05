import { useState, useEffect } from "react";

export function useGallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setGalleryImages(data.data || []);
      } catch (error) {
        console.error("Error loading gallery:", error);
      }
    };

    fetchGallery();
  }, []);

  const handleImageUpload = async (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const imageUrl = event.target?.result;
      try {
        const res = await fetch("/api/gallery", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            imageUrl,
            title: file.name,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          setGalleryImages([data.data, ...galleryImages]);
          alert("✅ Image added to gallery!");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    reader.readAsDataURL(file);
  };

  return {
    galleryImages,
    selectedImage,
    setSelectedImage,
    handleImageUpload,
  };
}
