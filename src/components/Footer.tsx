import { company, team } from "@/lib/data";

export default function Footer() {
  const fahrizal = team.find((t) => t.slug === "fahrizal");

  return (
    <footer className="border-t border-surface-border">
      <div className="section-shell flex flex-col items-center gap-4 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.name}. Built by Alvie &amp;{" "}
          {fahrizal?.name.split(" ")[0]}.
        </p>
        <div className="flex gap-4">
          {fahrizal?.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
