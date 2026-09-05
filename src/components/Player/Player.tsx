import { useAudioPlayer } from "../../hooks/useAudioPlayer";

import AlbumCover from "../AlbumCover/AlbumCover";
import SongInfo from "../SongInfo/SongInfo";
import PlayerControls from "../PlayerControls/PlayerControls";
import ProgressBar from "../ProgressBar/ProgressBar";
import VolumeControl from "../VolumeControl/VolumeControl";

import "./Player.css";

const Player = () => {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlay,
    next,
    previous,
    seek,
    setVolume,
    toggleMute,
  } = useAudioPlayer();

  return (
    <div className="player">
      <AlbumCover
        cover={currentSong.cover}
        title={currentSong.title}
      />

      <SongInfo
        title={currentSong.title}
        artist={currentSong.artist}
      />

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        seek={seek}
      />

      <PlayerControls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        next={next}
        previous={previous}
      />

      <VolumeControl
        volume={volume}
        isMuted={isMuted}
        setVolume={setVolume}
        toggleMute={toggleMute}
      />
    </div>
  );
};

export default Player;