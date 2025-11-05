export function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes fadeInSlide {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes textGlow {
        0%, 100% {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.5),
            0 0 20px rgba(168, 85, 247, 0.3);
        }
        50% {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.8),
            0 0 40px rgba(168, 85, 247, 0.6);
        }
      }
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
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @keyframes rotateBounce {
        0%, 100% {
          transform: rotate(0deg) scale(1);
        }
        50% {
          transform: rotate(5deg) scale(1.05);
        }
      }
      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
    `}</style>
  );
}
