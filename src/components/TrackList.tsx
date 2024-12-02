import React, { useState } from "react";
import MusicPlayer from "../components/DynamicPlayer/DynamicPlayer";

interface Track {
  id: number;
  title: string;
  plays?: number;
  duration?: string;
  album?: string;
  releaseYear?: number;
}

const trackData: Track[] = [
  {
    id: 1,
    title: "Epic and Intense Orchestral Trailer Cue",
    plays: 535123663,
    duration: "5:15",
    album: "In A Time Lapse",
    releaseYear: 2013,
  },
  {
    id: 2,
    title: "Etherial, Dark Hip hop ",
    plays: 51970180,
    duration: "2:55",
    album: "Elements",
    releaseYear: 2015,
  },
  {
    id: 3,
    title: "Vibranium Chase Beat ",
    plays: 409544461,
    duration: "5:57",
    album: "Una Mattina",
    releaseYear: 2004,
  },
  {
    id: 4,
    title: "Italian Gondola Ride ",
    plays: 254456986,
    duration: "3:23",
    album: "Una Mattina",
    releaseYear: 2004,
  },
  {
    id: 5,
    title: "Beautiful, Driven Orchestral Cue ",
    plays: 63519937,
    duration: "3:19",
    album: "Seven Days Walking",
    releaseYear: 2019,
  },
];

const TrackList = () => {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);

  const togglePlay = (trackId: number) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="w-full bg-[#1a1a1a] text-white">
      <div className="max-w-6xl px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <div className="text-4xl font-extralight tracking-wider text-white/90">
            Featured Works
          </div>
          <button className="px-6 py-2 text-sm border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            View All Compositions
          </button>
        </div>

        <div className="space-y-4">
          {trackData.map((track) => (
            <div
              key={track.id}
              className="group relative rounded-lg border border-white/[0.03] hover:border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-300"
              onMouseEnter={() => setHoveredTrack(track.id)}
              onMouseLeave={() => setHoveredTrack(null)}
            >
              <div className="grid grid-cols-[auto_1fr_auto_auto] gap-6 p-4 items-center">
                <button
                  onClick={() => togglePlay(track.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 
                    ${playingTrack === track.id ? "bg-white text-black" : "bg-white/5 hover:bg-white hover:text-black"}`}
                >
                  {playingTrack === track.id ? (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <div className="flex flex-col">
                  <span className="text-lg font-light mb-1 tracking-wide">
                    {track.title}
                  </span>
                  <div className="flex items-center text-sm text-white/50">
                    <span>{track.album}</span>
                    <span className="mx-2">•</span>
                    <span>{track.releaseYear}</span>
                  </div>
                </div>

                <div className="text-sm text-white/40">
                  {formatNumber(track.plays || 0)} plays
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-white/40">
                    {track.duration}
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white/40 hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div>
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackList;
