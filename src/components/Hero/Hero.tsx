import "./Hero.css";

interface HeroProps {
  logo: string;
  alt?: string;
}

function Hero({
  logo,
  alt = "Logo",
}: HeroProps) {
  const scrollToAbout = () => {
    const about = document.getElementById("about");

    if (!about) return;

    const start = window.scrollY;
    const target =
      about.getBoundingClientRect().top + window.scrollY;

    const distance = target - start;

    const duration = 800;
    let startTime: number | null = null;

    const easeInOutQuart = (t: number) => {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeInOutQuart(progress);

      window.scrollTo(
        0,
        start + distance * easedProgress
      );

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <img
          className="hero__logo"
          src={logo}
          alt={alt}
        />
      </div>

      <button
        className="hero__scroll-indicator"
        onClick={scrollToAbout}
        aria-label="Ir para a seção About"
      >
        <span className="hero__scroll-arrow"></span>
      </button>
    </section>
  );
}

export default Hero;