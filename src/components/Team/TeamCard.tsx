import "./Team.css";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  position?: string;
}

function TeamCard({
  name,
  role,
  image,
  position = "center",
}: TeamCardProps) {
  return (
    <article className="team-card">
      <img
        className="team-card__image"
        src={image}
        alt={name}
        style={{ objectPosition: position }}
      />

      <div className="team-card__overlay">
        <h3 className="team-card__name">{name}</h3>
        <span className="team-card__role">{role}</span>
      </div>
    </article>
  );
}

export default TeamCard;