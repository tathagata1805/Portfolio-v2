import React, { useEffect, useState } from "react";

const username = "User";
const machine = "MINGW64";
const path = "~/portfolio";
const prompt = `${username}@${machine} ${path} $`;

const sequence = [
  { type: "input", text: "git status" },
  { type: "output", text: "all good! go ahead" },
  { type: "input", text: "git start" },
];

const TYPING_SPEED = 110;
const AFTER_COMMAND_DELAY = 900;
const OUTPUT_DELAY = 1200;
const FINAL_DELAY = 1400;
const ENTER_WAIT = 500;

export default function GitBashSplash({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [lines, setLines] = useState<{ text: string; fade: boolean }[]>([]);
  const [charIndex, setCharIndex] = useState(0);
  const [waitingEnter, setWaitingEnter] = useState(false);

  useEffect(() => {
    if (step < sequence.length) {
      const { type, text } = sequence[step];
      if (type === "input") {
        if (charIndex < text.length) {
          const timeout = setTimeout(() => {
            setTyped((prev) => prev + text[charIndex]);
            setCharIndex((prev) => prev + 1);
          }, TYPING_SPEED);
          return () => clearTimeout(timeout);
        } else if (!waitingEnter) {
          // Finished typing, now wait with cursor at end
          setWaitingEnter(true);
        }
      } else if (type === "output") {
        // Output appears after a delay
        const timeout = setTimeout(() => {
          setLines((prev) => [...prev, { text, fade: true }]);
          setStep((prev) => prev + 1);
        }, OUTPUT_DELAY);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(onFinish, FINAL_DELAY);
      return () => clearTimeout(timeout);
    }
  }, [step, charIndex, waitingEnter]);

  // Separate effect to handle waitingEnter state and move to next step after ENTER_WAIT
  useEffect(() => {
    if (waitingEnter) {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, { text: `${prompt} ${sequence[step].text}`, fade: true }]);
        setTyped("");
        setCharIndex(0);
        setStep((prev) => prev + 1);
        setWaitingEnter(false);
      }, ENTER_WAIT);
      return () => clearTimeout(timeout);
    }
  }, [waitingEnter, step]);

  // Prepare the display lines
  const displayLines = [...lines];
  let showCursor = false;
  if (step < sequence.length && sequence[step].type === "input") {
    showCursor = true;
    displayLines.push({ text: `${prompt} ${typed}`, fade: false });
  }

  return (
    <div className="bg-[#1d1f23] min-h-screen min-w-full flex items-center justify-center">
      <div
        className="bg-[#232629] rounded-lg shadow-lg border-2 border-[#333] w-full max-w-md sm:max-w-lg md:max-w-xl px-2 sm:px-6 py-0"
        style={{ minHeight: 180 }}
      >

        <div className="bg-[#282c34] rounded-t-lg h-8 flex items-center px-3">
          <span className="inline-block w-2.5 h-2.5 bg-[#e06c75] rounded-full mr-1.5" />
          <span className="inline-block w-2.5 h-2.5 bg-[#e5c07b] rounded-full mr-1.5" />
          <span className="inline-block w-2.5 h-2.5 bg-[#98c379] rounded-full" />
          <span className="ml-4 text-[#bbb] text-xs sm:text-sm">Git Bash</span>
        </div>

        <div
          className="font-mono text-[#d7d7d7] bg-[#232629] rounded-b-lg px-2 sm:px-5 py-4 min-h-[120px] text-xs sm:text-base md:text-lg whitespace-pre-line break-words"
        >
          {displayLines.map((line, i) => (
            <div key={i} className={line.fade ? "fade-in" : undefined}>
              {i === displayLines.length - 1 && showCursor ? (
                <>
                  {line.text}
                  <span className="blinking-cursor">|</span>
                </>
              ) : (
                line.text
              )}
            </div>
          ))}
        </div>
        <style jsx>{`
          .blinking-cursor {
            animation: blink 1s steps(1) infinite;
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .fade-in {
            animation: fadeIn 0.5s;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
} 