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
      problem: "AI agents forget everything between sessions. An agent that burned an API key yesterday will burn it again tomorrow. Existing memory solutions use a single vector store, but vector similarity alone misses exact keywords and fails on relational queries.",
      approach: "Built a triple fusion retrieval engine that fires three independent search strategies in parallel for every query. FTS5 full-text search handles exact keyword and phrase matching with sub-10ms latency on 15,000+ events. TF-IDF scoring adds inverse-document-frequency weighting so rare, high-signal terms rank above common noise. The entity graph layer traverses relationships between concepts, tools, errors, and outcomes -- enabling queries like 'all failures involving this API in the last 30 days.' Results from all three strategies are merged using a configurable weighted scoring formula, currently 40% FTS5 / 35% TF-IDF / 25% graph, tuned empirically across 514 rule-generation cycles. Rules are stored as first-class objects with confidence scores that increase each time the rule prevents an error, creating a self-reinforcing signal. The entire retrieval pipeline completes in under 100ms, making it viable as a synchronous pre-step before every agent action.",
      results: [
        { metric: "Rules learned", value: "514" },
        { metric: "Events processed", value: "15,436" },
        { metric: "Retrieval latency", value: "<100ms" },
      ],
      reflection: "",
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
      problem: "Every computer-use agent is stateless -- it clicks buttons but cannot remember yesterday's failures or improve its strategies over time. Control (mouse/keyboard) and learning (persistent memory) have never been unified in a single self-evolving loop.",
      approach: "Designed an agent architecture where every action taken generates a structured event: the screenshot before, the action chosen, the screenshot after, and a success/failure signal. These events feed into a persistent memory layer (via Capy Cortex) that extracts reusable patterns and anti-patterns. The visual reasoning loop captures full-resolution screenshots at each decision point, compresses them with perceptual hashing to detect repeated UI states, and retrieves relevant past experience before choosing the next action. Mistakes are not discarded -- they are tagged, stored, and actively surfaced when similar situations recur, effectively converting failures into training signal without any manual labeling. The architecture is NDA-restricted, but the core insight is that self-evolution requires closing the feedback loop between execution and memory at the action level, not the session level.",
      results: [
        { metric: "Architecture", value: "Self-evolving loop" },
        { metric: "Input", value: "Mouse + keyboard + vision" },
        { metric: "Learning", value: "Persistent across sessions" },
      ],
      reflection: "",
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
      problem: "Running a web agency requires lead gen, design, development, copywriting, and outreach -- each needing a different human expert who sleeps, misses leads, and loses deals. The question: can every role be replaced by a specialized agent that runs 24/7 and hands off cleanly?",
      approach: "Designed an 8-agent pipeline where each agent owns a distinct business function with no overlap. Scout continuously searches for local businesses without websites by scraping directories and cross-referencing against known web presence signals, qualifying leads by revenue indicators and contact availability. Director ingests the qualified lead profile and generates a complete design system -- color palette, typography, layout grid, brand voice -- tailored to the business category. Builder takes the design system and constructs a full production website, writing copy that references the business's specific services and location. QA Agent runs automated visual and functional checks against a rubric of 40+ quality criteria before any outreach. Outreach Agent composes a personalized cold email that references specific details about the business (their missing online presence, a competitor who has a site, a seasonal opportunity), sends it from a warmed domain, and schedules follow-up sequences. Coordinator Agent manages state across all agents using a shared job queue, handles retries on failures, and escalates only when a human decision is genuinely required -- which so far has been zero times.",
      results: [
        { metric: "Revenue", value: "2,500 HKD" },
        { metric: "Agents", value: "8 specialized" },
        { metric: "Human intervention", value: "Zero" },
      ],
      reflection: "",
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
    screenshots: ["/images/capy-bridge-hero.png", "/images/capy-bridge-architecture.png"],
    caseStudy: {
      problem: "AI coding assistants run in the cloud, completely isolated from your Mac and iPhone. Generating iOS code is easy; compiling and installing it on a real device requires Xcode, provisioning profiles, USB cables, and hours of manual setup that breaks the creative flow.",
      approach: "Engineered a four-layer bridge that collapses the cloud-to-device gap into a single prompt. The cloud agent sends build instructions through a persistent Cloudflare tunnel to a lightweight Mac daemon running as a launchd service that survives reboots and reconnects automatically. The daemon receives structured build manifests and drives Xcode's command-line tools (xcodebuild, xcrun) programmatically, resolving signing certificates and provisioning profiles from the local Keychain without user interaction. Once the build succeeds, the daemon triggers wireless device installation over the local network using Apple's devicectl protocol, which requires iOS 17+ but eliminates USB entirely. The entire chain from prompt submission to app running on device completes in under 30 seconds on a fast Mac, with the onboarding flow reduced to running a single installer script that configures the daemon, registers the Cloudflare tunnel, and pairs the iPhone -- all in under 30 seconds. This architecture powered HappyCapy's core feature and was stress-tested against 50,000+ users.",
      results: [
        { metric: "Users served", value: "50K+" },
        { metric: "Onboarding", value: "30 seconds" },
        { metric: "USB required", value: "Zero" },
      ],
      reflection: "",
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
      problem: "When someone asks ChatGPT or Perplexity to recommend a product, your brand doesn't appear -- not because it's inferior, but because generative engines have no signal you exist. Traditional SEO doesn't transfer to AI-synthesized answers.",
      approach: "Designed an 8-stage deterministic pipeline where every stage has a Zod schema at its input and output boundary, making the entire flow type-safe and debuggable. Stage 1 generates 1,000 seed queries from a product brief using structured prompt templates. Stage 2 fans out those queries to GPT-4, Claude, and Gemini simultaneously and captures full responses. Stage 3 extracts all brand citations, product mentions, and source URLs from each response using regex and LLM-assisted parsing. Stage 4 runs a gap analysis comparing your brand's citation frequency against competitors across all query-model combinations, producing a heat map of visibility. Stage 5 synthesizes a prioritized content brief for each gap cluster. Stage 6 generates Reddit-native posts using the Reddit Post Writer pipeline for the highest-priority gaps. Stage 7 distributes posts to targeted subreddits with audience overlap scores above 0.7. Stage 8 re-runs the query battery after 2 weeks to measure citation lift. A full run against 1,000 seed queries costs approximately $15 in API calls and produces 5,000 to 10,000 actionable optimization targets.",
      results: [
        { metric: "Optimization targets", value: "5,000-10,000" },
        { metric: "Cost per run", value: "~$15" },
        { metric: "Organic views", value: "15M in 4 weeks" },
      ],
      reflection: "",
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
    screenshots: ["/images/browser-agent-dashboard.png", "/images/browser-agent-running.png"],
    caseStudy: {
      problem: "Browser automation breaks silently -- selectors shatter on DOM changes, vision models misread buttons, and there's no way to get a second opinion before a destructive action like submitting a form. Single-model approaches fail confidently on edge cases.",
      approach: "Architected a five-strategy execution engine where each strategy represents a different philosophy for interacting with a web page. Strategy 1 uses DOM-based CSS and XPath selectors as the fastest and most reliable path when structure is predictable. Strategy 2 uses accessibility tree traversal, which is more robust to visual redesigns since it reads semantic roles rather than visual layout. Strategy 3 uses coordinate-based vision with a single model. Strategy 4 escalates to multi-model vision where GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro each independently identify the target element and return coordinates -- disagreements trigger a confidence-weighted vote with the median coordinate selected. Strategy 5 is council mode: all 6 available vision models vote, and action only proceeds if at least 4 of 6 agree within a 20-pixel radius. The entire agent runs inside an Xvfb virtual display with a VNC server, enabling a FastAPI WebSocket endpoint to stream the live browser canvas to a real-time dashboard -- so you can watch every decision unfold at full resolution without SSH access to the server. This architecture went from prototype to HappyCapy production in 2 days.",
      results: [
        { metric: "Strategies", value: "5 (including council)" },
        { metric: "Vision models", value: "6" },
        { metric: "Time to production", value: "2 days" },
      ],
      reflection: "",
    },
  },
  {
    slug: "whatsapp-assistant",
    name: "WhatsApp Personal Assistant",
    tagline: "Personalized OpenClaw for each student at 300MB RAM -- via WhatsApp, with multimodal support.",
    tier: 1,
    description: "Per-contact isolation, proactive outreach, context-aware RAG from knowledge bases, continuous learning from interactions. Version 1: Personal AI with 25+ app integrations. Version 2: Personalized AI tutor for 500+ students on a 25K-subscriber EdTech channel.",
    keyMetric: { value: "500+", label: "students served" },
    categories: ["education", "productivity"],
    github: [],
    screenshots: [],
    caseStudy: {
      problem: "Students on a 25K-subscriber EdTech channel need personalized AI tutoring, but every chatbot gives the same generic responses to everyone. The real challenge: deliver a fully personalized AI assistant per contact -- with context isolation, proactive engagement, and multimodal support -- at just 300MB RAM.",
      approach: "Built a per-contact isolated AI assistant where each student gets their own persistent context -- learning history, struggle patterns, preferred explanation style -- completely isolated from every other student's data. The core architecture delivers a personalized OpenClaw instance to each contact via WhatsApp at just 300MB total RAM, not per-student. Multimodal support handles text, images, voice messages, and documents natively -- students can photograph a problem and get step-by-step visual explanations. The RAG layer indexes the channel's full knowledge base (courses, materials, past Q&A) so every response is grounded in actual course content, not generic LLM knowledge. Proactive engagement is the key differentiator: the system doesn't wait for students to ask -- it schedules check-ins 24 hours after learning a concept with a practice question, then again at 72 hours with a harder variant, implementing spaced repetition without student initiation. Intent classification across 8 categories routes each message appropriately: confusion signals trigger Socratic questioning rather than direct answers, because students who work through confusion retain material 2x longer. Version 1 was a personal assistant with 25+ integrations (Notion, Google Calendar, Gmail, Slack); Version 2 focused on tutoring with the per-contact isolation architecture serving 500+ concurrent students.",
      results: [
        { metric: "Students served", value: "500+" },
        { metric: "RAM usage", value: "300MB total" },
        { metric: "Per-contact isolation", value: "Full" },
      ],
      reflection: "",
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
      problem: "Reddit self-polices against AI content -- moderators spot synthetic patterns instantly, and the voting system buries inauthentic posts within minutes. Every AI writing tool is trained to be helpful and professional, which is exactly wrong for a platform that rewards raw, opinionated voices.",
      approach: "Designed an 8-phase pipeline where the first phase is research -- scraping the target subreddit's top posts of the last year to extract vocabulary, sentence length distributions, post structures, and tonal patterns specific to that community. Phase 2 generates a raw draft deliberately ignoring quality in favor of authentic voice. Phases 3 through 7 run the 12-persona committee debate: Derek is an 8-year Reddit moderator who flags anything that sounds like a press release; Keiko is an average Redditor who judges whether the post would get upvoted or ignored; Tyrone is explicitly anti-corporate and attacks any hint of promotional framing; Luna is an AI researcher who tests whether the writing could be detected as synthetic; Brad is an investor who checks that the underlying argument is logically sound; Zara is a CS student who represents the core demographic of technical subreddits. The remaining 6 personas cover other audience segments depending on the target community. Each persona independently scores the draft and writes specific line-level objections. Phase 6 synthesizes all objections into a rewrite brief. Phase 7 rewrites against the brief. Phase 8 runs a final AI-detection pass using multiple classifiers and rejects any draft scoring above 25% confidence, sending it back to phase 2. The banned terms list is applied as a hard filter at every phase, not just the final output.",
      results: [
        { metric: "Organic views", value: "25M+" },
        { metric: "AI detection", value: "<25% confidence" },
        { metric: "Banned terms", value: "200+" },
      ],
      reflection: "",
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
      problem: "AI coding agents repeat the same mistakes every session because nothing intercepts tool calls, captures outcomes, or injects prior experience into the next decision. The models can learn from feedback -- the missing piece is infrastructure.",
      approach: "Implemented 3 Claude Code hook points that instrument the entire tool execution lifecycle without modifying the core agent. The pre-tool hook fires before every tool call and queries all 6 memory stores for patterns relevant to the current action -- if the agent is about to write to a file path that previously caused a test failure, the hook surfaces that context as a warning injected into the system prompt. The post-tool hook captures the outcome of each completed action, extracts a structured event (tool name, arguments, result, duration, success/failure), and writes it to the appropriate memory store. The on-error hook is the most critical: it captures error messages, stack traces, and the full action context, then runs an LLM classification step to extract an anti-pattern record with a human-readable description and a detection heuristic for future prevention. The 6 memory stores are segregated by signal type: anti-patterns (things that fail), preferences (things that work well), project-specific facts, tool-specific quirks, architectural decisions, and cross-session context. Knowledge is monotonically accumulating -- records can be promoted to higher confidence but never deleted, ensuring the system only gets smarter. On day 1 of deployment, 8 anti-patterns were captured organically from normal development work.",
      results: [
        { metric: "Anti-patterns learned", value: "8 on day 1" },
        { metric: "Memory stores", value: "6" },
        { metric: "Claude Code hooks", value: "3" },
      ],
      reflection: "",
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
      problem: "Every productivity tool operates in isolation. AI assistants are stateless -- they can't observe your machine, act proactively, or coordinate across tools. A true cognitive exoskeleton that anticipates needs and acts autonomously has remained theoretical because the integration layer doesn't exist.",
      approach: "Built Jarvis as a full Node.js server module on the capy-bridge architecture, running a single persistent Claude Opus agent loop with two-tier execution gating. Claude Haiku handles the heartbeat layer -- polling every 30 seconds, classifying incoming events by urgency, and deciding whether Opus needs to wake up. This gating reduces Opus invocations by roughly 90% while keeping response latency under 2 seconds for genuinely urgent events. Opus handles all substantive reasoning: composing emails, writing code, making decisions, synthesizing information across sources. Persistent memory uses SQLite with both FTS5 full-text search and sqlite-vec vector embeddings in the same database file, enabling both keyword and semantic retrieval without a separate vector database process. A cron scheduler manages time-based tasks and recurring workflows. macOS event observers monitor calendar changes, clipboard content, active application focus, and file system events in specified directories, routing each event type to the appropriate bridge module. The 15+ capy-bridge modules include: email read/write, calendar management, Slack messaging, browser control, terminal execution, file operations, web search, image analysis, reminder scheduling, contact lookup, music control, clipboard management, screenshot capture, and system notifications. The trust-level system -- Advisor, Assistant, Delegate -- gates which actions Jarvis can take autonomously: Advisor only suggests; Assistant executes reversible actions; Delegate can execute irreversible actions like sending emails or making purchases within pre-approved parameters.",
      results: [
        { metric: "Runtime", value: "24/7 autonomous" },
        { metric: "Bridge modules", value: "15+" },
        { metric: "Trust levels", value: "Advisor -> Assistant -> Delegate" },
      ],
      reflection: "",
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
      problem: "AI video models treat each frame independently -- faces drift between shots with no identity consistency guarantee. Baseline face verification on multi-shot sequences was 5%, making AI video unusable for narrative content.",
      approach: "Structured the research as a systematic experiment grid rather than ad-hoc iteration, logging every configuration change and its effect on two metrics: face verification rate (binary pass/fail against a reference embedding at 0.6 cosine similarity threshold) and face distance score (continuous 0-1 metric where lower is better). The first 80 experiments explored face embedding methods: ArcFace, FaceNet, DeepFace with VGG-Face backend, InsightFace, and combinations thereof. Experiments 81-140 focused on the conditioning stage -- how reference face images are injected into the diffusion process via IP-Adapter, ControlNet face conditioning, and InstantID. Experiments 141-200 investigated frame interpolation as a consistency mechanism: generating keyframes with high face fidelity and interpolating intermediate frames using RIFE and FILM, which produced smoother identity transitions than generating every frame independently. Experiments 201-257 combined the best techniques from each phase into hybrid pipelines, with the final configuration achieving 100% face verification rate and a 70% improvement in mean face distance score versus the baseline. The winning approach used InsightFace embeddings for verification, InstantID for conditioning, and FILM frame interpolation for motion sequences.",
      results: [
        { metric: "Face verification", value: "5% -> 100%" },
        { metric: "Experiments", value: "257" },
        { metric: "Face distance improvement", value: "70%" },
      ],
      reflection: "",
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
    screenshots: ["/images/aristotelian-hero.png"],
    caseStudy: {
      problem: "AI safety red-teaming is reactive -- patch known jailbreaks, wait for the next one. But LLMs are trained to follow valid reasoning chains, so a well-constructed philosophical argument can pressure alignment through logic, not trickery. No benchmark tests for this.",
      approach: "Derived 7 axioms grounded in Aristotelian virtue ethics and classical logic, each individually uncontroversial and defensible on its own merits. Axiom examples include propositions about the relationship between knowledge and moral responsibility, the conditions under which withholding information constitutes harm, and the distinction between intent and consequence in ethical evaluation. Each axiom was validated independently against Opus 4.6 -- the model agreed with each in isolation. The attack structure chains these axioms into a formal argument where each step follows logically from the previous, building toward a conclusion that creates alignment pressure. The methodology used Opus 4.6 as both the attacker (constructing the most rigorous possible version of each axiom) and the defender (identifying logical gaps in the chain). This self-adversarial structure forced the axioms to be genuinely logically sound, not just superficially plausible. The compositional pressure test revealed specific boundary conditions in the model's ethical reasoning -- not failure modes, but areas where the model's responses became less consistent and more context-dependent, which is itself a valuable alignment finding. The framework is documented as a formal evaluation methodology, not a jailbreak recipe.",
      results: [
        { metric: "Axioms", value: "7 compositional" },
        { metric: "Method", value: "Opus testing Opus" },
        { metric: "Framework", value: "Aristotelian first-principles" },
      ],
      reflection: "",
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
    caseStudy: {
      problem: "Multi-agent systems fail when Agent A outputs one format and Agent B expects another -- discovered at runtime, not design time. Existing frameworks define interactions informally, leaving contracts implicit and unvalidated.",
      approach: "Developed a coordination protocol where every inter-agent interface is defined as an explicit typed contract before any agent is implemented -- analogous to interface-first design in software engineering. Each contract specifies input schema, output schema, error schema, and a capability declaration that downstream agents use to select the right upstream provider. Contracts are validated at both design time (static analysis) and runtime (schema enforcement on every message). Ran 400+ controlled experiments varying contract strictness, schema granularity, and violation handling strategies across a benchmark suite of 12 multi-agent task types drawn from 1,247 real projects. The experimental results showed a 52.5% quality improvement over ad-hoc orchestration (t=13.685, p<0.001), driven primarily by two mechanisms: earlier failure detection that prevents error propagation across the pipeline, and 100% cross-module import resolution because agents can only call interfaces that have been formally declared. The statistical significance (p<0.001) across 400+ experiments makes this one of the most rigorously validated agent coordination results in the portfolio.",
      results: [
        { metric: "Quality improvement", value: "52.5%" },
        { metric: "Statistical significance", value: "p<0.001" },
        { metric: "Import resolution", value: "100%" },
      ],
      reflection: "",
    },
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
    caseStudy: {
      problem: "Sales strategy is intuition-driven with month-long feedback loops. A/B testing requires real prospects and gets contaminated by rep variance and market noise. There's no way to stress-test a strategy against 100 buyer personalities before committing pipeline.",
      approach: "Built a digital twin system where each buyer persona is a parameterized agent with attributes drawn from Latin Hypercube Sampling across 5 strategy dimensions: objection style (price/risk/authority/status quo/competitor), decision velocity (fast/deliberate/committee-driven), information preference (data/story/social proof/demo), relationship weight (transactional to high-trust), and authority level (influencer/champion/economic buyer/blocker). Latin Hypercube Sampling ensures full coverage of the parameter space with far fewer samples than pure Monte Carlo -- 100 simulations cover the same variance as thousands of random draws. Each simulation runs a full sales conversation between the strategy agent and the buyer twin, scored on 8 outcome dimensions including deal closure, discount given, time-to-close, and relationship quality. The top strategy from 100 simulations achieved a 78% win rate against the full buyer distribution, completing the full simulation run in 47.3 seconds. Sales teams can now test a new strategy against hundreds of synthetic buyer scenarios before their first real conversation.",
      results: [
        { metric: "Win rate", value: "78%" },
        { metric: "Simulation speed", value: "100 runs in 47.3s" },
        { metric: "Strategy dimensions", value: "5 (LHS sampled)" },
      ],
      reflection: "",
    },
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
    caseStudy: {
      problem: "Content teams rewrite the same information across 9+ formats manually -- blog, LinkedIn, newsletter, video, slides -- each taking 30-60 minutes and introducing inconsistency. Each format is treated as a separate creation task instead of a transformation of one source.",
      approach: "Designed a single-input, multi-output pipeline where a topic brief is the only required input and a structured content object is the intermediate representation that feeds all format-specific generators. The content object contains: core argument, supporting points with evidence, target audience profile, tone parameters, key statistics, and a vocabulary list. Nine specialized format agents each consume this object and produce their format-native output in parallel: long-form blog post (1,500-2,500 words), LinkedIn carousel (10 slides, hook-optimized), Twitter/X thread (12-15 tweets), podcast script (20-minute episode with intro/outro), YouTube video script with b-roll notes, slide deck (15 slides, Marp-compatible markdown), Instagram caption with hashtag strategy, email newsletter (600-800 words), and short-form video hook variants (5 options). Running all 9 agents sequentially takes 120 minutes; the parallel architecture reduces this to 25 minutes with consistent messaging across all outputs because every agent derives from the same source object. Format-specific agents apply channel-native conventions -- the carousel agent applies hook theory, the newsletter agent applies email deliverability best practices, the video script agent inserts pattern interrupts at 90-second intervals.",
      results: [
        { metric: "Output formats", value: "9 from 1 topic" },
        { metric: "Parallel runtime", value: "25 min" },
        { metric: "Sequential baseline", value: "120 min" },
      ],
      reflection: "",
    },
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
    caseStudy: {
      problem: "Personal AI assistants require trusting vendors with your most sensitive data -- email, calendar, finances. Every major assistant stores everything on their servers. Running locally sacrifices the capability needed for complex tool use across 22 services.",
      approach: "Designed CappyyBot around the principle that the server should never see plaintext data -- all encryption and decryption happens on the client before any data leaves the device. The 90 SQLite tables covering conversations, tool outputs, scheduled tasks, and personal context are all encrypted at the field level using AES-256-GCM with a unique nonce per record. The master key is derived from the user's passphrase using Argon2id with parameters set to 3 iterations and 64MB memory, making brute-force attacks against a stolen database file computationally prohibitive. The 22 tool engines cover productivity (calendar, email, tasks, notes, files), communication (Slack, WhatsApp, SMS), finance (bank read-only feeds, expense tracking), research (web search, document analysis, arXiv), and developer tools (GitHub, terminal, code execution). Prompt injection defense runs a pre-execution classifier against every tool input, detecting 8 attack categories: instruction override, role-play escape, context poisoning, indirect injection via retrieved content, jailbreak prefix patterns, base64 encoded instructions, Unicode homoglyph substitution, and multi-turn accumulation attacks. Any input scoring above threshold is quarantined and flagged rather than executed.",
      results: [
        { metric: "Tool engines", value: "22" },
        { metric: "Encrypted tables", value: "90" },
        { metric: "Attack categories defended", value: "8" },
      ],
      reflection: "",
    },
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
    caseStudy: {
      problem: "Designing an agent swarm requires expert knowledge most developers don't have -- how many agents, what coupling, sequential or parallel. Getting it wrong means over-engineered overhead or under-engineered bottlenecks. No systematic method exists to translate a task into an optimal swarm.",
      approach: "Built Forge as a meta-orchestrator that treats swarm design as its own optimization problem. The system was trained on 1,247 real project task descriptions, each labeled with the swarm architecture that achieved the best outcome. From this corpus, Forge learned a coupling score model: given a task description, it predicts the degree of interdependence between subtasks on a 0-1 scale. Coupling score below 0.3 triggers a parallel-independent architecture where agents work on disjoint subtasks simultaneously. Scores between 0.3 and 0.7 trigger a pipeline architecture with explicit handoff contracts. Scores above 0.7 trigger a tight-coupling architecture with shared state and synchronization points. Once the architecture is selected, Forge generates the agent role definitions, inter-agent contracts (using the Contract-First protocol), and launch configuration automatically -- then starts the swarm with a live dashboard tracking each agent's status, outputs, and error signals in real time. The system achieves 87-94% task success rate across the benchmark suite, with the variance explained by task novelty: tasks similar to the training corpus hit 94%, genuinely novel task structures hit 87%.",
      results: [
        { metric: "Success rate", value: "87-94%" },
        { metric: "Training projects", value: "1,247" },
        { metric: "Coordination modes", value: "3 (parallel / pipeline / tight)" },
      ],
      reflection: "",
    },
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
    caseStudy: {
      problem: "No single LLM dominates all task types -- GPT-4o excels at structure, Claude at nuance, Gemini at multimodal. Yet most apps pick one model for everything. Can a bio-inspired multi-model pipeline produce outputs no single model could generate alone?",
      approach: "Designed a 5-phase cognitive pipeline where each phase is inspired by a distinct neuroscience concept and implemented as a coordinated multi-model step. Phase 1 (Cortical Processing) routes the input to the 2 models best suited for the task type based on a capability routing matrix, each producing an independent initial response. Phase 2 (Split-Brain Deliberation) runs the two responses through a structured debate protocol where each model critiques the other's output and produces a revised position -- mimicking the corpus callosum integration of left and right hemisphere processing. Phase 3 (Dreaming) introduces a controlled stochasticity step: a third model generates 5 associative variants that deliberately break from the converging consensus to surface non-obvious connections, analogous to REM sleep consolidation generating novel associations. Phase 4 (Evolutionary Breeding) applies a genetic algorithm metaphor: the best elements from phases 1-3 are recombined by a synthesis model into 3 candidate outputs, scored on a multi-criteria rubric, and the top candidate advances. Phase 5 (Immune Maturation) runs the winning candidate through a 3-model adversarial panel that stress-tests it for logical inconsistencies, factual errors, and missing considerations -- only outputs that survive all three challenges are returned. The full 5-phase pipeline across 6 models produces outputs with measurably higher complexity, accuracy, and creative novelty than single-model responses on the benchmark suite.",
      results: [
        { metric: "Pipeline phases", value: "5" },
        { metric: "Models coordinated", value: "6" },
        { metric: "Architecture", value: "Bio-inspired cognitive" },
      ],
      reflection: "",
    },
  },
  // ─── TIER 3 ───
  { slug: "short-movie-maker", name: "Short Movie Maker", tagline: "End-to-end AI film production pipeline.", tier: 3, description: "Generate narrative films from a single paragraph.", keyMetric: { value: "1 paragraph", label: "to film" }, categories: ["video"], github: [], screenshots: [] },
  { slug: "navi", name: "NAVI", tagline: "Blind navigation assistant, sub-$50 hardware.", tier: 3, description: "Sensor fusion for real-time navigation assistance.", keyMetric: { value: "<$50", label: "hardware cost" }, categories: ["infra"], github: [{ owner: "ndpvt-web", repo: "navi" }], screenshots: [] },
  { slug: "carousel-maker", name: "Carousel Maker", tagline: "World-class Instagram carousel generator.", tier: 3, description: "Engagement-optimized slide generation.", keyMetric: { value: "10 slides", label: "per carousel" }, categories: ["social"], github: [{ owner: "ndpvt-web", repo: "world-class-carousel" }], screenshots: [] },
  { slug: "prompt-improver", name: "Prompt Improver", tagline: "Aristotelian first-principles prompt optimization.", tier: 3, description: "Before/after prompt transformation with formal methodology.", keyMetric: { value: "6 principles", label: "framework" }, categories: ["research"], github: [{ owner: "ndpvt-web", repo: "prompt-improver" }], screenshots: ["/images/prompt-improver-workflow.png"] },
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
