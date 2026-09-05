import { useCallback, useEffect, useRef, useState } from "react";
import { songs } from "../data/songs";
import type { Song } from "../types/song";

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolumeState] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const currentSong: Song = songs[currentSongIndex];

  /*
   * Cria o elemento de áudio
   */
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    audio.volume = volume;
    audio.src = currentSong.audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  /*
   * Atualiza o áudio quando a música muda
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.src = currentSong.audio;
    audio.currentTime = 0;

    setCurrentTime(0);
    setDuration(0);

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentSongIndex]);

  /*
   * Eventos do elemento <audio>
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      next();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex]);

  /*
   * Play
   */
  const play = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Erro ao reproduzir áudio:", error);
    }
  }, []);

  /*
   * Pause
   */
  const pause = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  }, []);

  /*
   * Play / Pause
   */
  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  /*
   * Próxima música
   */
  const next = useCallback(() => {
    setCurrentSongIndex((previousIndex) => {
      if (previousIndex === songs.length - 1) {
        return 0;
      }

      return previousIndex + 1;
    });
  }, []);

  /*
   * Música anterior
   */
  const previous = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    /*
     * Se a música já passou de 3 segundos,
     * volta para o início da música atual.
     *
     * Caso contrário, vai para a música anterior.
     */
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      setCurrentTime(0);
      return;
    }

    setCurrentSongIndex((previousIndex) => {
      if (previousIndex === 0) {
        return songs.length - 1;
      }

      return previousIndex - 1;
    });
  }, []);

  /*
   * Alterar posição da música
   */
  const seek = useCallback((time: number) => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  /*
   * Alterar volume
   */
  const setVolume = useCallback((value: number) => {
    const audio = audioRef.current;

    if (!audio) return;

    const newVolume = Math.min(1, Math.max(0, value));

    audio.volume = newVolume;

    setVolumeState(newVolume);

    if (newVolume > 0) {
      setIsMuted(false);
    }
  }, []);

  /*
   * Mute / Unmute
   */
  const toggleMute = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  }, [isMuted, volume]);

  return {
    currentSong,
    currentSongIndex,

    isPlaying,

    currentTime,
    duration,

    volume,
    isMuted,

    play,
    pause,
    togglePlay,

    next,
    previous,

    seek,

    setVolume,
    toggleMute,
  };
};