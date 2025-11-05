"use client";

import { useState } from "react";
import { Eye, EyeOff, Download, Lock, X } from "lucide-react";

export default function DownloadsPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadTitle, setUploadTitle] = useState("");

  const CORRECT_PASSWORD = "Mymack@@1122";

  // Handle password verification
  const handleUnlock = () => {
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("❌ Wrong password! Try again.");
    }
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    setUploadFile(e.target.files?.[0] || null);
  };

  const handleUploadSubmit = () => {
    if (!uploadFile || !uploadTitle) {
      alert("Please select a file and add a title");
      return;
    }

    // Simulate file upload
    setUploadedFiles([
      ...uploadedFiles,
      {
        id: Date.now(),
        name: uploadFile.name,
        title: uploadTitle,
        size: (uploadFile.size / 1024 / 1024).toFixed(2) + " MB",
        date: new Date().toLocaleDateString(),
      },
    ]);

    // Reset form
    setUploadFile(null);
    setUploadTitle("");
    alert("✅ File uploaded successfully!");
  };

  // Default demo files
  const demoFiles = [
    {
      id: 1,
      title: "Portfolio Code Snippets",
      name: "code-snippets.zip",
      size: "2.4 MB",
      date: "2025-01-15",
    },
    {
      id: 2,
      title: "React Projects Bundle",
      name: "react-projects.zip",
      size: "5.8 MB",
      date: "2025-01-14",
    },
    {
      id: 3,
      title: "Study Notes - Web Development",
      name: "web-dev-notes.pdf",
      size: "3.2 MB",
      date: "2025-01-10",
    },
    {
      id: 4,
      title: "Database Design Tutorial",
      name: "database-tutorial.zip",
      size: "4.1 MB",
      date: "2025-01-05",
    },
  ];

  const allFiles = [...uploadedFiles, ...demoFiles];

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="backdrop-blur-lg bg-slate-900/80 rounded-2xl p-8 border border-white/20 max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <Lock size={48} className="text-yellow-400" />
          </div>

          <h1 className="text-3xl font-bold text-center mb-2">
            🔐 Protected Downloads
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Enter password to access my documents and project files.
          </p>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleUnlock()}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 pr-10"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              onClick={handleUnlock}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold"
            >
              Unlock Downloads
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            Contact Aryan if you forgot the password 🔑
          </p>
        </div>
      </div>
    );
  }

  // Unlocked view
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-black/30 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xl font-bold">
              AS
            </div>
            <span className="text-xl font-bold">Downloads</span>
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Back to Home
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          ✅ Downloads Unlocked!
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Access my code snippets, projects, and study materials
        </p>

        {/* Upload Section */}
        <div className="mb-12">
          <button
            onClick={() => setShowUpload(!showUpload)}
            className="mb-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-semibold"
          >
            📤 {showUpload ? "Close Upload" : "Upload New File"}
          </button>

          {showUpload && (
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 mb-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    File Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., My React Project"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Select File
                  </label>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white file:text-white file:bg-blue-500/20 file:border-0 file:rounded file:px-3 file:py-1 focus:outline-none focus:border-blue-400"
                  />
                  {uploadFile && (
                    <p className="text-sm text-gray-300 mt-2">
                      Selected: {uploadFile.name}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleUploadSubmit}
                  className="w-full px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-semibold"
                >
                  Upload File
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFiles.map((file) => (
            <div
              key={file.id}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <div className="mb-4">
                <p className="text-2xl mb-2">📦</p>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {file.title}
                </h3>
                <p className="text-sm text-gray-400">{file.name}</p>
              </div>

              <div className="space-y-2 mb-4 text-sm text-gray-400">
                <p>📊 Size: {file.size}</p>
                <p>📅 Date: {file.date}</p>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                <Download size={20} />
                Download
              </button>
            </div>
          ))}
        </div>

        {allFiles.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">
              No files available yet. Check back soon! 📄
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-center text-gray-400 mt-12">
        <p>Made with ❤️ by Aryan Singh | © 2025</p>
      </footer>
    </div>
  );
}
