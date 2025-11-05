import { Mail, MessageCircle, Copy } from "lucide-react";

export function ContactInfo({ contactDetails, onCopy, copied }) {
  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
      <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 transform hover:translate-x-2 transition-all">
          <Mail size={24} className="text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-semibold">{contactDetails.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 transform hover:translate-x-2 transition-all">
          <MessageCircle size={24} className="text-purple-400" />
          <div>
            <p className="text-sm text-gray-400">WhatsApp</p>
            <p className="font-semibold">{contactDetails.phone}</p>
          </div>
        </div>
      </div>
      <button
        onClick={onCopy}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
      >
        <Copy size={20} />
        {copied ? "✅ Copied!" : "Copy Details"}
      </button>
    </div>
  );
}
