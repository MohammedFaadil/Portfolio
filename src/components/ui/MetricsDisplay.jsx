import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const MetricsDisplay = ({ end, suffix = "", duration = 2, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const endValue = parseFloat(end);
    const isFloat = !Number.isInteger(endValue);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

      const currentCount = progress * endValue;
      setCount(isFloat ? currentCount.toFixed(1) : Math.floor(currentCount));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-display text-4xl font-bold text-aqua mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-mono text-steel uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};
