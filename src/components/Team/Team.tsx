import TeamCard from "./TeamCard";
import "./Team.css";

interface Team {
  name: string;
  role: string;
  image: string;
  position?: string;
}

interface TeamProps {
  team: Team[];
  subtitle?: string;
  title?: string;
}

function Team({
  team,
  subtitle = "NOSSA FAMÍLIA",
  title = "Quem faz parte dessa história",
}: TeamProps) {
  return (
    <section className="team" id="team">
      <div className="team__container">
        <div className="team__header">
          <span className="team__subtitle">
            {subtitle}
          </span>
          <h2 className="team__title">
            {title}
          </h2>
        </div>
        <div className="team__grid">
          {team.map((team) => (
            <TeamCard
              key={team.name}
              name={team.name}
              role={team.role}
              image={team.image}
              position={team.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;