import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { cells } from "../../data/cells";

import "./CellsCarousel.css";

function CellsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        (current + 1) % cells.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCell = cells[currentIndex];

  return (
    <section className="cells-carousel">
      <div className="cells-carousel__container">

        <header className="cells-carousel__header">
          <span className="cells-carousel__subtitle">
            REDE EMAÚS
          </span>

          <h2 className="cells-carousel__title">
            Nossas Células
          </h2>
        </header>

        <div
          className="cells-carousel__card"
          style={{
            "--cell-primary": currentCell.colors.primary,
            "--cell-secondary": currentCell.colors.secondary,
          } as React.CSSProperties}
        >
          <div className="cells-carousel__image-wrapper">
            <img
              src={currentCell.image}
              alt={currentCell.name}
              className="cells-carousel__image"
            />
          </div>

          <div className="cells-carousel__content">
            <h3 className="cells-carousel__name">
              {currentCell.name}
            </h3>

            <span className="cells-carousel__location">
              {currentCell.location}
            </span>

            <Link
              to={currentCell.path}
              className="cells-carousel__button"
            >
              Conhecer
            </Link>
          </div>
        </div>

        <div className="cells-carousel__indicators">
          {cells.map((cell, index) => (
            <button
              key={cell.id}
              className={`cells-carousel__indicator ${
                index === currentIndex
                  ? "cells-carousel__indicator--active"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para ${cell.name}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CellsCarousel;