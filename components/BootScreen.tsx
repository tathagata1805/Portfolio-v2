import React, { useEffect, useState } from "react";

const bootLines = [
  "Booting up...",
  "Loading modules...",
  "Starting system...",
  "Welcome to Tathagata's Space!"
];

function GreenTick() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10.5L9 14.5L15 7.5" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BootScreen({ onFinish }: { onFinish: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [typed, setTyped] = useState("");
  const [allLines, setAllLines] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine < bootLines.length) {
      if (charIndex < bootLines[currentLine].length) {
        const timeout = setTimeout(() => {
          setTyped((prev) => prev + bootLines[currentLine][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {

        const timeout = setTimeout(() => {
          setAllLines((prev) => [...prev, bootLines[currentLine]]);
          setCurrentLine((prev) => prev + 1);
          setTyped("");
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(onFinish, 800);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine]);

  // Render each line with its status icon on the left
  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < bootLines.length; i++) {
      if (i < allLines.length) {
        // Finished line: show green tick on the left
        lines.push(
          <div key={i} className="flex items-center gap-2">
            <span className="inline-flex items-center"><GreenTick /></span>
            <span>{bootLines[i]}</span>
          </div>
        );
      } else if (i === allLines.length && currentLine < bootLines.length) {
        // Currently typing: show spinner on the left
        lines.push(
          <div key={i} className="flex items-center gap-2">
            <span className="spinner" />
            <span>{typed}</span>
            <span className="blinking-cursor">|</span>
          </div>
        );
      }
    }
    return lines;
  };

  return (
    <div className="bg-[#111] min-h-screen min-w-full flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#111] rounded-lg shadow-lg px-2 sm:px-6 py-8">
        <div className="text-[#0f0] font-mono text-xs sm:text-base md:text-lg m-0 whitespace-pre-line">
          {renderLines()}
        </div>
        <style jsx>{`
          .blinking-cursor {
            animation: blink 1s steps(1) infinite;
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .spinner {
            display: inline-block;
            width: 1.15em;
            height: 1.15em;
            border: 3px solid #22c55e;
            border-top: 3px solid transparent;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
            margin-right: 0.2em;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
} 