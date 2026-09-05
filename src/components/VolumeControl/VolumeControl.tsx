import "./VolumeControl.css";

interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  setVolume: (value: number) => void;
  toggleMute: () => void;
}

const VolumeControl = ({
  volume,
  isMuted,
  setVolume,
  toggleMute,
}: VolumeControlProps) => {
  return (
    <div className="volume-control">
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Ativar som" : "Silenciar"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={(event) => setVolume(Number(event.target.value))}
      />
    </div>
  );
};

export default VolumeControl;