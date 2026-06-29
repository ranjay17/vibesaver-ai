import { Sparkles, ClipboardList } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="rounded-3xl border border-dashed border-[#2a2a2a] bg-[#161616]/90 backdrop-blur-xl p-12 text-center shadow-2xl">
      {/* Icon */}

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-[#2a2a2a]">
        <Sparkles size={42} className="text-purple-400" />
      </div>

      {/* Heading */}

      <h2 className="mt-8 text-3xl font-bold">No AI Plan Generated Yet</h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-400 leading-7">
        Write everything that's on your mind above and let
        <span className="text-white font-semibold"> VibeSaver AI </span>
        organize it into a structured productivity plan with priorities,
        deadlines and actionable steps.
      </p>

      {/* Features */}

      <div className="grid md:grid-cols-3 gap-5 mt-10">
        <div className="rounded-2xl border border-[#2a2a2a] bg-[#101010] p-6">
          <ClipboardList className="text-purple-400 mx-auto" size={30} />

          <h3 className="mt-4 font-semibold">Organize Tasks</h3>

          <p className="text-sm text-gray-500 mt-2">
            Convert messy notes into structured tasks.
          </p>
        </div>

        <div className="rounded-2xl border border-[#2a2a2a] bg-[#101010] p-6">
          <Sparkles className="text-cyan-400 mx-auto" size={30} />

          <h3 className="mt-4 font-semibold">AI Prioritization</h3>

          <p className="text-sm text-gray-500 mt-2">
            Gemini automatically finds what matters most.
          </p>
        </div>

        <div className="rounded-2xl border border-[#2a2a2a] bg-[#101010] p-6">
          <ClipboardList className="text-green-400 mx-auto" size={30} />

          <h3 className="mt-4 font-semibold">Action Steps</h3>

          <p className="text-sm text-gray-500 mt-2">
            Break every task into simple achievable steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
