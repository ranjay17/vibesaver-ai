import { Sparkles, Loader2 } from "lucide-react";

const HeroSection = ({ rawText, setRawText, loading, handleAnalyze }) => {
  return (
    <section className="rounded-3xl border border-[#2a2a2a] bg-[#161616]/90 backdrop-blur-xl shadow-2xl p-6">
      {/* Heading */}

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500">
          <Sparkles className="text-white" size={26} />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Dump everything on your mind</h2>

          <p className="text-gray-400 mt-2">
            Meetings, assignments, bills, reminders or random thoughts— I'll
            organize everything into a structured AI productivity plan.
          </p>
        </div>
      </div>

      {/* Text Area */}

      <textarea
        value={rawText}
        disabled={loading}
        onChange={(e) => setRawText(e.target.value)}
        placeholder={`I have an interview tomorrow at 3 PM.

Need to pay internet bill tonight.

Finish React project by Friday.

Call Rahul.

Buy groceries.`}
        className="
          w-full
          min-h-[230px]
          rounded-2xl
          border
          border-[#2a2a2a]
          bg-[#0f0f0f]
          text-gray-200
          placeholder:text-gray-500
          p-5
          resize-none
          outline-none
          focus:border-purple-500
          transition-all
          duration-300
        "
      />

      {/* Button */}

      <button
        disabled={loading}
        onClick={handleAnalyze}
        className="
          mt-8
          w-full
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          py-4
          font-semibold
          text-lg
          bg-gradient-to-r
          from-purple-600
          to-cyan-500
          hover:scale-[1.02]
          active:scale-100
          transition-all
          duration-300
          disabled:opacity-60
          disabled:cursor-not-allowed
        "
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={22} />
            Analyzing...
          </>
        ) : (
          <>
            <Sparkles size={22} />
            Save My Vibe (AI Plan)
          </>
        )}
      </button>

      {/* Tips */}

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
          <h3 className="font-semibold text-purple-400">Smart Priorities</h3>

          <p className="text-gray-400 text-sm mt-2">
            AI automatically detects which task is urgent and important.
          </p>
        </div>

        <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
          <h3 className="font-semibold text-cyan-400">Deadline Detection</h3>

          <p className="text-gray-400 text-sm mt-2">
            Extracts dates and times from your messy notes.
          </p>
        </div>

        <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
          <h3 className="font-semibold text-green-400">Action Plan</h3>

          <p className="text-gray-400 text-sm mt-2">
            Breaks every task into small actionable steps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
