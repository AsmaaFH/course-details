"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Maximize, Volume2, VolumeX } from "lucide-react";

// Extend types for browser-specific fullscreen APIs
interface DocumentWithFullscreen extends Document {
  webkitFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  msFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  msExitFullscreen?: () => void;
}

interface VideoElementWithFullscreen extends HTMLVideoElement {
  webkitRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
}

interface VideoPlayerProps {
  isSticky?: boolean;
}

export default function VideoPlayer({ isSticky = false }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure mobile inline playback
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true'); // For some Android browsers

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    // Fullscreen change listeners
    const handleFullscreenChange = () => {
      const doc = document as DocumentWithFullscreen;
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    
    // Add fullscreen change listeners
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      // Prevent mobile popup by ensuring inline playback
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      video.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current as VideoElementWithFullscreen;
    if (!video) return;

    if (!isFullscreen) {
      // Try different fullscreen methods for better mobile support
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (playerRef.current?.requestFullscreen) {
        playerRef.current.requestFullscreen();
      }
    } else {
      // Exit fullscreen
      const doc = document as DocumentWithFullscreen;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      ref={playerRef}
      className={`bg-black rounded-lg overflow-hidden shadow-lg w-full ${
        isSticky
          ? "fixed top-0 start-0 end-0 z-50 rounded-none max-w-md mx-auto lg:!relative lg:!top-auto lg:!left-auto lg:!right-auto lg:!max-w-none lg:!z-auto"
          : ""
      }`}
    >
      <div className="relative aspect-video bg-gray-900">
        <video 
          ref={videoRef} 
          className="w-full h-full object-contain" 
          poster="/course-poster.jpg" 
          onClick={togglePlay}
          playsInline
          webkit-playsinline="true"
          controls={false}
          preload="metadata"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
            >
              <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
            </button>
          </div>
        )}

        {/* Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          {/* Progress Bar */}
          <div className="mb-3">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <button onClick={togglePlay} className="hover:text-gray-300 transition-colors">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <button onClick={toggleMute} className="hover:text-gray-300 transition-colors">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <span className="text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button onClick={toggleFullscreen} className="hover:text-gray-300 transition-colors">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
