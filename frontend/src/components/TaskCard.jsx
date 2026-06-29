import { useMemo, useState } from "react";
import Countdown from "./Countdown";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  BatteryCharging,
  BrainCircuit,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

const TaskCard = ({ task }) => {
  const [checkedSteps, setCheckedSteps] = useState({});

  const safeTask = task || {};
  const steps = safeTask.actionSteps || [];

  const toggleStep = (key) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const completedCount = useMemo(() => {
    return Object.values(checkedSteps).filter(Boolean).length;
  }, [checkedSteps]);

  const progress =
    steps.length > 0 ? Math.round((completedCount / steps.length) * 100) : 0;

  const priorityStyle = (priority) => {
    switch (priority) {
      case "HIGH":
        return {
          card: "border-red-500 bg-red-950/10",
          badge: "bg-red-600 text-white",
        };

      case "MEDIUM":
        return {
          card: "border-yellow-500 bg-yellow-950/10",
          badge: "bg-yellow-500 text-black",
        };

      default:
        return {
          card: "border-green-500 bg-green-950/10",
          badge: "bg-green-600 text-white",
        };
    }
  };

  const style = priorityStyle(safeTask.priority);

  return (
    <div
      className={`rounded-3xl border p-7 mt-8 transition hover:scale-[1.01] ${style.card}`}
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div>
          <h2 className="text-3xl font-bold">{safeTask.title}</h2>

          <div className="flex flex-wrap gap-5 mt-4 text-gray-400">
            <div>
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                {safeTask.deadline}
              </div>

              <Countdown deadline={safeTask.deadline} />
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              {safeTask.estimatedMinutes} mins
            </div>

            <div className="flex items-center gap-2">
              <BatteryCharging size={18} />
              {safeTask.energy}
            </div>
          </div>
        </div>

        <div>
          <span className={`px-5 py-2 rounded-full font-bold ${style.badge}`}>
            {safeTask.priority}
          </span>
        </div>
      </div>

      {/* DETAILS */}

      <div className="grid md:grid-cols-2 gap-5 mt-8">
        <div className="rounded-2xl bg-[#111] border border-[#222] p-5">
          <div className="flex items-center gap-2 mb-3">
            <BrainCircuit className="text-cyan-400" size={18} />
            <h3 className="font-bold">AI Recommendation</h3>
          </div>

          <p className="text-gray-400">{safeTask.aiReason}</p>
        </div>

        <div className="rounded-2xl bg-[#111] border border-[#222] p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="text-purple-400" size={18} />
            <h3 className="font-bold">Difficulty</h3>
          </div>

          <p className="text-gray-400">{safeTask.difficulty}</p>
        </div>
      </div>

      {/* ACTION STEPS */}

      <div className="mt-8">
        <h3 className="font-bold text-xl mb-5 flex items-center gap-2">
          <CheckCircle2 className="text-green-400" />
          Action Steps
        </h3>

        <div className="space-y-3">
          {steps.map((step, index) => {
            const key = `${safeTask.title}-${index}`;

            return (
              <div
                key={key}
                onClick={() => toggleStep(key)}
                className="flex gap-4 cursor-pointer rounded-xl border border-[#222] bg-[#111] p-4 hover:border-cyan-500 transition"
              >
                <div className="text-xl">{checkedSteps[key] ? "✅" : "⬜"}</div>

                <p
                  className={`${
                    checkedSteps[key] ? "line-through text-gray-500" : ""
                  }`}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* PROGRESS */}

      <div className="mt-8">
        <div className="flex justify-between mb-2">
          <span>Task Progress</span>

          <span>{progress}%</span>
        </div>

        <div className="h-3 bg-[#222] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* CAN DELAY */}

      <div
        className={`mt-8 rounded-2xl p-5 ${
          safeTask.canDelay
            ? "bg-yellow-950/20 border border-yellow-600"
            : "bg-green-950/20 border border-green-600"
        }`}
      >
        <div className="flex gap-3">
          <AlertTriangle />

          <div>
            <h3 className="font-bold">Can this task be delayed?</h3>

            <p className="mt-2 text-gray-400">
              {safeTask.canDelay
                ? "✅ Yes, this task can be postponed if something more urgent appears."
                : "❌ No. AI recommends completing this before moving to other work."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
