const Task = require("../models/Task");
const ai = require("../config/gemini");
const safeParse = require("../utils/safeParse");
const analyzePrompt = require("../prompts/analyzePrompt");

exports.analyzeTask = async (req, res) => {
  try {
    const { rawText } = req.body;

    if (!rawText) {
      return res.status(400).json({
        message: "rawText required",
      });
    }

    const today = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      }),
    ).toISOString();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: analyzePrompt(today, rawText),
      config: {
        responseMimeType: "application/json",
        temperature: 0.1,
      },
    });

    const parsed = safeParse(response.text);

    if (!parsed) {
      return res.status(500).json({
        message: "Invalid JSON from AI",
        raw: response.text,
      });
    }

    parsed.tasks = (parsed.tasks || []).map((task) => ({
      title: task.title || "Untitled Task",
      priority: ["HIGH", "MEDIUM", "LOW"].includes(task.priority?.toUpperCase())
        ? task.priority.toUpperCase()
        : "LOW",
      deadline: task.deadline || "No Deadline",
      estimatedMinutes: task.estimatedMinutes || 30,
      difficulty: task.difficulty || "Medium",
      energy: task.energy || "Medium",
      actionSteps: task.actionSteps?.length
        ? task.actionSteps
        : ["Understand the task", "Start working", "Complete and review"],
      aiReason: task.aiReason || "",
      canDelay: task.canDelay || false,
    }));

    const task = await Task.create({
      rawText,
      ...parsed,
    });

    res.json({
      success: true,
      data: task,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
