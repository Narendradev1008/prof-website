function PageHero({
  actions,
  children,
  className = "",
  description,
  eyebrow,
  id,
  media,
  title,
}) {
  return (
    <section className={`lab-hero ${className}`.trim()} id={id}>
      <div className={`lab-hero__inner ${media ? "lab-hero__inner--with-media" : "lab-hero__inner--content-only"}`.trim()}>
        <div className="lab-hero__content">
          {eyebrow && <p className="lab-eyebrow">{eyebrow}</p>}
          <h1 className="lab-title">{title}</h1>
          {description && <p className="lab-description">{description}</p>}
          {actions && <div className="lab-actions">{actions}</div>}
          {children}
        </div>
        {media && <div>{media}</div>}
      </div>
    </section>
  );
}

export default PageHero;
