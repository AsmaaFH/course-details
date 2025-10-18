"use client";

import { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import Navigation from "@/components/Navigation";
import CourseModules from "@/components/CourseModules";
import CourseMaterials from "@/components/CourseMaterials";
import CommentsSection from "@/components/CommentsSection";
import CourseProgressBar from "@/components/CourseProgressBar";
import { courseModules } from "@/data/mockData";

export default function Home() {
  const [isVideoSticky, setIsVideoSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only enable sticky behavior on mobile devices
      const isMobile = window.innerWidth < 768; // md breakpoint
      if (!isMobile) {
        return; // Don't do anything on desktop
      }

      const videoElement = document.getElementById("video-player");
      if (videoElement) {
        const rect = videoElement.getBoundingClientRect();
        const isSticky = rect.top <= 80; // When video reaches top of viewport
        setIsVideoSticky(isSticky);
      }
    };

    const handleResize = () => {
      // Reset sticky state when switching between mobile/desktop
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      if (isMobile) {
        // Re-evaluate sticky state on mobile after resize
        handleScroll();
      } else {
        setIsVideoSticky(false); // Disable sticky on desktop
      }
    };

    // Enable sticky behavior on mobile only - disable on desktop
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#f5f9fa]">
        <div className="container mx-auto px-4 py-6">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Course Details</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-semibold">Starting SEO as your Home</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1">
            <div id="video-player">
              <VideoPlayer isSticky={isVideoSticky} />
            </div>

            <Navigation />

            <div id="curriculum" className="mt-8">
              <CourseMaterials />
            </div>

            <div className="mt-8 lg:hidden">
              <CourseProgressBar progress={63} />
            </div>

            <div className="mt-8 space-y-6 lg:hidden">
              {courseModules.map((module, index) => (
                <CourseModules
                  key={index}
                  weekTitle={module.weekTitle}
                  description={module.description}
                  lessons={module.lessons}
                  defaultExpanded={module.defaultExpanded}
                />
              ))}
            </div>

            <div id="comments" className="mt-14">
              <CommentsSection />
            </div>
          </div>

          <div className="hidden lg:block lg:w-96">
            <CourseProgressBar progress={63} />

            <div className="mt-8 space-y-6">
              {courseModules.map((module, index) => (
                <CourseModules
                  key={index}
                  weekTitle={module.weekTitle}
                  description={module.description}
                  lessons={module.lessons}
                  defaultExpanded={module.defaultExpanded}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
