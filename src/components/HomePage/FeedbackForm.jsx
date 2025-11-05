import { useState } from "react";
import { Send } from "lucide-react";

export function FeedbackForm() {
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleFeedback = async () => {
    if (!feedbackName || !feedbackEmail || !feedbackMsg) {
      alert("Please fill all fields");
      return;
    }
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: feedbackName,
          email: feedbackEmail,
          message: feedbackMsg,
          feedbackType: "general",
        }),
      });
      if (res.ok) {
        alert("✅ Feedback submitted! Thank you Sir! 🙏");
        setFeedbackName("");
        setFeedbackEmail("");
        setFeedbackMsg("");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
      <h3 className="text-2xl font-bold mb-6">Send Feedback</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={feedbackName}
          onChange={(e) => setFeedbackName(e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all transform focus:scale-105"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={feedbackEmail}
          onChange={(e) => setFeedbackEmail(e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all transform focus:scale-105"
        />
        <textarea
          placeholder="Your Feedback or Message"
          value={feedbackMsg}
          onChange={(e) => setFeedbackMsg(e.target.value)}
          rows="4"
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all transform focus:scale-105"
        ></textarea>
        <button
          onClick={handleFeedback}
          className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <Send size={20} />
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
