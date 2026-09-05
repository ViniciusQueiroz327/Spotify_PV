import { Heart } from "lucide-react";

import "./SongInfo.css";

interface SongInfoProps {
  title: string;
  artist: string;
  isLiked: boolean;
  toggleLike: () => void;
}

const SongInfo = ({
  title,
  artist,
  isLiked,
  toggleLike,
}: SongInfoProps) => {
  return (
    <div className="song-info">
      <div className="song-info__text">
        <h1>{title}</h1>
        <p>{artist}</p>
      </div>

      <button
        className={`song-info__like ${
          isLiked ? "song-info__like--active" : ""
        }`}
        onClick={toggleLike}
        aria-label={isLiked ? "Descurtir música" : "Curtir música"}
        aria-pressed={isLiked}
      >
        <Heart fill={isLiked ? "currentColor" : "none"} />
      </button>
    </div>
  );
};

export default SongInfo;