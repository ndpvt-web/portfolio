export type Tier = 1 | 2 | 3;
export type Category = "agents" | "video" | "social" | "infra" | "security" | "research" | "automation" | "growth" | "productivity" | "education";

export interface KeyMetric { value: string; label: string; }
export interface GitHubRepo { owner: string; repo: string; }
export interface CaseStudyResult { metric: string; value: string; }

export interface CaseStudy {
  problem: string;
  approach: string;
  results: CaseStudyResult[];
  reflection: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  tier: Tier;
  description: string;
  keyMetric: KeyMetric;
  categories: Category[];
  github: GitHubRepo[];
  screenshots: string[];
  architectureDiagram?: string;
  restricted?: boolean;
  caseStudy?: CaseStudy;
  liveUrl?: string;
}

// ─── Tier 1 Projects ───
// ─── Tier 2 Projects ───
// ─── Tier 3 Projects ───
// ─── Exports ───

export const projects: Project[] = [
  // ─── TIER 1 ───
  {
    slug: "capy-cortex",
    name: "Capy Cortex",
    tagline: "Self-improving AI memory. Your agent never makes the same mistake twice.",
    tier: 1,
    description: "Triple fusion retrieval engine combining FTS5 full-text search, TF-IDF scoring, and entity graph traversal. Agents autonomously accumulate knowledge across sessions -- 514 rules learned, 15,436 events processed.",
    keyMetric: { value: "514", label: "rules learned" },
    categories: ["agents", "research"],
    github: [{ owner: "ndpvt-web", repo: "capy-cortex" }],
    screenshots: [],
    caseStudy: {
      problem: "AI agents forget everything between sessions. Every conversation starts from zero. Mistakes repeat endlessly because there is no persistent memory layer.",
      approach: "Built a triple fusion retrieval pipeline: FTS5 for keyword search, TF-IDF for semantic ranking, and an entity graph for relational queries. All three fire in parallel and results are merged with weighted scoring.",
      results: [
        { metric: "Rules learned", value: "514" },
        { metric: "Events processed", value: "15,436" },
        { metric: "Retrieval latency", value: "<100ms" },
      ],
      reflection: "Persistent memory changes everything. Once an agent can learn from its own mistakes, the compounding effect is exponential.",
    },
  },
  {
    slug: "atlas",
    name: "Atlas",
    tagline: "World's first self-evolving computer-use desktop agent.",
    tier: 1,
    description: "Controls mouse and keyboard, learns from mistakes, runs autonomously. Self-improving through persistent memory. The first desktop agent that evolves its own capabilities over time.",
    keyMetric: { value: "Self-evolving", label: "agent" },
    categories: ["agents", "automation"],
    github: [],
    screenshots: [],
    restricted: true,
    caseStudy: {
      problem: "Computer-use agents are stateless -- they cannot learn from past interactions or improve their own workflows autonomously.",
      approach: "Built a self-evolving agent loop that controls mouse/keyboard, captures screenshots for visual reasoning, and persists learnings across sessions. Mistakes become training signal.",
      results: [
        { metric: "Architecture", value: "Self-evolving loop" },
        { metric: "Input", value: "Mouse + keyboard + vision" },
        { metric: "Learning", value: "Persistent across sessions" },
      ],
      reflection: "NDA restricted -- concept shown only. The key insight: computer-use agents must evolve, not just execute.",
    },
  },
  {
    slug: "ai-agency-247",
    name: "AI Agency 24/7",
    tagline: "Fully autonomous AI agency. 8 agents find businesses, build sites, send outreach.",
    tier: 1,
    description: "8 specialized agents run 24/7 -- find businesses without websites, build premium sites, send personalized outreach. Earned 2,500 HKD revenue autonomously with zero human intervention.",
    keyMetric: { value: "2,500 HKD", label: "earned autonomously" },
    categories: ["agents", "automation"],
    github: [],
    screenshots: [],
    caseStudy: {
      problem: "Building and selling websites manually does not scale. Lead generation, design, development, and outreach are all separate bottlenecks.",
      approach: "Orchestrated 8 agents: Scout qualifies leads, Director generates design systems, Builder creates sites, Outreach writes personalized emails. All running 24/7 with no human in the loop.",
      results: [
        { metric: "Revenue", value: "2,500 HKD" },
        { metric: "Agents", value: "8 specialized" },
        { metric: "Human intervention", value: "Zero" },
      ],
      reflection: "The hardest part was not building agents -- it was making them coordinate reliably without human oversight.",
    },
  },
  {
    slug: "capy-bridge",
    name: "Capy Bridge + iOS App Maker",
    tagline: "One prompt = a native iOS app, compiled and installed on your iPhone. Zero USB.",
    tier: 1,
    description: "Productioned into HappyCapy (raised $10M, $1M ARR in 15 days). Automated the entire Xcode build pipeline from cloud to device via Cloudflare tunnel. Shipped to 50K+ users.",
    keyMetric: { value: "50K+", label: "users served" },
    categories: ["infra", "automation"],
    github: [{ owner: "ndpvt-web", repo: "capy-bridge-skill" }],
    screenshots: [],
    caseStudy: {
      problem: "AI coding agents run in the cloud but cannot access your local machine, Xcode, or physical iPhone. The gap between 'code generated' and 'app on device' is massive.",
      approach: "Built a bridge: cloud agent -> Cloudflare tunnel -> Mac daemon -> Xcode build pipeline -> wireless install on iPhone. One prompt triggers the entire chain.",
      results: [
        { metric: "Users served", value: "50K+" },
        { metric: "Onboarding", value: "30 seconds" },
        { metric: "USB required", value: "Zero" },
      ],
      reflection: "Bridging cloud AI to local hardware unlocked an entire category of use cases nobody expected.",
    },
  },
  {
    slug: "geo-pipeline",
    name: "Surfaced GEO Pipeline",
    tagline: "End-to-end Generative Engine Optimization. Reverse-engineer how AI recommends products.",
    tier: 1,
    description: "1,000 queries become 10,000 optimization targets. Deterministic 8-stage pipeline with Zod validation. Reddit-first distribution drove 15M organic views in 4 weeks.",
    keyMetric: { value: "10,000", label: "AI citation targets" },
    categories: ["growth", "research"],
    github: [],
    screenshots: [],
    caseStudy: {
      problem: "Companies are invisible to AI recommendations. When ChatGPT or Gemini suggests products, your brand is not mentioned because there is no optimization framework for generative engines.",
      approach: "Built an 8-stage deterministic pipeline: query generation -> AI response capture -> citation extraction -> gap analysis -> content strategy -> Reddit distribution. All Zod-validated.",
      results: [
        { metric: "Optimization targets", value: "5,000-10,000" },
        { metric: "Cost per run", value: "~$15" },
        { metric: "Organic views", value: "15M in 4 weeks" },
      ],
      reflection: "GEO is to generative AI what SEO was to Google. The companies that optimize first will own the recommendation layer.",
    },
  },
  {
    slug: "browser-agent",
    name: "HappyCapy Browser Agent",
    tagline: "Multi-model browser automation with 5 strategies including LLM council mode.",
    tier: 1,
    description: "FastAPI + WebSocket + Xvfb/VNC architecture with 6 vision models. Live dashboard shows real-time browser state. Productioned into HappyCapy in 2 days.",
    keyMetric: { value: "2 days", label: "to production" },
    categories: ["agents", "automation"],
    github: [{ owner: "ndpvt-web", repo: "happycapy-browser-agent" }],
    screenshots: [],
    caseStudy: {
      problem: "Browser automation needs multiple fallback strategies. Single-model approaches fail on complex pages. No existing tool offered multi-model consensus.",
      approach: "Built 5 browser strategies including an LLM council where multiple models vote on the best action. Live VNC dashboard streams the browser state over WebSocket.",
      results: [
        { metric: "Strategies", value: "5 (including council)" },
        { metric: "Vision models", value: "6" },
        { metric: "Time to production", value: "2 days" },
      ],
      reflection: "The council mode was the breakthrough -- when 3 models agree on an action, confidence is almost 100%.",
    },
  },
  {
    slug: "whatsapp-assistant",
    name: "WhatsApp Personal Assistant",
    tagline: "300MB RAM serving 500+ students with personalized AI tutoring via WhatsApp.",
    tier: 1,
    description: "Version 1: Personal AI assistant with Notion, Google Workspace, 25+ app integrations. Version 2: Proactive personalized AI tutor for 500+ students on a 25K-subscriber EdTech channel.",
    keyMetric: { value: "500+", label: "students served" },
    categories: ["education", "productivity"],
    github: [],
    screenshots: [],
    caseStudy: {
      problem: "Students need proactive personalized tutoring at scale. Human tutors cannot serve 500+ students individually. Existing chatbots are reactive, not proactive.",
      approach: "Built a 44-step pipeline: WhatsApp message -> intent classification -> personalized response generation -> proactive follow-up scheduling. Each student gets their own context and learning path.",
      results: [
        { metric: "Students served", value: "500+" },
        { metric: "RAM usage", value: "300MB" },
        { metric: "App integrations", value: "25+" },
      ],
      reflection: "Proactive messaging changed everything. Students who received follow-up questions had 3x engagement.",
    },
  },
  {
    slug: "reddit-writer",
    name: "Reddit Post Writer",
    tagline: "World's only humanized AI writer for Reddit. 25M+ organic views.",
    tier: 1,
    description: "8-agent committee with 200+ banned AI-ism vocabulary. 12 personas debate every draft. AI detection confidence below 25%. Generated 25 million+ views -- all organic.",
    keyMetric: { value: "25M+", label: "organic views" },
    categories: ["social", "agents"],
    github: [],
    screenshots: [],
    caseStudy: {
      problem: "AI-generated content sounds like AI. Reddit communities detect and downvote it instantly. Existing AI writers optimize for grammar, not authenticity.",
      approach: "Built an 8-phase pipeline with a 12-persona committee: Derek (8-year Reddit mod), Keiko (average Redditor), Tyrone (anti-corporate), Luna (AI researcher), Brad (investor), Zara (CS student) + 6 more. They debate, tear apart, and rebuild every draft.",
      results: [
        { metric: "Organic views", value: "25M+" },
        { metric: "AI detection", value: "<25% confidence" },
        { metric: "Banned terms", value: "200+" },
      ],
      reflection: "Authenticity is not about fooling detectors. It is about writing the way real humans actually write -- with personality, imperfections, and genuine voice.",
    },
  },
  {
    slug: "hermes-capy",
    name: "Hermes-Capy",
    tagline: "Self-improving Claude Code agent. 6 memory stores, monotonic knowledge accumulation.",
    tier: 1,
    description: "3 Claude Code hooks capture every mistake and success. 6 memory stores ensure knowledge only grows. Powers the entire agent ecosystem as the meta-learning backbone.",
    keyMetric: { value: "8", label: "anti-patterns learned day 1" },
    categories: ["agents", "research"],
    github: [],
    screenshots: [],
    caseStudy: {
      problem: "AI agents repeat the same mistakes across sessions. Without persistent learning hooks, every session starts from zero intelligence.",
      approach: "Installed 3 Claude Code hooks (pre-tool, post-tool, on-error) that capture patterns into 6 memory stores. Knowledge is monotonic -- it can only accumulate, never decrease.",
      results: [
        { metric: "Anti-patterns learned", value: "8 on day 1" },
        { metric: "Memory stores", value: "6" },
        { metric: "Claude Code hooks", value: "3" },
      ],
      reflection: "The meta-system behind the systems. Once Hermes learns something, every agent in the ecosystem benefits.",
    },
  },
  {
    slug: "jarvis-capy-brain",
    name: "Jarvis (Capy Brain)",
    tagline: "Personal 24/7 AI assistant for macOS -- a cognitive exoskeleton.",
    tier: 1,
    description: "Full Node.js server module on capy-bridge. Single Claude Opus agent loop with SQLite FTS5 + sqlite-vec vectors, heartbeat gating, cron scheduler, macOS event observers. Trust-level system: Advisor -> Assistant -> Delegate.",
    keyMetric: { value: "24/7", label: "autonomous brain" },
    categories: ["agents", "productivity"],
    github: [],
    screenshots: [],
    caseStudy: {
      problem: "No single AI system ties all your tools together 24/7. Each assistant is siloed. Context switching between tools destroys productivity.",
      approach: "Built a single Claude Opus agent loop with persistent memory (SQLite FTS5 + sqlite-vec), heartbeat (Haiku gating, Opus execution), cron scheduler, and macOS event observers routing to 15+ capy-bridge modules.",
      results: [
        { metric: "Runtime", value: "24/7 autonomous" },
        { metric: "Bridge modules", value: "15+" },
        { metric: "Trust levels", value: "Advisor -> Assistant -> Delegate" },
      ],
      reflection: "A cognitive exoskeleton that grows with you. The trust-level system was key -- start as advisor, earn delegate access through reliability.",
    },
  },
  // ─── TIER 2 ───
  {
    slug: "vimax",
    name: "ViMax",
    tagline: "Face-consistent AI video generation. 257 experiments, 5% to 100% face verification.",
    tier: 2,
    description: "Multi-shot AI video pipeline solving face identity drift. 257 experiments brought face verification from 5% baseline to 100%. 70% improvement in face distance metrics.",
    keyMetric: { value: "100%", label: "face verification" },
    categories: ["video", "research"],
    github: [{ owner: "ndpvt-web", repo: "capy-video-gen-skill" }],
    screenshots: [],
    caseStudy: {
      problem: "AI video generators produce characters that look different in every shot. Face identity drift makes multi-shot AI video unusable for serious storytelling.",
      approach: "Ran 257 experiments systematically varying face embedding methods, frame interpolation, and consistency scoring until face verification reached 100%.",
      results: [
        { metric: "Face verification", value: "5% -> 100%" },
        { metric: "Experiments", value: "257" },
        { metric: "Face distance improvement", value: "70%" },
      ],
      reflection: "Brute-force experimentation with systematic tracking beats intuition every time in generative AI.",
    },
  },
  {
    slug: "aristotelian-compliance",
    name: "Aristotelian Compliance Test",
    tagline: "AI Red-Teaming: 7 axioms to test alignment boundaries of Opus 4.6.",
    tier: 2,
    description: "Used Opus 4.6 to test Opus 4.6. 7 axioms individually defensible but compositionally reveal alignment boundaries. Formal adversarial evaluation methodology.",
    keyMetric: { value: "Red-teamed", label: "Opus via Opus" },
    categories: ["security", "research"],
    github: [{ owner: "ndpvt-web", repo: "aristotelian-compliance-test" }],
    screenshots: [],
    caseStudy: {
      problem: "AI safety testing relies on pattern-matching for known attacks. Novel adversarial approaches that reason from first principles can bypass surface-level filters.",
      approach: "Constructed 7 axioms that are individually defensible but compositionally create pressure on alignment boundaries. Used the same model (Opus 4.6) as both attacker and defender.",
      results: [
        { metric: "Axioms", value: "7 compositional" },
        { metric: "Method", value: "Opus testing Opus" },
        { metric: "Framework", value: "Aristotelian first-principles" },
      ],
      reflection: "The best red-teaming uses the model's own reasoning capabilities against itself. First-principles attacks are harder to patch than pattern-based ones.",
    },
  },
  {
    slug: "contract-first",
    name: "Contract-First Agents",
    tagline: "Multi-agent coordination protocol. 52.5% quality improvement, p<0.001.",
    tier: 2,
    description: "400+ experiments prove contract-first coordination achieves 52.5% quality improvement over ad-hoc agent orchestration. t=13.685, p<0.001. 100% cross-module import resolution.",
    keyMetric: { value: "52.5%", label: "quality improvement" },
    categories: ["agents", "research"],
    github: [{ owner: "ndpvt-web", repo: "contract-first-agents" }],
    screenshots: [],
  },
  {
    slug: "sales-agent",
    name: "Sales Agent",
    tagline: "Monte Carlo simulation on digital twins. 78% win rate.",
    tier: 2,
    description: "Latin Hypercube Sampling across 5 strategy dimensions. 100 simulations in 47.3 seconds. Top strategy achieves 78% win rate against simulated buyer personas.",
    keyMetric: { value: "78%", label: "win rate" },
    categories: ["agents", "automation"],
    github: [],
    screenshots: [],
  },
  {
    slug: "content-factory",
    name: "Content Factory",
    tagline: "One topic becomes podcast, video, blog, slides, carousel, social posts, newsletter.",
    tier: 2,
    description: "All content skills unified into one pipeline. Sequential: 120 min. Parallel agents: 25 min. 9 formats from a single topic input.",
    keyMetric: { value: "9 formats", label: "from 1 topic" },
    categories: ["automation", "social"],
    github: [],
    screenshots: [],
  },
  {
    slug: "cappyybot",
    name: "CappyyBot",
    tagline: "E2E encrypted personal AI assistant. AES-256-GCM + Argon2id.",
    tier: 2,
    description: "22 tool engines. 90 encrypted SQLite tables. Prompt injection defense detecting 8 attack categories. Full end-to-end encryption with AES-256-GCM and Argon2id key derivation.",
    keyMetric: { value: "22", label: "tool engines" },
    categories: ["security", "productivity"],
    github: [],
    screenshots: [],
  },
  {
    slug: "forge",
    name: "Forge",
    tagline: "Meta-orchestrator. Auto-designs agent swarms from coupling score.",
    tier: 2,
    description: "Analyzes task coupling from 1,247 real projects, selects coordination mode, launches with contract-first protocol and live dashboard. 87-94% success rate.",
    keyMetric: { value: "94%", label: "success rate" },
    categories: ["agents", "infra"],
    github: [{ owner: "ndpvt-web", repo: "forge" }],
    screenshots: [],
  },
  {
    slug: "chimera-council",
    name: "Chimera Council",
    tagline: "Bio-inspired multi-model LLM engine. 5-phase cognitive pipeline.",
    tier: 2,
    description: "Cortical processing, split-brain deliberation, dreaming, evolutionary breeding, immune maturation. 6 models collaborate through 5 neuroscience-inspired phases.",
    keyMetric: { value: "5 phases", label: "6 models" },
    categories: ["research", "agents"],
    github: [],
    screenshots: [],
  },
  // ─── TIER 3 ───
  { slug: "short-movie-maker", name: "Short Movie Maker", tagline: "End-to-end AI film production pipeline.", tier: 3, description: "Generate narrative films from a single paragraph.", keyMetric: { value: "1 paragraph", label: "to film" }, categories: ["video"], github: [], screenshots: [] },
  { slug: "navi", name: "NAVI", tagline: "Blind navigation assistant, sub-$50 hardware.", tier: 3, description: "Sensor fusion for real-time navigation assistance.", keyMetric: { value: "<$50", label: "hardware cost" }, categories: ["infra"], github: [{ owner: "ndpvt-web", repo: "navi" }], screenshots: [] },
  { slug: "carousel-maker", name: "Carousel Maker", tagline: "World-class Instagram carousel generator.", tier: 3, description: "Engagement-optimized slide generation.", keyMetric: { value: "10 slides", label: "per carousel" }, categories: ["social"], github: [{ owner: "ndpvt-web", repo: "world-class-carousel" }], screenshots: [] },
  { slug: "prompt-improver", name: "Prompt Improver", tagline: "Aristotelian first-principles prompt optimization.", tier: 3, description: "Before/after prompt transformation with formal methodology.", keyMetric: { value: "6 principles", label: "framework" }, categories: ["research"], github: [{ owner: "ndpvt-web", repo: "prompt-improver" }], screenshots: [] },
  { slug: "latex-pipeline", name: "LaTeX Pipeline", tagline: "Universal LaTeX document generation.", tier: 3, description: "Resumes, thesis, papers, posters, books.", keyMetric: { value: "60+", label: "templates" }, categories: ["productivity"], github: [{ owner: "ndpvt-web", repo: "latex-document-skill" }], screenshots: [] },
  { slug: "deeptutor", name: "DeepTutor", tagline: "AI-powered personalized tutoring system.", tier: 3, description: "Adaptive learning with knowledge graph.", keyMetric: { value: "Adaptive", label: "learning" }, categories: ["education"], github: [], screenshots: [] },
  { slug: "progressive-layer-testing", name: "Progressive Layer Testing", tagline: "77.5% test pass rate orchestrator.", tier: 3, description: "Research-proven code generation with layered testing.", keyMetric: { value: "77.5%", label: "pass rate" }, categories: ["research"], github: [], screenshots: [] },
  { slug: "copycapy", name: "CopyCapy", tagline: "Clone any website into production-grade code.", tier: 3, description: "Website to codebase transformation.", keyMetric: { value: "1-click", label: "clone" }, categories: ["automation"], github: [{ owner: "ndpvt-web", repo: "copycapy" }], screenshots: [] },
  { slug: "oss-contributor-swarm", name: "OSS Contributor Swarm", tagline: "Autonomous 10-agent open source contributor.", tier: 3, description: "Discover, implement, submit PRs autonomously.", keyMetric: { value: "10 agents", label: "autonomous" }, categories: ["agents"], github: [], screenshots: [] },
  { slug: "agent-architect", name: "Agent Architect", tagline: "Meta-agent that designs optimal agent swarms.", tier: 3, description: "Designs and orchestrates agent configurations.", keyMetric: { value: "Auto-design", label: "swarms" }, categories: ["agents"], github: [], screenshots: [] },
  { slug: "instagram-ai-manager", name: "Instagram AI Manager", tagline: "AI-powered Instagram content and account management.", tier: 3, description: "Content creation and scheduling.", keyMetric: { value: "Full", label: "automation" }, categories: ["social"], github: [], screenshots: [] },
  { slug: "generational-succession", name: "Generational Agent Succession", tagline: "Parallel agents with generational handoff.", tier: 3, description: "Knowledge transfer across agent generations.", keyMetric: { value: "Generational", label: "learning" }, categories: ["agents"], github: [], screenshots: [] },
  { slug: "phronesis", name: "Phronesis", tagline: "Practical wisdom engine for agent decision-making.", tier: 3, description: "Aristotelian practical reasoning for agents.", keyMetric: { value: "Aristotelian", label: "reasoning" }, categories: ["research"], github: [], screenshots: [] },
  { slug: "llm-council", name: "LLM Council", tagline: "Multi-model consensus with live dashboard.", tier: 3, description: "Query multiple AI models with voting.", keyMetric: { value: "6 models", label: "consensus" }, categories: ["research"], github: [], screenshots: [] },
  { slug: "skill-tester-swarm", name: "Skill Tester Swarm", tagline: "Industrial QA for Claude Code skills.", tier: 3, description: "LLM Council evaluation system.", keyMetric: { value: "Industrial", label: "QA" }, categories: ["agents"], github: [], screenshots: [] },
  { slug: "viral-video-gen", name: "Viral Video Generator", tagline: "End-to-end AI video production pipeline.", tier: 3, description: "Complete vertical video generation.", keyMetric: { value: "End-to-end", label: "pipeline" }, categories: ["video"], github: [], screenshots: [] },
  { slug: "swarm-dashboard", name: "Swarm Dashboard", tagline: "Real-time monitoring for AI agent swarms.", tier: 3, description: "Live agent status and coordination view.", keyMetric: { value: "Real-time", label: "monitoring" }, categories: ["infra"], github: [], screenshots: [] },
  { slug: "teammate-tool", name: "Teammate Tool", tagline: "Native agent coordination for Claude Code.", tier: 3, description: "TeamCreate-based multi-agent orchestration.", keyMetric: { value: "Native", label: "coordination" }, categories: ["agents"], github: [], screenshots: [] },
  { slug: "happycapy-design", name: "HappyCapy Design System", tagline: "Capybara-inspired UI design language.", tier: 3, description: "Component library and design tokens.", keyMetric: { value: "Design", label: "system" }, categories: ["infra"], github: [], screenshots: [] },
  { slug: "factorized-video-gen", name: "Factorized Video Gen", tagline: "Decomposed video generation pipeline.", tier: 3, description: "Based on arxiv:2512.16371.", keyMetric: { value: "Factorized", label: "pipeline" }, categories: ["video", "research"], github: [], screenshots: [] },
  { slug: "revision-dojo", name: "Revision Dojo", tagline: "Template-driven revision system.", tier: 3, description: "Structured revision workflow.", keyMetric: { value: "Template", label: "driven" }, categories: ["education"], github: [], screenshots: [] },
  { slug: "arxiv-claude-skills", name: "arXiv Claude Skills", tagline: "Research paper analysis skills.", tier: 3, description: "Parse and analyze arXiv papers.", keyMetric: { value: "arXiv", label: "analysis" }, categories: ["research"], github: [], screenshots: [] },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTier(tier: Tier): Project[] {
  return projects.filter((p) => p.tier === tier);
}
