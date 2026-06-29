import { BrainCircuit, Sparkles } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[#2a2a2a] py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}

        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg">
            <BrainCircuit size={22} className="text-white" />
          </div>

          <div>
            <h3 className="font-bold text-lg text-white">VibeSaver AI</h3>

            <p className="text-sm text-gray-500">Powered by Gemini AI</p>
          </div>
        </div>

        {/* Center */}

        <div className="flex items-center gap-2 text-gray-400">
          <Sparkles size={16} className="text-purple-400" />

          <span className="text-sm">
            Organize smarter • Work better • Stay productive
          </span>
        </div>

        {/* Right */}

        <div className="text-sm text-gray-500">
          © {year} VibeSaver AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
