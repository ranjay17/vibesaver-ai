import { useEffect, useState } from "react";

const Countdown = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!deadline) {
      setTimeLeft("No deadline");
      return;
    }

    const updateCountdown = () => {
      const target = new Date(deadline).getTime();
      const now = new Date().getTime();

      const diff = target - now;

      if (isNaN(target)) {
        setTimeLeft(deadline);
        return;
      }

      if (diff <= 0) {
        setTimeLeft("🔴 Overdue");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      if (days > 0) {
        setTimeLeft(`⏳ ${days}d ${hours}h left`);
      } else {
        setTimeLeft(`⏳ ${hours}h ${minutes}m left`);
      }
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 60000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="text-sm font-medium text-cyan-400 mt-2">{timeLeft}</div>
  );
};

export default Countdown;
