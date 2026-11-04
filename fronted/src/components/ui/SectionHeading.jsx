function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`lab-section-heading ${className}`.trim()}>
      {eyebrow && <p className="lab-section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="lab-section-heading__title">{title}</h2>
      {description && <p className="lab-section-heading__description">{description}</p>}
    </div>
  );
}

export default SectionHeading;
