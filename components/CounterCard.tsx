"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TrendingUp } from "lucide-react";

interface CounterCardProps {
  title: string;
  end: number;
  decimals?: number;
  suffix?: string;
  bottomText: string;
  color?: "red" | "blue" | "green";
}

export default function CounterCard({
  title,
  end,
  decimals = 0,
  suffix = "",
  bottomText,
  color = "red",
}: CounterCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // 👉 Prevents Tailwind purge from removing classes
  const colorClasses: Record<string, string> = {
    red: "text-red-600",
    blue: "text-blue-600",
    green: "text-green-600",
  };

  return (
    <div
      ref={ref}
      className="bg-white shadow-md rounded-2xl p-8 text-center border border-gray-200"
    >
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>

      <p className="text-4xl font-bold text-[#0A84FF] my-3">
        {inView ? (
          <CountUp
            end={end}
            decimals={decimals}
            suffix={suffix}
            duration={2.5}
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </p>

      <div className="flex items-center justify-center gap-2 text-gray-700">
        <TrendingUp className={colorClasses[color]} />
        <span>{bottomText}</span>
      </div>
    </div>
  );
}
