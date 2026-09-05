import "./ProgressBar.css";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  seek: (time: number) => void;
}

const ProgressBar = ({
  currentTime,
  duration,
  seek,
}: ProgressBarProps) => {
  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="progress-bar">
      <span>{formatTime(currentTime)}</span>

      <input
        type="range"
        min="0"
        max={duration || 0}
        step="0.1"
        value={currentTime}
        onChange={(event) => seek(Number(event.target.value))}
      />

      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;