import "./SongInfo.css";

interface SongInfoProps {
  title: string;
  artist: string;
}

const SongInfo = ({ title, artist }: SongInfoProps) => {
  return (
    <div className="song-info">
      <h1>{title}</h1>
      <p>{artist}</p>
    </div>
  );
};

export default SongInfo;