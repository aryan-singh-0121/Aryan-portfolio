import { useState } from "react";
import { X } from "lucide-react";

export function ProjectRequestModal({ isOpen, onClose }) {
  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    phone: "",
  });

  const handleProjectRequest = async () => {
    if (
      !requestData.name ||
      !requestData.email ||
      !requestData.projectDetails
    ) {
      alert("Please fill required fields");
      return;
    }
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      if (res.ok) {
        alert("✅ Request submitted! Aryan will contact you soon! 🚀");
        setRequestData({ name: "", email: "", projectDetails: "", phone: "" });
        onClose();
      }
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

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
          <h3 className="text-2xl font-bold">Request a Project</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transform hover:scale-125 transition-all"
          >
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={requestData.name}
            onChange={(e) =>
              setRequestData({ ...requestData, name: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={requestData.email}
            onChange={(e) =>
              setRequestData({ ...requestData, email: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={requestData.phone}
            onChange={(e) =>
              setRequestData({ ...requestData, phone: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <textarea
            placeholder="Project Details (what do you want to build?)"
            value={requestData.projectDetails}
            onChange={(e) =>
              setRequestData({
                ...requestData,
                projectDetails: e.target.value,
              })
            }
            rows="4"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          ></textarea>
          <button
            onClick={handleProjectRequest}
            className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold transform hover:scale-105"
          >
            Submit Request 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
