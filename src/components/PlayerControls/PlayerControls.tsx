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
      <button onClick={previous} aria-label="Música anterior">
        ⏮
      </button>

      <button onClick={togglePlay} aria-label={isPlaying ? "Pausar" : "Reproduzir"}>
        {isPlaying ? "⏸" : "▶"}
      </button>

      <button onClick={next} aria-label="Próxima música">
        ⏭
      </button>
    </div>
  );
};

export default PlayerControls;