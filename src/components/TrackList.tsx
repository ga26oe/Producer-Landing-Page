import React, { useState } from "react";

const trackData = [
  {
    id: 1,
    title: "Experience",
    plays: "535,123,663",
    duration: "5:15",
    albumArt: "/api/placeholder/40/40",
  },
  {
    id: 2,
    title: "Adieux",
    plays: "51,970,180",
    duration: "2:55",
    albumArt: "/api/placeholder/40/40",
  },
  {
    id: 3,
    title: "Nuvole Bianche",
    plays: "409,544,461",
    duration: "5:57",
    albumArt: "/api/placeholder/40/40",
  },
  {
    id: 4,
    title: "Una Mattina",
    plays: "254,456,986",
    duration: "3:23",
    albumArt: "/api/placeholder/40/40",
  },
  {
    id: 5,
    title: "The Tree",
    plays: "63,519,937",
    duration: "3:19",
    albumArt: "/api/placeholder/40/40",
  },
];

const TrackList = () => {
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);

  const togglePlay = (trackId: Number) => {
    setPlayingTrack(playingTrack === trackId ? trackId : null);
  };
};
