"use client";

import { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";

interface VideoPlayerProps {
  isSticky?: boolean;
}

export default function VideoPlayer({ isSticky = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<unknown>(null);

  useEffect(() => {
    const initializePlayer = async () => {
      if (videoRef.current && !playerRef.current) {
        // Dynamic import to avoid SSR issues
        const Plyr = (await import("plyr")).default;

        playerRef.current = new Plyr(videoRef.current, {
          controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "duration",
            "mute",
            "volume",
            "settings",
            "fullscreen",
          ],
          fullscreen: {
            enabled: true,
            fallback: true,
            iosNative: true,
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

        if (playerRef.current) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (playerRef.current as any).on("enterfullscreen", () => {
            console.log("Entered fullscreen");
          });

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (playerRef.current as any).on("exitfullscreen", () => {
            console.log("Exited fullscreen");
          });
        }
      }
    };

    initializePlayer();

    return () => {
      if (playerRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (playerRef.current as any).destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className={`bg-black rounded-lg overflow-hidden shadow-lg w-full ${
        isSticky
          ? "fixed top-0 start-0 end-0 z-50 rounded-none max-w-md mx-auto lg:!relative lg:!top-auto lg:!left-auto lg:!right-auto lg:!max-w-none lg:!z-auto"
          : ""
      }`}
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
      </div>
    </div>
  );
}
