import { useState } from "react";
import { ContactInfo } from "./ContactInfo";
import { FeedbackForm } from "./FeedbackForm";

export function ContactSection({ contactDetails }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const text = `Name: Aryan Singh\nEmail: ${contactDetails.email}\nPhone: ${contactDetails.phone}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-6xl mx-auto"
      style={{ animation: "floatIn 1s ease-out 0.8s both" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        💬 Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ContactInfo
          contactDetails={contactDetails}
          onCopy={copyToClipboard}
          copied={copied}
        />
        <FeedbackForm />
      </div>
    </section>
  );
}
