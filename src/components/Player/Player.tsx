import { useEffect, useState } from "react";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";

import AlbumCover from "../AlbumCover/AlbumCover";
import SongInfo from "../SongInfo/SongInfo";
import PlayerControls from "../PlayerControls/PlayerControls";
import ProgressBar from "../ProgressBar/ProgressBar";
import VolumeControl from "../VolumeControl/VolumeControl";

import "./Player.css";

const LIKED_SONGS_KEY = "spotify-pv-liked-songs";

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

  const [likedSongs, setLikedSongs] = useState<number[]>(() => {
    const savedLikes = localStorage.getItem(LIKED_SONGS_KEY);

    if (!savedLikes) {
      return [];
    }

    try {
      return JSON.parse(savedLikes);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      LIKED_SONGS_KEY,
      JSON.stringify(likedSongs)
    );
  }, [likedSongs]);

  const isLiked = likedSongs.includes(currentSong.id);

  const toggleLike = () => {
    setLikedSongs((previous) => {
      if (previous.includes(currentSong.id)) {
        return previous.filter((id) => id !== currentSong.id);
      }

      return [...previous, currentSong.id];
    });
  };

  return (
    <div className="player">
      <AlbumCover
        cover={currentSong.cover}
        title={currentSong.title}
      />

      <SongInfo
        title={currentSong.title}
        artist={currentSong.artist}
        isLiked={isLiked}
        toggleLike={toggleLike}
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