import "./PageLogo.css";

interface PageLogoProps {
  src: string;
  alt: string;
}

function PageLogo({
  src,
  alt,
}: PageLogoProps) {
  return (
    <img
      className="page-logo"
      src={src}
      alt={alt}
    />
  );
}

export default PageLogo;