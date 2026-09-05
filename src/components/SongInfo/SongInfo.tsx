import { Heart } from "lucide-react";

import "./SongInfo.css";

interface SongInfoProps {
  title: string;
  artist: string;
}

const SongInfo = ({ title, artist }: SongInfoProps) => {
  return (
    <div className="song-info">
      <div className="song-info__text">
        <h1>{title}</h1>
        <p>{artist}</p>
      </div>

      <button
        className="song-info__like"
        aria-label="Curtir música"
      >
        <Heart />
      </button>
    </div>
  );
};

export default SongInfo;