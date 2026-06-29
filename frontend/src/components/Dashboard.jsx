import React from "react";
import {
  BrainCircuit,
  Timer,
  AlertTriangle,
  Target,
  Clock,
  CalendarDays,
} from "lucide-react";
import TaskCard from "./TaskCard";

const Dashboard = ({ data, progress }) => {
  const productivityScore = data?.productivityScore || 80;
  const stressLevel = data?.stressLevel || "Medium";
  const rescuePlan = data?.rescuePlan || [];

  return (
    <div className="mt-10 space-y-10">
      {/* AI OVERVIEW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="rounded-2xl p-5 bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-600">
          <BrainCircuit className="text-purple-400 mb-3" />
          <h2 className="text-gray-400 text-sm">Productivity Score</h2>
          <p className="text-4xl font-bold">{productivityScore}</p>
          <p className="text-xs text-gray-400 mt-2">Out of 100</p>
        </div>

        <div className="rounded-2xl p-5 bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-500">
          <AlertTriangle className="text-red-400 mb-3" />
          <h2 className="text-gray-400 text-sm">Stress Level</h2>
          <p className="text-3xl font-bold">{stressLevel}</p>
        </div>

        <div className="rounded-2xl p-5 bg-gradient-to-br from-green-600/20 to-green-900/20 border border-green-500">
          <Target className="text-green-400 mb-3" />
          <h2 className="text-gray-400 text-sm">Total Tasks</h2>
          <p className="text-4xl font-bold">{data?.summary?.totalTasks || 0}</p>
        </div>

        <div className="rounded-2xl p-5 bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 border border-cyan-500">
          <Timer className="text-cyan-400 mb-3" />
          <h2 className="text-gray-400 text-sm">Estimated Hours</h2>
          <p className="text-4xl font-bold">
            {data?.summary?.estimatedHours || 0}
          </p>
        </div>
      </div>

      {/* PROGRESS */}
      <div>
        <div className="flex justify-between mb-2">
          <span>Overall Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full h-3 rounded-full bg-[#222] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* START + RISK */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl p-6 border border-green-700 bg-green-900/10">
          <h2 className="text-xl font-bold text-green-400 mb-3">
            🚀 Start With
          </h2>

          <p className="font-semibold">{data?.startWith?.task}</p>

          <p className="text-gray-400 mt-2">{data?.startWith?.reason}</p>
        </div>

        <div className="rounded-2xl p-6 border border-yellow-700 bg-yellow-900/10">
          <h2 className="text-xl font-bold text-yellow-400 mb-3">
            ⚡ Risk Analysis
          </h2>

          <p>
            <b>Level :</b> {data?.riskAnalysis?.level}
          </p>

          <p className="text-gray-400 mt-2">{data?.riskAnalysis?.reason}</p>
        </div>
      </div>

      {/* =========================
    AI INSIGHTS (NEW)
========================= */}

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {/* Productivity Score */}
        <div className="p-4 rounded-2xl bg-[#161616] border border-[#2a2a2a]">
          <h2 className="text-gray-400">Productivity Score</h2>
          <p className="text-2xl font-bold text-purple-400">
            {data?.productivityScore || 0}/100
          </p>
        </div>

        {/* Stress Level */}
        <div className="p-4 rounded-2xl bg-[#161616] border border-[#2a2a2a]">
          <h2 className="text-gray-400">Stress Level</h2>
          <p className="text-2xl font-bold text-red-400">
            {data?.stressLevel || "LOW"}
          </p>
        </div>

        {/* Best Focus Time */}
        <div className="p-4 rounded-2xl bg-[#161616] border border-[#2a2a2a]">
          <h2 className="text-gray-400">Best Focus Time</h2>
          <p className="text-lg font-bold text-cyan-400">
            {data?.bestFocusTime || "Not detected"}
          </p>
        </div>
      </div>

      {/* DAILY PLAN */}
      <div className="rounded-3xl p-6 border border-cyan-700 bg-cyan-950/10">
        <div className="flex items-center gap-3 mb-5">
          <CalendarDays className="text-cyan-400" />
          <h2 className="text-2xl font-bold">Today's AI Plan</h2>
        </div>

        <div className="space-y-4">
          {data?.dailyPlan?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between rounded-xl bg-[#111] p-4 border border-[#222]"
            >
              <span className="font-semibold">
                {new Date(item.time).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                •{" "}
                {new Date(item.time).toLocaleTimeString("en-IN", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
              <span>{item.task || item.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
    RESCUE PLAN
========================= */}

      {data?.rescuePlan?.length > 0 && (
        <div className="mt-6 p-5 rounded-2xl border border-red-700 bg-red-950/20">
          <h3 className="text-red-400 font-bold text-lg mb-3">
            🚨 AI Rescue Plan
          </h3>

          <ul className="space-y-2 text-gray-300">
            {data.rescuePlan.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-red-400">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* DISTRACTIONS */}
      <div className="rounded-2xl p-6 border border-red-700 bg-red-950/10">
        <h2 className="text-xl font-bold text-red-400 mb-4">
          ⚠ Avoid Distractions
        </h2>

        <div className="flex flex-wrap gap-3">
          {data?.avoidDistractions?.map((d, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-red-800 text-red-100"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* TASKS */}
      {data?.tasks?.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default Dashboard;
