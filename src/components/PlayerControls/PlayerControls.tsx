import {
  SkipBack,
  Play,
  Pause,
  SkipForward,
} from "lucide-react";

import "./PlayerControls.css";

interface PlayerControlsProps {
  isPlaying: boolean;
  togglePlay: () => void;
  next: () => void;
  previous: () => void;
}

const PlayerControls = ({
  isPlaying,
  togglePlay,
  next,
  previous,
}: PlayerControlsProps) => {
  return (
    <div className="player-controls">
      <button
        className="player-controls__secondary"
        onClick={previous}
        aria-label="Música anterior"
      >
        <SkipBack />
      </button>

      <button
        className="player-controls__play"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>

      <button
        className="player-controls__secondary"
        onClick={next}
        aria-label="Próxima música"
      >
        <SkipForward />
      </button>
    </div>
  );
};

export default PlayerControls;