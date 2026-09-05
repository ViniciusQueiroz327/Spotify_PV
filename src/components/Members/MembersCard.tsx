import "./Members.css";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  position?: string;
}

function MemberCard({
  name,
  role,
  image,
  position = "center",
}: MemberCardProps) {
  return (
    <article className="member-card">
      <img
        className="member-card__image"
        src={image}
        alt={name}
        style={{ objectPosition: position }}
      />

      <div className="member-card__overlay">
        <h3 className="member-card__name">{name}</h3>
        <span className="member-card__role">{role}</span>
      </div>
    </article>
  );
}

export default MemberCard;