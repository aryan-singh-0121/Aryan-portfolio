import PasswordProtectedDownloads from "@/components/PasswordProtectedDownloads";

export function DownloadsSection({ certificates, resumes }) {
  return (
    <section
      id="downloads"
      className="py-20 px-4 max-w-6xl mx-auto"
      style={{ animation: "floatIn 1s ease-out 0.6s both" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        📥 Downloads, Certificates & Resume
      </h2>
      <PasswordProtectedDownloads
        certificates={certificates}
        resumes={resumes}
      />
    </section>
  );
}
