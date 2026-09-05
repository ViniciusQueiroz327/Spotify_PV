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

  const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="progress-bar">
      <span className="progress-bar__time">
        {formatTime(currentTime)}
      </span>

      <div className="progress-bar__track">
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={(event) => seek(Number(event.target.value))}
          style={{
            "--progress": `${progress}%`,
          } as React.CSSProperties}
          aria-label="Progresso da música"
        />
      </div>

      <span className="progress-bar__time">
        {formatTime(duration)}
      </span>
    </div>
  );
};

export default ProgressBar;