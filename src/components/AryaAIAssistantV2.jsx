"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, AlertCircle } from "lucide-react";

export default function AryaAIAssistantV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // AI responses database
  const aiResponses = {
    greeting: [
      "👋 Hello Sir! Main **Arya AI** 🤖 — aapka smart digital assistant hu.\nBataiye Sir, main aapki kis tarah madad kar sakta hu aaj? 😊",
      "Hey there Sir 👋\nMain **Arya AI** — aapka personal digital helper hu 💡\nBataiye Sir, aaj main aapke liye kya kar sakta hu 😊",
      "Namaste Sir 🙏\nMain **Arya AI** — technical support assistant hu.\nAgar aapko website ya app development me help chahiye, please detail batayein 🧑‍💻",
    ],
    webCreation: [
      "Wah Sir 👏 great question!\nWeb banwane ke liye mujhe chahiye:\n1️⃣ Website ka purpose (portfolio/business/ecommerce)\n2️⃣ Main features (blog, shop, contact form)\n3️⃣ Design preference (modern/minimal/colorful)\n\nBataiye Sir, aapka idea kya hai? 💡",
      "Sure Sir 💡 Web creation aasan hai!\nMujhe batayein:\n• Aapka domain name\n• Budget range\n• Timeline\n\nMain aapke liye perfect solution deta hu ⚙️",
    ],
    techSupport: [
      "Bilkul Sir! Main aapka kaam easy banane ke liye hi yahan hu 🤝\nThoda detail batayiye aapke technical issue ke baare mein ✨",
      "Tech issue? Koi problem nahi Sir 🔧\nMujhe batayein:\n• Kya galat ho raha hai?\n• Browser/device?\n• Kab start hua?\n\nMain dhundta hu solution! 🔍",
    ],
    reportIssue: [
      "Arre Sir, issue ho gaya? 😟\nMujhe batayiye kya problem hai, main fix karunga! 🛠️",
      "Sir, mujhe report do kya issue hai:\n• Page load nahi ho raha?\n• Button work nahi kar raha?\n• Gallery problem?\n\nMain Aryan ko notify kar dunga! ⚠️",
    ],
    portfolio: [
      "Aapka portfolio check karna chahte ho? 🎨\nMain Aryan ke sabhi projects, certificates, aur resume dikha sakta hu.\n\nKya dekhna chahte ho? 👇\n• Projects showcase\n• Resume/CV\n• Certificates\n• Contact me",
    ],
    downloads: [
      "Aapko downloads section chahiye? 📥\nAryan ke paas code snippets, projects, notes ho sakte hain.\n\nPassword protected hai Sir - Aryan se pooch lena! 🔐",
      "Downloads section available hai! 📥\nAgar zip file ya documents chahiye, aapko password dena padega. 🔐\nAryan Singh se contact karo:\n📧 aryanrajppm@gmail.com\n📱 +91 9534987461",
    ],
    request: [
      "Bilkul Sir! 🎯\nAapka apna web ya app banwana chahte ho?\n\nMujhe batayiye:\n1️⃣ Project name\n2️⃣ Kya chahiye (website/app/design)\n3️⃣ Budget aur timeline\n\nMain Aryan ko bhej dunga aapke liye! 📬",
      "Great Sir! 💼\nProject request form bharta hu?\n\nBas ye details do:\n• Aapka naam\n• Email\n• Project details\n\nAryan respond karega! ✅",
    ],
    thanks: [
      "Pleasure Sir 😊 Main **Arya AI** hu — aapka kaam asaan banana mera mission hai 🚀\nAapka din shubh ho! Phir milte hai 👋✨",
      "Thank you Sir 💬 Main har baar aapke project ko aur better banata jaunga 🚀\nPhir milenege! 🤝",
    ],
  };

  const suggestions = [
    { label: "🌐 Web Creation", key: "webCreation" },
    { label: "🔧 Tech Support", key: "techSupport" },
    { label: "⚠️ Report Issues", key: "reportIssue" },
    { label: "📋 Other", key: "portfolio" },
  ];

  const getRandomResponse = (category) => {
    const responses = aiResponses[category] || aiResponses.greeting;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = getRandomResponse("greeting");
      setMessages([{ role: "ai", content: greeting }]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (category = null) => {
    let userMessage = input;
    let aiResponse = "";

    if (category) {
      userMessage = category;
      aiResponse = getRandomResponse(category);
    } else if (input.trim()) {
      const lowerInput = input.toLowerCase();
      if (
        lowerInput.includes("web") ||
        lowerInput.includes("website") ||
        lowerInput.includes("create")
      ) {
        aiResponse = getRandomResponse("webCreation");
      } else if (
        lowerInput.includes("problem") ||
        lowerInput.includes("issue") ||
        lowerInput.includes("error")
      ) {
        aiResponse = getRandomResponse("techSupport");
      } else if (
        lowerInput.includes("request") ||
        lowerInput.includes("project")
      ) {
        aiResponse = getRandomResponse("request");
      } else if (
        lowerInput.includes("download") ||
        lowerInput.includes("zip")
      ) {
        aiResponse = getRandomResponse("downloads");
      } else if (
        lowerInput.includes("thank") ||
        lowerInput.includes("thanks")
      ) {
        aiResponse = getRandomResponse("thanks");
      } else {
        aiResponse = getRandomResponse("portfolio");
      }
    }

    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Robot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 z-40 animate-bounce"
        aria-label="Open Arya AI Assistant"
        style={{
          animationDelay: "0s",
          boxShadow:
            "0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.1)",
        }}
      >
        <style jsx>{`
          @keyframes robotBounce {
            0%, 100% {
              transform: translateY(0) rotate(-5deg);
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
            }
          }
          
          @keyframes robotFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .animate-bounce {
            animation: robotFloat 2s ease-in-out infinite;
          }

          .robot-icon {
            font-size: 2.5rem;
            animation: robotBounce 2s ease-in-out infinite;
          }
        `}</style>
        <span className="robot-icon">🤖</span>
      </button>

      {/* Chat Window - Large */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-32 sm:right-8 w-full sm:w-[600px] h-full sm:h-[800px] max-h-screen sm:max-h-[800px] bg-white dark:bg-[#1E1E1E] rounded-none sm:rounded-3xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 z-40">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-none sm:rounded-t-3xl flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="text-3xl animate-bounce">🤖</div>
              <div>
                <h3 className="font-bold text-xl sm:text-2xl">Arya AI</h3>
                <p className="text-xs sm:text-sm text-blue-100">
                  Your Smart Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50 dark:bg-[#0F0F0F]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom duration-300`}
              >
                <div
                  className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-xl text-sm sm:text-base leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none"
                      : "bg-white dark:bg-[#262626] text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#262626] px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 rounded-bl-none">
                  <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions - Show only on first message */}
          {messages.length === 1 && (
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-3 sm:py-4">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 font-semibold">
                Quick suggestions:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => handleSendMessage(s.key)}
                    className="text-xs sm:text-sm bg-gray-100 dark:bg-[#262626] hover:bg-gray-200 dark:hover:bg-[#333333] p-2 sm:p-3 rounded-lg transition-all duration-200 font-medium"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 sm:p-6 bg-white dark:bg-[#1E1E1E] rounded-none sm:rounded-b-3xl">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 px-4 py-2 sm:py-3 bg-gray-100 dark:bg-[#262626] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || loading}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-200"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
