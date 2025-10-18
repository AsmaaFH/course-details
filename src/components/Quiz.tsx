"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { ArrowLeft, Clock, X } from "lucide-react";
import { QuizData } from "@/data/mockData";

interface QuizProps {
  quizData: QuizData;
  onClose: () => void;
}

export default function Quiz({ quizData, onClose }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(quizData.questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(quizData.timeLimit * 60);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isQuizComplete) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsQuizComplete(true);
    }
  }, [timeLeft, isQuizComplete]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizData.questions[index].correctAnswer) {
        correct++;
      }
    });
    return { correct, total: quizData.questions.length };
  };

  if (isQuizComplete) {
    const score = calculateScore();
    return (
      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" style={{ opacity: 0.5 }} />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  <div className="p-6 text-center">
                    <DialogTitle as="h2" className="text-2xl font-bold text-gray-900 mb-4">
                      Quiz Complete!
                    </DialogTitle>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {score.correct}/{score.total}
                    </div>
                    <p className="text-gray-600 mb-6">
                      You scored {score.correct} out of {score.total} questions correctly.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      Close Quiz
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black" style={{ opacity: 0.5 }} />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md max-h-[95vh] transform overflow-hidden rounded-lg bg-[#1e3a8a] text-left align-middle transition-all flex flex-col">
                {/* Fixed Header */}
                <div className="flex-shrink-0 flex items-center justify-between p-4 text-white">
                    <button onClick={onClose} className="p-2 hover:bg-blue-800 rounded-full transition-colors">
                      <ArrowLeft className="w-6 h-6" />
                    </button>

                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                      <Clock className="w-4 h-4" />
                      {formatTime(timeLeft)}
                    </div>

                    <button onClick={onClose} className="p-2 hover:bg-blue-800 rounded-full transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Fixed Question Progress */}
                <div className="flex-shrink-0 flex justify-center gap-2 px-4 py-2">
                    {quizData.questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          index === currentQuestionIndex ? "bg-white text-blue-600" : "border-2 border-white text-white"
                        }`}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>

                {/* Scrollable Quiz Content */}
                <div className="flex-1 overflow-y-auto px-4 pb-4">
                  <div className="bg-white rounded-lg p-6 flex flex-col">
                      {/* Question */}
                      <div className="mb-6">
                        <DialogTitle as="h3" className="text-lg font-bold text-gray-900 mb-2">
                          {currentQuestionIndex + 1}. {currentQuestion.question}
                        </DialogTitle>
                      </div>

                      {/* Answer Options */}
                      <div className="space-y-3 mb-6">
                        {currentQuestion.options.map((option, index) => (
                          <div
                            key={index}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedAnswers[currentQuestionIndex] === index
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-900 border-gray-200 hover:border-blue-300"
                            }`}
                            onClick={() => handleAnswerSelect(index)}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                  selectedAnswers[currentQuestionIndex] === index
                                    ? "border-white bg-white"
                                    : "border-gray-300"
                                }`}
                              >
                                {selectedAnswers[currentQuestionIndex] === index && (
                                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                )}
                              </div>
                              <span className="font-medium">{option}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-6">
                        <button
                          onClick={handlePreviousQuestion}
                          disabled={currentQuestionIndex === 0}
                          className="px-4 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-gray-800 transition-colors"
                        >
                          Previous
                        </button>

                        <button
                          onClick={handleNextQuestion}
                          disabled={selectedAnswers[currentQuestionIndex] === -1}
                          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          {currentQuestionIndex === quizData.questions.length - 1 ? "Finish" : "Next"}
                        </button>
                      </div>
                    </div>
                  </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
