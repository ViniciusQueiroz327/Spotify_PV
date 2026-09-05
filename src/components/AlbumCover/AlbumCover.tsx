import "./AlbumCover.css";

interface AlbumCoverProps {
  cover: string;
  title: string;
  position?: string;
}

const AlbumCover = ({ cover, title, position }: AlbumCoverProps) => {
  return (
    <img
      className="album-cover"
      src={cover}
      alt={`Capa de ${title}`}
      style={{ objectPosition: position ?? "center" }}
    />
  );
};

export default AlbumCover;