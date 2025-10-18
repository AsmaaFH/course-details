"use client";

import { useState, useEffect } from "react";

interface CourseProgressBarProps {
  progress?: number;
  title?: string;
  showAnimation?: boolean;
}

export default function CourseProgressBar({
  progress = 63,
  title = "Topics for This Course",
  showAnimation = true,
}: CourseProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setAnimatedProgress(progress);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAnimatedProgress(progress);
    }
  }, [progress, showAnimation]);

  return (
    <>
      <h3 className="text-2xl text-gray-900 mb-4">{title}</h3>

      <div className="relative mt-16 mb-20">
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedProgress}%` }}
          />
        </div>

        {/* "You" Indicator */}
        <div
          className="absolute top-[-45px] transform -translate-x-1/2 transition-all duration-1000 ease-out"
          style={{ left: `${animatedProgress}%` }}
        >
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-[#485293] font-medium text-xs">You</span>
            </div>

            <div className="w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-[#C8C8C8] mt-1"></div>
          </div>
        </div>

        <div
          className="absolute top-3 transform -translate-x-1/2 transition-all duration-1000 ease-out"
          style={{ left: `${animatedProgress}%` }}
        >
          <span className="text-[#485293] text-xs">{Math.round(animatedProgress)}%</span>
        </div>
      </div>
    </>
  );
}
