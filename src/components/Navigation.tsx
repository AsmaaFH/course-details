"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"] });

export default function Navigation() {
  const [showAskQuestion, setShowAskQuestion] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [questionText, setQuestionText] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAskQuestion = () => {
    setShowAskQuestion(true);
  };

  const handleLeaderboard = () => {
    setShowLeaderboard(true);
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (questionText.trim()) {
      console.log("Question submitted:", questionText);
      setQuestionText("");
      setShowAskQuestion(false);
    }
  };

  const btnClassNames =
    "w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition-colors group cursor-pointer";
  const iconClassNames = "w-4 h-4 text-gray-600 group-hover:text-gray-800";

  return (
    <>
      <div className="flex items-center space-x-4 py-6">
        <button
          onClick={() => scrollToSection("curriculum")}
          className={btnClassNames}
          title="Go to Topics for This Course"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={iconClassNames}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21.5 5.134a1 1 0 0 1 .493 .748l.007 .118v13a1 1 0 0 1 -1.5 .866a8 8 0 0 0 -7.5 -.266v-15.174a10 10 0 0 1 8.5 .708m-10.5 -.707l.001 15.174a8 8 0 0 0 -7.234 .117l-.327 .18l-.103 .044l-.049 .016l-.11 .026l-.061 .01l-.117 .006h-.042l-.11 -.012l-.077 -.014l-.108 -.032l-.126 -.056l-.095 -.056l-.089 -.067l-.06 -.056l-.073 -.082l-.064 -.089l-.022 -.036l-.032 -.06l-.044 -.103l-.016 -.049l-.026 -.11l-.01 -.061l-.004 -.049l-.002 -13.068a1 1 0 0 1 .5 -.866a10 10 0 0 1 8.5 -.707" />
          </svg>
        </button>

        <button onClick={() => scrollToSection("comments")} className={btnClassNames} title="Go to Comments">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={iconClassNames}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-2.586l-2.707 2.707a1 1 0 0 1 -1.32 .083l-.094 -.083l-2.708 -2.707h-2.585a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" />
          </svg>
        </button>

        <button onClick={handleAskQuestion} className={btnClassNames} title="Ask a Question">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={iconClassNames}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 13.586a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" />
          </svg>
        </button>

        <button onClick={handleLeaderboard} className={btnClassNames} title="View Leaderboard">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={iconClassNames}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
          </svg>
        </button>
      </div>

      <Transition appear show={showAskQuestion} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setShowAskQuestion}>
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
                <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between p-4">
                    <DialogTitle as="h3" className="text-lg">
                      Ask a Question
                    </DialogTitle>
                    <button
                      onClick={() => setShowAskQuestion(false)}
                      className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                      ×
                    </button>
                  </div>
                  <div className="p-6">
                    <form onSubmit={handleSubmitQuestion} className="space-y-4">
                      {/* Question Textarea */}
                      <div>
                        <textarea
                          value={questionText}
                          onChange={(e) => setQuestionText(e.target.value)}
                          placeholder="What would you like to ask?"
                          className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-1 focus:ring-primary focus:border-transparent transition-colors"
                          rows={4}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={!questionText.trim()}
                          className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                        >
                          <span>Submit Question</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 14l11 -11" />
                            <path d="M21 3l-18 18" />
                            <path d="M10 14l4 -4" />
                            <path d="M14 10l-4 4" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={showLeaderboard} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setShowLeaderboard}>
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
                <DialogPanel className="w-full max-w-md text-[#080264] transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-center p-4 border-gray-300">
                    <DialogTitle className="text-center">
                      <div className="text-sm">Course Name Shown Here</div>
                      <div className="text-lg font-semibold">Leaderboard</div>
                    </DialogTitle>
                  </div>
                  <div className="p-6">

                      <div className="mb-4">
                        <p className={`p-2 px-4 text-sm font-light leading-relaxed flex items-center gap-2 bg-[#F5F9FA] rounded-md ${cairo.className}`} dir="rtl">
                          <span className="text-4xl">💪</span>
                          عظيم يا صديقي... أداءك في الكورس ده أفضل من ٦٠% من باقي الطلبة.. كمل عايز أشوف اسمك في الليدر
                          بورد هنا 
                        </p>
                      </div>

                    <div className="space-y-2 bg-[#F5F9FA] rounded-md p-2 px-4">
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="bg-white rounded-lg h-12 border border-gray-200 flex items-center px-4">
                          <span className="text-gray-400 text-sm"></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
