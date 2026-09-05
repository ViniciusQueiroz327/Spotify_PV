import {
  Volume2,
  Volume1,
  VolumeX,
} from "lucide-react";

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
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return <VolumeX />;
    }

    if (volume < 0.5) {
      return <Volume1 />;
    }

    return <Volume2 />;
  };

  return (
    <div className="volume-control">
      <div className="volume-control__inner">
        <button
          className="volume-control__button"
          onClick={toggleMute}
          aria-label={isMuted ? "Ativar som" : "Silenciar"}
        >
          {getVolumeIcon()}
        </button>

        <div className="volume-control__slider">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(event) =>
              setVolume(Number(event.target.value))
            }
            style={
              {
                "--volume": `${(isMuted ? 0 : volume) * 100}%`,
              } as React.CSSProperties
            }
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
};

export default VolumeControl;