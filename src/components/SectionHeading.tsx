export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-brand/90 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

