import React, { useEffect, useState } from "react";

const bootLines = [
  "Booting up...",
  "Loading modules...",
  "Starting system...",
  "Welcome to Tathagata's Space!"
];

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

  return (
    <div className="bg-[#111] min-h-screen min-w-full flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#111] rounded-lg shadow-lg px-2 sm:px-6 py-8">
        <pre className="text-[#0f0] font-mono text-xs sm:text-base md:text-lg m-0 whitespace-pre-line">
          {allLines.join("\n")}
          {currentLine < bootLines.length ? typed : ""}
          <span className="blinking-cursor">|</span>
        </pre>
        <style jsx>{`
          .blinking-cursor {
            animation: blink 1s steps(1) infinite;
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
} 