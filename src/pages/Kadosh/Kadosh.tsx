import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import BibleVerse from "../../components/BibleVerse/BibleVerse";
import { cells } from "../../data/cells";
import "./Kadosh.css";
import PageLogo from "../../components/PageLogo/PageLogo";
import Team from "../../components/Team/Team";
import { team } from "../../data/Kadosh/KadoshTeam";
import Members from "../../components/Members/Members";
import { members } from "../../data/Kadosh/KadoshMembers";

function Kadosh() {
  const kadosh = cells.find((cell) => cell.id === "kadosh");

  if (!kadosh) {
    return null;
  }

  return (
    <main
      className="kadosh"
      style={{
        "--page-primary": kadosh.colors.primary,
        "--page-secondary": kadosh.colors.secondary,
        "--page-background": `url("${kadosh.colors.background}")`,
      } as React.CSSProperties}
    >
      <PageLogo
        src={kadosh.hero.secondaryLogo}
        alt="Emaús"
      />
      <Hero
        logo={kadosh.hero.logo}
        alt={kadosh.name}
      />
      <About
        title={kadosh.about.title}
        text={kadosh.about.text}
        images={kadosh.about.images}
      />
      <Team team={team} />
      <Members members={members} />
      <BibleVerse
        text={kadosh.bibleVerse.text}
        reference={kadosh.bibleVerse.reference}
      />
    </main>
  );
}

export default Kadosh;