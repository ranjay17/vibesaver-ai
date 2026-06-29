const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    rawText: String,
    tasks: Array,
    dailyPlan: Array,
    summary: Object,
    riskAnalysis: Object,
    startWith: Object,
    bestFocusTime: String,
    avoidDistractions: Array,
    calendarEvents: Array,
    advice: String,
    motivation: String,
    productivityScore: Number,
    stressLevel: String,
    rescuePlan: Array,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);
