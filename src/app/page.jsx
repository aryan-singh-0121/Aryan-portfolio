"use client";

import { useState } from "react";
import AryaAIAssistantV2 from "@/components/AryaAIAssistantV2";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useSessionId } from "@/hooks/useSessionId";
import { useEngagement } from "@/hooks/useEngagement";
import { useGallery } from "@/hooks/useGallery";
import { useDownloads } from "@/hooks/useDownloads";
import { useUploadPassword } from "@/hooks/useUploadPassword";
import { GlobalStyles } from "@/components/HomePage/GlobalStyles";
import { AnimatedBackground } from "@/components/HomePage/AnimatedBackground";
import { Header } from "@/components/HomePage/Header";
import { WelcomeSection } from "@/components/HomePage/WelcomeSection";
import { AboutSection } from "@/components/HomePage/AboutSection";
import { GallerySection } from "@/components/HomePage/GallerySection";
import { ImageLightbox } from "@/components/HomePage/ImageLightbox";
import { ProjectsSection } from "@/components/HomePage/ProjectsSection";
import { DownloadsSection } from "@/components/HomePage/DownloadsSection";
import { ContactSection } from "@/components/HomePage/ContactSection";
import { ProjectRequestModal } from "@/components/HomePage/ProjectRequestModal";
import { UploadPasswordModal } from "@/components/HomePage/UploadPasswordModal";
import { Footer } from "@/components/HomePage/Footer";

export default function HomePage() {
  const [showRequestForm, setShowRequestForm] = useState(false);

  // Contact details
  const contactDetails = {
    email: "aryanrajppm@gmail.com",
    phone: "+91 9534987461",
    whatsapp: "https://wa.me/919534987461",
    github: "https://github.com/aryan-singh-0121",
    instagram: "https://www.instagram.com/_aryan_singh0121/",
    linkedin: "https://www.linkedin.com/in/aryan-raj-3064a0395/",
  };

  // Custom hooks
  const typewriterText = useTypewriter("Aryan Singh's Web Page");
  const sessionId = useSessionId();
  const engagement = useEngagement(sessionId);
  const gallery = useGallery();
  const { certificates, resumes } = useDownloads();
  const uploadPassword = useUploadPassword();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white overflow-hidden">
      <GlobalStyles />
      <AnimatedBackground />

      <Header onRequestProject={() => setShowRequestForm(true)} />

      <WelcomeSection typewriterText={typewriterText} />

      <AboutSection engagement={engagement} contactDetails={contactDetails} />

      <GallerySection
        images={gallery.galleryImages}
        isUnlocked={uploadPassword.isUploadUnlocked}
        onUnlock={() => uploadPassword.setShowUploadPasswordForm(true)}
        onUpload={gallery.handleImageUpload}
        onImageClick={gallery.setSelectedImage}
      />

      <ImageLightbox
        image={gallery.selectedImage}
        onClose={() => gallery.setSelectedImage(null)}
      />

      <ProjectsSection />

      <DownloadsSection certificates={certificates} resumes={resumes} />

      <ContactSection contactDetails={contactDetails} />

      <ProjectRequestModal
        isOpen={showRequestForm}
        onClose={() => setShowRequestForm(false)}
      />

      <UploadPasswordModal
        isOpen={uploadPassword.showUploadPasswordForm}
        onClose={() => uploadPassword.setShowUploadPasswordForm(false)}
        password={uploadPassword.uploadPassword}
        setPassword={uploadPassword.setUploadPassword}
        onSubmit={uploadPassword.handleUploadPasswordSubmit}
      />

      <AryaAIAssistantV2 />

      <Footer />
    </div>
  );
}
