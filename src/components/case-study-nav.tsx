import Link from "next/link";

interface NavProject {
  slug: string;
  name: string;
}

interface CaseStudyNavProps {
  prev?: NavProject;
  next?: NavProject;
}

export default function CaseStudyNav({ prev, next }: CaseStudyNavProps) {
  return (
    <nav className="w-full border-t border-[var(--bg-border)] py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Prev */}
          <div className="flex-1 flex justify-start">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                <span className="text-lg leading-none">&larr;</span>
                <span className="font-mono text-sm">
                  <span className="text-[var(--text-tertiary)]">Previous: </span>
                  {prev.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>

          {/* Back to Projects */}
          <div className="flex-shrink-0">
            <Link
              href="/projects"
              className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              Back to Projects
            </Link>
          </div>

          {/* Next */}
          <div className="flex-1 flex justify-end">
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                <span className="font-mono text-sm">
                  <span className="text-[var(--text-tertiary)]">Next: </span>
                  {next.name}
                </span>
                <span className="text-lg leading-none">&rarr;</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
