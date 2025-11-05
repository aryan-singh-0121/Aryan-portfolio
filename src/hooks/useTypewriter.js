import { useState, useEffect } from "react";

export function useTypewriter(fullText, typingSpeed = 50, deletingSpeed = 30) {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let speed = typingSpeed;

    const typewriterInterval = setInterval(() => {
      if (!isDeleting) {
        if (index < fullText.length) {
          setText(fullText.substring(0, index + 1));
          index++;
        } else {
          isDeleting = true;
          speed = deletingSpeed;
        }
      } else {
        if (index > 0) {
          setText(fullText.substring(0, index - 1));
          index--;
        } else {
          isDeleting = false;
          speed = typingSpeed;
        }
      }
    }, speed);

    return () => clearInterval(typewriterInterval);
  }, [fullText, typingSpeed, deletingSpeed]);

  return text;
}
