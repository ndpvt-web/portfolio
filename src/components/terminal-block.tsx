interface TerminalBlockProps {
  lines: string[];
  showDots?: boolean;
}

function lineColor(line: string): string {
  if (line.startsWith("$")) return "var(--accent)";
  if (line.startsWith(">")) return "var(--text-secondary)";
  return "var(--text-primary)";
}

export function TerminalBlock({ lines, showDots = false }: TerminalBlockProps) {
  return (
    <div
      className="rounded-xl p-4"
      style={{ backgroundColor: "var(--bg-code)" }}
    >
      {showDots && (
        <div className="flex gap-1.5 mb-3">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
      )}
      <div className="font-mono" style={{ fontSize: "var(--text-small)" }}>
        {lines.map((line, i) => (
          <div key={i} className="leading-6" style={{ color: lineColor(line) }}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
