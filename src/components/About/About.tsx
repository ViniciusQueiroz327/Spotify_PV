import "./About.css";
import Carousel from "../Carousel/Carousel";

interface AboutProps {
  title: string;
  text: string;
  images: string[];
}

function About({
  title,
  text,
  images,
}: AboutProps) {
  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__content">
          <h2 className="about__title">
            {title}
          </h2>

          <p className="about__text">
            {text}
          </p>
        </div>

        <div className="about__gallery">
          <Carousel images={images} />
        </div>

      </div>
    </section>
  );
}

export default About;