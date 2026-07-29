/* eslint-disable @next/next/no-img-element */
export function ProjectCard({
  image,
  title,
  year,
  description,
}: {
  image: string;
  title: string;
  year?: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <img src={image} alt={title} className="h-64 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          {year && <span className="text-xs text-muted-foreground">{year}</span>}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
