"use client";

import { useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          darkMode: true,
          background: "transparent",
          primaryColor: "#f97316",
          primaryTextColor: "#e5e5e5",
          primaryBorderColor: "#404040",
          lineColor: "#737373",
          secondaryColor: "#262626",
          tertiaryColor: "#171717",
          fontFamily: "monospace",
          fontSize: "14px",
        },
      });

      const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
      try {
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        if (!cancelled) setSvg(renderedSvg);
      } catch {
        // Mermaid syntax error -- silently skip
      }
    }

    render();
    return () => { cancelled = true; };
  }, [chart]);

  if (!svg) return null;

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
