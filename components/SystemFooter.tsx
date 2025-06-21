import { useEffect, useState } from "react";

export default function SystemFooter() {
  const [now, setNow] = useState(new Date());
  const [uptime, setUptime] = useState(0); // seconds
  const [showDot, setShowDot] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
      setUptime((u) => u + 1);
      setShowDot((c) => !c);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, '0');
  const hours = pad(Math.floor(uptime / 3600));
  const minutes = pad(Math.floor((uptime % 3600) / 60));
  const seconds = pad(uptime % 60);
  const localTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  return (
    <footer className="fixed z-50 bottom-6 right-6 sm:bottom-10 sm:right-10 bg-black/80 dark:bg-gray-900/90 rounded-xl shadow-2xl px-6 py-3 flex items-center gap-6 text-sm text-gray-900 font-semibold border border-gray-700 select-none backdrop-blur-md dark:text-gray-100" style={{backdropFilter: 'blur(8px)'}}>
      <span className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${showDot ? 'bg-green-400' : 'bg-transparent'} transition-all mr-2 blinking-dot`} />
        <span className="font-mono tracking-wide">{localTime}</span>
      </span>
      <span className="hidden sm:inline text-gray-400 font-normal dark:text-gray-300">|</span>
      <span>
        <span className="font-mono tracking-wide">Uptime:</span> <span className="font-mono tracking-wide">{hours}:{minutes}:{seconds}</span>
      </span>
      <style jsx>{`
        .blinking-dot {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </footer>
  );
}