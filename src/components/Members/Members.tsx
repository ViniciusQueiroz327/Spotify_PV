import MemberCard from "./MembersCard";
import "./Members.css";

interface Member {
  name: string;
  role: string;
  image: string;
  position?: string;
}

interface MembersProps {
  members: Member[];
  subtitle?: string;
  title?: string;
}

function Members({
  members,
  subtitle = "",
  title = "Membros da nossa família",
}: MembersProps) {
  return (
    <section className="members" id="members">
      <div className="members__container">
        <div className="members__header">
          <span className="members__subtitle">
            {subtitle}
          </span>
          <h2 className="members__title">
            {title}
          </h2>
        </div>
        <div className="members__grid">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              position={member.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;