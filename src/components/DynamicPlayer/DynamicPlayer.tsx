"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

type TrackInfo = {
  title: string;
  artist: string;
  duration: number;
};

export default function DynamicIslandMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentTrack: TrackInfo = {
    title: "Play one of my Songs",
    artist: "Kenny Taylor",
    duration: 120,
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= currentTrack.duration) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.duration]);

  // Generate waveform bars
  const waveformBars = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => (
      <motion.div
        key={i}
        className="h-4 w-0.5 bg-red-500/80"
        initial={{ scaleY: 0.2 }}
        animate={{
          scaleY: isPlaying ? Math.random() * 0.8 + 0.2 : 0.2,
        }}
        transition={{
          duration: 0.4,
          repeat: isPlaying ? Infinity : 0,
          repeatType: "reverse",
          delay: i * 0.1,
        }}
      />
    ));
  }, [isPlaying]);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <motion.div
        layout
        initial={{ width: "180px", height: "32px" }}
        animate={{
          width: isExpanded ? "300px" : "180px",
          height: "32px",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-black/90 backdrop-blur-xl rounded-full overflow-hidden cursor-pointer shadow-lg border border-white/10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isExpanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full flex items-center justify-between px-3"
          >
            {isExpanded ? (
              <>
                <span className="text-xs font-medium text-white/90 truncate max-w-[120px]">
                  {currentTrack.title}
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">{waveformBars}</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2 w-full justify-center">
                <div className="flex gap-0.5">{waveformBars}</div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
