"use client";

import { useState } from "react";
import { FileText, ChevronDown, ChevronRight, X } from "lucide-react";
import { Lesson, mockQuizData } from "@/data/mockData";
import Quiz from "./Quiz";

interface CourseModulesProps {
  weekTitle: string;
  description: string;
  lessons: Lesson[];
  defaultExpanded?: boolean;
}

export default function CourseModules({ weekTitle, description, lessons, defaultExpanded = true }: CourseModulesProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleLessonClick = (lesson: Lesson) => {
    if (lesson.locked) return;
    
    if (lesson.title === "Course Overview") {
      setShowPdfViewer(true);
    } else if (lesson.type === "quiz" || lesson.title.toLowerCase().includes("quiz")) {
      setShowQuiz(true);
    }
  };

  return (
    <div className="border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{weekTitle}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-0">
          {lessons.map((lesson, index) => (
            <div key={lesson.id}>
              <div 
                className={`flex items-center justify-between py-3 px-2 rounded transition-colors ${
                  lesson.locked ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"
                }`}
                onClick={() => handleLessonClick(lesson)}
              >
                <div className="flex items-start space-x-3 flex-1">
                  <span className="w-4 h-4 text-gray-500">
                    <FileText className="w-4 h-4 text-gray-500" />
                  </span>

                  <span className={`text-sm ${lesson.locked ? "text-gray-500" : "text-gray-900"}`}>{lesson.title}</span>
                </div>

                <div className="flex items-center space-x-2">
                  {lesson.duration && (
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{lesson.duration}</span>
                  )}
                  {lesson.questions && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">{lesson.questions}</span>
                  )}

                  {lesson.locked && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-500"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" />
                    </svg>
                  )}
                </div>
              </div>

              {index < lessons.length - 1 && <div className="border-t border-gray-100"></div>}
            </div>
          ))}
        </div>
      )}

      {showPdfViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="w-full h-full flex flex-col">
            <div className="flex items-center justify-between p-4 bg-white border-b">
              <h3 className="text-lg font-semibold text-gray-900">Course Overview</h3>
              <button
                onClick={() => setShowPdfViewer(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="flex-1 bg-gray-100">
              <iframe
                src="/Placeholder-PDF.pdf"
                className="w-full h-full border-0"
                title="Course Overview PDF"
              />
            </div>
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      {showQuiz && (
        <Quiz
          quizData={mockQuizData}
          onClose={() => setShowQuiz(false)}
        />
      )}
    </div>
  );
}
