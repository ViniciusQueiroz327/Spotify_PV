import "./AlbumCover.css";

interface AlbumCoverProps {
  cover: string;
  title: string;
}

const AlbumCover = ({ cover, title }: AlbumCoverProps) => {
  return (
    <img
      className="album-cover"
      src={cover}
      alt={`Capa de ${title}`}
    />
  );
};

export default AlbumCover;