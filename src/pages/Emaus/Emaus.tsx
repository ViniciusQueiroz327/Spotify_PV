import type { CSSProperties } from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Leadership from "../../components/Leadership/Leadership";
import CellsCarousel from "../../components/CellsCarousel/CellsCarousel";
import { emaus } from "../../data/emaus";
import "./Emaus.css";
import PageLogo from "../../components/PageLogo/PageLogo";

function Emaus() {
  return (
    <main
      className="emaus"
      style={
        {
          "--page-primary": emaus.theme.primary,
          "--page-primaryTransparent": emaus.theme.primaryTransparent,
          "--page-secondary": emaus.theme.secondary,
          "--page-background": `url("${emaus.theme.background}")`,
        } as CSSProperties
      }
    >
      <PageLogo
        src={emaus.hero.secondaryLogo}
        alt="Emaús"
      />
      <Hero
        logo={emaus.hero.logo}
        alt="Emaús"
      />
      <About
        title={emaus.about.title}
        text={emaus.about.text}
        images={emaus.about.images}
      />
      <Leadership />
      <CellsCarousel />
    </main>
  );
}

export default Emaus;