import { useState, useEffect } from "react";

export function useUploadPassword() {
  const [uploadPassword, setUploadPassword] = useState("");
  const [showUploadPasswordForm, setShowUploadPasswordForm] = useState(false);
  const [isUploadUnlocked, setIsUploadUnlocked] = useState(false);

  useEffect(() => {
    const uploadUnlocked = localStorage.getItem("uploadUnlocked");
    if (uploadUnlocked === "true") {
      setIsUploadUnlocked(true);
    }
  }, []);

  const handleUploadPasswordSubmit = () => {
    if (uploadPassword === "Aryan@2025") {
      setIsUploadUnlocked(true);
      localStorage.setItem("uploadUnlocked", "true");
      setShowUploadPasswordForm(false);
    } else {
      alert("❌ Wrong password!");
      setUploadPassword("");
    }
  };

  return {
    uploadPassword,
    setUploadPassword,
    showUploadPasswordForm,
    setShowUploadPasswordForm,
    isUploadUnlocked,
    handleUploadPasswordSubmit,
  };
}
