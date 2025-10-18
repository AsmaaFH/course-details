"use client";

import { Clock, BookOpen, Users, Globe, LucideIcon } from "lucide-react";

interface CourseInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface CourseCardData {
  duration: string;
  lessons: string;
  enrolled: string;
  language: string;
}

export default function CourseMaterials() {
  const courseData: CourseCardData[] = [
    {
      duration: "3 weeks",
      lessons: "8",
      enrolled: "65 students",
      language: "English",
    },
    {
      duration: "3 weeks",
      lessons: "8",
      enrolled: "65 students",
      language: "English",
    },
  ];

  const getCardInfo = (data: CourseCardData): CourseInfo[] => [
    { icon: Clock, label: "Duration:", value: data.duration },
    { icon: BookOpen, label: "Lessons:", value: data.lessons },
    { icon: Users, label: "Enrolled:", value: data.enrolled },
    { icon: Globe, label: "Language:", value: data.language },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-3xl text-gray-900">Course Materials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 shadow-[0_0_20px_#00000020] rounded-sm lg:gap-20">
        {courseData.map((data, cardIndex) => (
          <div key={cardIndex} className="bg-white p-6">
            <div className="space-y-4">
              {getCardInfo(data).map((info, index, array) => {
                const Icon = info.icon;
                const isLast = index === array.length - 1;

                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-2 ${!isLast ? "border-b border-gray-200" : ""}`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span className=" text-gray-900">{info.label}</span>
                    </div>
                    <span className=" text-gray-900">{info.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
