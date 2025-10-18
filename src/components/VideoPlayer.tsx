"use client";

import { useEffect, useRef, useState } from "react";
import "plyr/dist/plyr.css";

interface VideoPlayerProps {
  isSticky?: boolean;
}

export default function VideoPlayer({ isSticky = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<unknown>(null);
  const [isCustomFullscreen, setIsCustomFullscreen] = useState(false);

  const toggleCustomFullscreen = () => {
    if (isCustomFullscreen) {
      document.body.classList.remove('custom-fullscreen-active');
      setIsCustomFullscreen(false);
    } else {
      document.body.classList.add('custom-fullscreen-active');
      setIsCustomFullscreen(true);
    }
  };

  useEffect(() => {
    const initializePlayer = async () => {
      if (videoRef.current && !playerRef.current) {
        const PlyrModule = await import("plyr");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const PlyrConstructor = (PlyrModule as any).default || PlyrModule;

        playerRef.current = new PlyrConstructor(videoRef.current, {
          controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "duration",
            "mute",
            "volume",
            "settings",
          ],
          fullscreen: {
            enabled: false,
            fallback: false,
            iosNative: false,
          },
          ratio: "16:9",
          clickToPlay: true,
          hideControls: true,
          keyboard: { focused: true, global: false },
          tooltips: { controls: true, seek: true },
          captions: { active: false, language: "auto", update: false },
          settings: ["quality", "speed"],
          speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
          quality: {
            default: 720,
            options: [1080, 720, 480, 360],
          },
        });
      }
    };

    initializePlayer();

    return () => {
      if (playerRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (playerRef.current as any).destroy();
        playerRef.current = null;
      }
      document.body.classList.remove('custom-fullscreen-active');
    };
  }, []);

  return (
    <div
      className={`bg-black rounded-lg overflow-hidden shadow-lg w-full ${
        isSticky
          ? "fixed top-0 start-0 end-0 z-50 rounded-none max-w-md mx-auto lg:!relative lg:!top-auto lg:!left-auto lg:!right-auto lg:!max-w-none lg:!z-auto"
          : ""
      } ${isCustomFullscreen ? "custom-fullscreen-video" : ""}`}
    >
      <div className="relative aspect-video bg-gray-900">
        <video
          ref={videoRef}
          className="w-full h-full"
          poster="/course-poster.jpg"
          playsInline
          webkit-playsinline="true"
          preload="metadata"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Fullscreen Button */}
        <button
          onClick={toggleCustomFullscreen}
          className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
          aria-label="Toggle fullscreen"
        >
          {isCustomFullscreen ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 7.707 7.293a1 1 0 00-1.414 1.414l2.293 2.293-2.293 2.293a1 1 0 101.414 1.414L10 12.414l2.293 2.293a1 1 0 001.414-1.414L11.414 13l2.293-2.293z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
