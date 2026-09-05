import { useEffect, useState } from "react";

import "./Carousel.css";

interface CarouselProps {
  images: string[];
}

function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Foto ${index + 1}`}
          className={`carousel__image ${
            index === currentIndex
              ? "carousel__image--active"
              : ""
          }`}
        />
      ))}
    </div>
  );
}

export default Carousel;