import "./BibleVerse.css";

interface BibleVerseProps {
  text: string;
  reference: string;
}

function BibleVerse({
  text,
  reference,
}: BibleVerseProps) {
  return (
    <section className="bible-verse">
      <div className="bible-verse__container">
        
        <span className="bible-verse__subtitle">
          NOSSA INSPIRAÇÃO
        </span>

        <blockquote className="bible-verse__text">
          "{text}"
        </blockquote>

        <span className="bible-verse__reference">
          {reference}
        </span>

      </div>
    </section>
  );
}

export default BibleVerse;