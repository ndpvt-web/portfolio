export default function CurrentlyWorkingOn() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)]">
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .pulse-dot { animation: pulse-dot 1.8s ease-in-out infinite; }
      `}</style>
      <span className="pulse-dot w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
      <div className="flex flex-col gap-0.5">
        <span
          className="font-mono text-[var(--text-tertiary)] uppercase tracking-wider"
          style={{ fontSize: "var(--text-caption)" }}
        >
          Currently
        </span>
        <span className="font-mono text-[var(--text-primary)] text-sm">
          Self-evolving computer-use agent (testing phase)
        </span>
      </div>
    </div>
  );
}
