// The small pill label + big title used above every section's content.
export default function SectionHeading({ eyebrow, title, centered = false }) {
  if (centered) {
    return (
      <>
        <span
          className="eyebrow eyebrow-center center"
          style={{ display: 'table', margin: '0 auto 12px' }}
        >
          {eyebrow}
        </span>
        <h2 className="section-title center">{title}</h2>
      </>
    );
  }

  return (
    <>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
    </>
  );
}
