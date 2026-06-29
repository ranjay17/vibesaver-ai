import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";

function App() {
  const [rawText, setRawText] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(0);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // =========================
  // API CALL
  // =========================
  const handleAnalyze = async () => {
    if (!rawText.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post(`${BACKEND_URL}/api/tasks/analyze`, {
        rawText,
      });

      const result = res.data.data;

      setData(result);

      // SAFE PROGRESS
      const totalSteps =
        result?.tasks?.reduce(
          (acc, t) => acc + (t?.actionSteps?.length || 0),
          0,
        ) || 0;

      setProgress(totalSteps > 0 ? 0 : 0);
    } catch (err) {
      console.log("API Error:", err);
      alert("Failed to generate plan. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOAD FROM LOCAL STORAGE
  // =========================
  useEffect(() => {
    const saved = localStorage.getItem("vibesaver");

    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.log("Invalid localStorage data");
      }
    }
  }, []);

  // =========================
  // SAVE TO LOCAL STORAGE
  // =========================
  useEffect(() => {
    if (data) {
      localStorage.setItem("vibesaver", JSON.stringify(data));
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10">
      <Header />

      <HeroSection
        rawText={rawText}
        setRawText={setRawText}
        loading={loading}
        handleAnalyze={handleAnalyze}
      />

      {loading && (
        <div className="mt-10 text-center text-gray-400 animate-pulse">
          Generating your AI productivity plan...
        </div>
      )}

      {!data && !loading && (
        <div className="mt-10">
          <EmptyState />
        </div>
      )}

      {data && <Dashboard data={data} progress={progress} />}

      <Footer />
    </div>
  );
}

export default App;
