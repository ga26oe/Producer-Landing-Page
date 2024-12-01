import React, { useState } from "react";

interface Track {
  id: number;
  title: string;
}

const trackData: Track[] = [
  {
    id: 1,
    title: "Experience",
  },
  {
    id: 2,
    title: "Adieux",
  },
  {
    id: 3,
    title: "Nuvole Bianche",
  },
  {
    id: 4,
    title: "Una Mattina",
  },
  {
    id: 5,
    title: "The Tree",
  },
];

const TrackList = () => {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);

  const togglePlay = (trackId: number) => {
    setPlayingTrack(playingTrack === trackId ? trackId : null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div>Popular</div>
      <div className="mb-4 text-gray-400 text-sm grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)] gap-4 px-4 border-b border-gray-700 pb-2">
        <div>#</div>
        <div>Title</div>
        <div>Plays</div>
        <div className="text-right">Duration</div>
      </div>
      {trackData.map((track) => (
        <div
          key={track.id}
          className="group grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)] gap-4 px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer items-center"
          onMouseEnter={() => setHoveredTrack(track.id)}
          onMouseLeave={() => setHoveredTrack(null)}
        >
          <div className="text-gray-400 w-4">
            {hoveredTrack === track.id ? (
              <button
                onClick={() => togglePlay(track.id)}
                className="text-white"
              >
                {playingTrack === track.id ? (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            ) : (
              <span>{track.id}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">{track.title}</span>
          </div>
          <div className="text-gray-400">-</div>
          <div className="text-gray-400 text-right">-</div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
