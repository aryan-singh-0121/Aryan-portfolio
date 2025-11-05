"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Copy, MessageCircle } from "lucide-react";

export default function AryaAIAssistant() {
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
    { label: "🌐 Web Creation Issues", key: "webCreation" },
    { label: "🔧 Technical Support", key: "techSupport" },
    { label: "⚠️ Report Issues", key: "reportIssue" },
    { label: "📋 Other Queries", key: "portfolio" },
  ];

  const satisfactionPhrases = [
    "Wah Sir 👏 great question!",
    "Sure Sir 💡 yeh best solution rahega!",
    "Perfect Sir ✅ samjh gaye?",
    "Bilkul Sir! 🎯 main samjha dunga!",
    "Aapka feedback valuable hai 📬",
  ];

  // Get random response
  const getRandomResponse = (category) => {
    const responses = aiResponses[category] || aiResponses.greeting;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Initialize chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = getRandomResponse("greeting");
      setMessages([{ role: "ai", content: greeting }]);
    }
  }, [isOpen]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle user message
  const handleSendMessage = (category = null) => {
    let userMessage = input;
    let aiResponse = "";

    if (category) {
      // Suggestion clicked
      userMessage = category;
      aiResponse = getRandomResponse(category);
    } else if (input.trim()) {
      // User typed message
      // Detect category from keywords
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
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 z-40"
        aria-label="Open Arya AI Assistant"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-96 max-w-[calc(100vw-32px)] h-[600px] bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 z-40">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Arya AI 🤖</h3>
              <p className="text-sm text-blue-100">Always here to help!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#0F0F0F]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white dark:bg-[#262626] text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#262626] px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Quick suggestions:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => handleSendMessage(s.key)}
                    className="text-xs bg-gray-100 dark:bg-[#262626] hover:bg-gray-200 dark:hover:bg-[#333333] p-2 rounded transition-all duration-200"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-[#1E1E1E] rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-[#262626] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim()}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-all duration-200"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
