"use client";

import { useState } from "react";
import { Download } from "lucide-react";

export default function PasswordProtectedDownloads({ certificates, resumes }) {
  const [uploadedFiles] = useState([]);

  // Default demo files for additional downloads
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

  // Directly show unlocked view - PUBLIC ACCESS
  return (
    <div className="space-y-12">
      <style jsx global>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Certificates */}
      {certificates && certificates.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🎓 Certificates
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30"
                style={{
                  animation: `floatIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {cert.image_url && (
                  <img
                    src={cert.image_url}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
                  />
                )}
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                  {cert.description && (
                    <p className="text-sm text-gray-300 mb-2">
                      {cert.description}
                    </p>
                  )}
                  <div className="text-xs text-gray-500 mb-3">
                    {cert.certificate_type} • {cert.issued_date}
                  </div>
                  {cert.download_url && (
                    <a
                      href={cert.download_url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resumes */}
      {resumes && resumes.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            📄 Resume / CV
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {resumes.map((resume, index) => (
              <div
                key={resume.id}
                className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30"
                style={{
                  animation: `floatIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4">
                  <p className="text-4xl mb-2">📋</p>
                  <h4 className="font-bold text-lg mb-2">{resume.title}</h4>
                  {resume.description && (
                    <p className="text-sm text-gray-300">
                      {resume.description}
                    </p>
                  )}
                </div>
                {resume.is_latest && (
                  <span className="inline-block px-3 py-1 bg-green-500/30 text-green-300 text-xs rounded-full mb-4">
                    Latest Version ⭐
                  </span>
                )}
                <a
                  href={resume.file_url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Files */}
      <div>
        <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          📦 Project Files & Materials
        </h3>
        {allFiles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFiles.map((file, index) => (
              <div
                key={file.id}
                className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30"
                style={{
                  animation: `floatIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4">
                  <p className="text-3xl mb-2">📦</p>
                  <h4 className="font-bold text-lg mb-1">{file.title}</h4>
                  <p className="text-sm text-gray-400">{file.name}</p>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-400">
                  <p>📊 Size: {file.size}</p>
                  <p>📅 Date: {file.date}</p>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                  <Download size={16} />
                  Download
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">
              No files available yet. Check back soon! 📄
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
