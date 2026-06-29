import { BrainCircuit } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
      {/* Left */}

      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-purple-900/40">
          <BrainCircuit size={34} className="text-white" />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            VibeSaver AI
          </h1>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Transform messy thoughts into an AI-powered productivity plan.
          </p>
        </div>
      </div>

      {/* Right */}

      <div className="hidden md:flex items-center gap-3 rounded-2xl border border-[#2a2a2a] bg-[#151515] px-5 py-3 backdrop-blur-xl">
        <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

        <span className="text-gray-300 text-sm font-medium">
          Gemini AI Connected
        </span>
      </div>
    </header>
  );
};

export default Header;
