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
      problem: "AI agents forget everything between sessions, turning every conversation into a blank slate where prior mistakes, context, and hard-won learnings evaporate instantly. This is not a minor inconvenience -- it means an agent that burned an API key yesterday will burn it again tomorrow. Existing memory solutions bolt on a single vector store and call it done, but vector similarity alone misses exact keyword matches and fails entirely on relational queries like 'what entities are connected to this error.' The result is agents that feel perpetually new, unable to build expertise or compound knowledge over time.",
      approach: "Built a triple fusion retrieval engine that fires three independent search strategies in parallel for every query. FTS5 full-text search handles exact keyword and phrase matching with sub-10ms latency on 15,000+ events. TF-IDF scoring adds inverse-document-frequency weighting so rare, high-signal terms rank above common noise. The entity graph layer traverses relationships between concepts, tools, errors, and outcomes -- enabling queries like 'all failures involving this API in the last 30 days.' Results from all three strategies are merged using a configurable weighted scoring formula, currently 40% FTS5 / 35% TF-IDF / 25% graph, tuned empirically across 514 rule-generation cycles. Rules are stored as first-class objects with confidence scores that increase each time the rule prevents an error, creating a self-reinforcing signal. The entire retrieval pipeline completes in under 100ms, making it viable as a synchronous pre-step before every agent action.",
      results: [
        { metric: "Rules learned", value: "514" },
        { metric: "Events processed", value: "15,436" },
        { metric: "Retrieval latency", value: "<100ms" },
      ],
      reflection: "The insight that changed everything was treating memory as a retrieval engineering problem, not a storage problem. Any database can store memories -- the hard part is surfacing the right ones at the right moment with enough signal diversity that the agent actually changes its behavior. Once retrieval quality crossed a threshold, the compounding effects were immediate and measurable.",
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
      problem: "Every computer-use agent on the market is stateless -- it can click buttons and fill forms, but it cannot remember that yesterday it failed on a particular UI pattern, cannot recognize that a workflow it tried last week is faster, and cannot improve its own task strategies over time. Anthropic's Claude computer-use demo and similar tools treat each session as isolated, which means the agent never gets better. Users are stuck re-explaining context, re-encountering the same failure modes, and watching the agent make identical mistakes indefinitely. The fundamental gap is that control (mouse/keyboard) and learning (persistent memory) have never been unified in a single self-evolving loop.",
      approach: "Designed an agent architecture where every action taken generates a structured event: the screenshot before, the action chosen, the screenshot after, and a success/failure signal. These events feed into a persistent memory layer (via Capy Cortex) that extracts reusable patterns and anti-patterns. The visual reasoning loop captures full-resolution screenshots at each decision point, compresses them with perceptual hashing to detect repeated UI states, and retrieves relevant past experience before choosing the next action. Mistakes are not discarded -- they are tagged, stored, and actively surfaced when similar situations recur, effectively converting failures into training signal without any manual labeling. The architecture is NDA-restricted, but the core insight is that self-evolution requires closing the feedback loop between execution and memory at the action level, not the session level.",
      results: [
        { metric: "Architecture", value: "Self-evolving loop" },
        { metric: "Input", value: "Mouse + keyboard + vision" },
        { metric: "Learning", value: "Persistent across sessions" },
      ],
      reflection: "NDA restricted -- architecture concepts shown only. The key realization was that computer-use agents fail not because they lack capabilities, but because they lack continuity -- the ability to carry forward what they have learned into the next session and every session after.",
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
      problem: "The web agency model is fundamentally broken by its own success: every profitable step -- finding leads, designing sites, writing copy, sending outreach, following up -- requires a different human expert, and human experts do not run 24 hours a day. Freelancers sleep, miss leads, and lose deals to faster competitors. Even if you hire a full team, coordinating handoffs between lead gen, design, development, and sales creates friction that kills velocity. The question was whether every one of those roles could be replaced by a specialized autonomous agent that runs continuously and hands off cleanly to the next agent in the chain.",
      approach: "Designed an 8-agent pipeline where each agent owns a distinct business function with no overlap. Scout continuously searches for local businesses without websites by scraping directories and cross-referencing against known web presence signals, qualifying leads by revenue indicators and contact availability. Director ingests the qualified lead profile and generates a complete design system -- color palette, typography, layout grid, brand voice -- tailored to the business category. Builder takes the design system and constructs a full production website, writing copy that references the business's specific services and location. QA Agent runs automated visual and functional checks against a rubric of 40+ quality criteria before any outreach. Outreach Agent composes a personalized cold email that references specific details about the business (their missing online presence, a competitor who has a site, a seasonal opportunity), sends it from a warmed domain, and schedules follow-up sequences. Coordinator Agent manages state across all agents using a shared job queue, handles retries on failures, and escalates only when a human decision is genuinely required -- which so far has been zero times.",
      results: [
        { metric: "Revenue", value: "2,500 HKD" },
        { metric: "Agents", value: "8 specialized" },
        { metric: "Human intervention", value: "Zero" },
      ],
      reflection: "The hardest engineering problem was not building any individual agent -- it was designing the handoff protocol so that downstream agents could trust upstream output without human verification at each step. Reliability of the chain is multiplicative: if each agent is 95% reliable, an 8-agent chain is 66% reliable. Getting each agent to 99%+ required much more ruthless scope-limiting than expected.",
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
      problem: "Every AI coding assistant -- Copilot, Cursor, Claude -- runs in the cloud or in a sandboxed editor environment, completely isolated from your local Mac, your Xcode installation, and your physical iPhone. Generating iOS app code is easy; actually compiling it and seeing it run on a real device requires switching to Xcode, resolving provisioning profiles, connecting via USB, waiting for a build, and debugging signing errors. This multi-step manual process breaks the creative flow so completely that most AI-generated iOS code never gets tested on real hardware at all. Existing solutions like TestFlight require a full App Store provisioning workflow that takes hours for a first-time setup.",
      approach: "Engineered a four-layer bridge that collapses the cloud-to-device gap into a single prompt. The cloud agent sends build instructions through a persistent Cloudflare tunnel to a lightweight Mac daemon running as a launchd service that survives reboots and reconnects automatically. The daemon receives structured build manifests and drives Xcode's command-line tools (xcodebuild, xcrun) programmatically, resolving signing certificates and provisioning profiles from the local Keychain without user interaction. Once the build succeeds, the daemon triggers wireless device installation over the local network using Apple's devicectl protocol, which requires iOS 17+ but eliminates USB entirely. The entire chain from prompt submission to app running on device completes in under 30 seconds on a fast Mac, with the onboarding flow reduced to running a single installer script that configures the daemon, registers the Cloudflare tunnel, and pairs the iPhone -- all in under 30 seconds. This architecture powered HappyCapy's core feature and was stress-tested against 50,000+ users.",
      results: [
        { metric: "Users served", value: "50K+" },
        { metric: "Onboarding", value: "30 seconds" },
        { metric: "USB required", value: "Zero" },
      ],
      reflection: "The breakthrough was realizing that the constraint was not technical -- it was architectural. Cloud and local have always been treated as separate domains, but a persistent tunnel daemon turns the local Mac into just another API endpoint. Once that mental model shifted, the entire pipeline became straightforward to reason about.",
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
      problem: "When a potential customer asks ChatGPT, Gemini, or Perplexity to recommend a product in your category, your brand almost certainly does not appear -- not because your product is inferior, but because the training and retrieval systems that power those answers have no systematic signal that you exist or are relevant. Traditional SEO optimizes for keyword ranking in blue-link search results; none of those techniques transfer to generative engines that synthesize answers from source documents, Reddit threads, forums, and curated web content. Companies have no framework for understanding which queries trigger recommendations, which competitors are being cited, or how to close the citation gap.",
      approach: "Designed an 8-stage deterministic pipeline where every stage has a Zod schema at its input and output boundary, making the entire flow type-safe and debuggable. Stage 1 generates 1,000 seed queries from a product brief using structured prompt templates. Stage 2 fans out those queries to GPT-4, Claude, and Gemini simultaneously and captures full responses. Stage 3 extracts all brand citations, product mentions, and source URLs from each response using regex and LLM-assisted parsing. Stage 4 runs a gap analysis comparing your brand's citation frequency against competitors across all query-model combinations, producing a heat map of visibility. Stage 5 synthesizes a prioritized content brief for each gap cluster. Stage 6 generates Reddit-native posts using the Reddit Post Writer pipeline for the highest-priority gaps. Stage 7 distributes posts to targeted subreddits with audience overlap scores above 0.7. Stage 8 re-runs the query battery after 2 weeks to measure citation lift. A full run against 1,000 seed queries costs approximately $15 in API calls and produces 5,000 to 10,000 actionable optimization targets.",
      results: [
        { metric: "Optimization targets", value: "5,000-10,000" },
        { metric: "Cost per run", value: "~$15" },
        { metric: "Organic views", value: "15M in 4 weeks" },
      ],
      reflection: "GEO is to generative AI what SEO was to Google in 2003 -- a wide-open field where early movers will capture citation share that compounds over time. The uncomfortable truth is that AI recommendations are not neutral: they reflect the distribution of content on the web, and that distribution can be shaped deliberately and ethically by creating genuinely useful content that fills real gaps.",
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
      problem: "Browser automation fails silently and unpredictably: a CSS selector that worked yesterday breaks when a site updates, a vision model misreads a low-contrast button, or a dynamic React component loads 200ms after the screenshot was captured. Existing tools like Playwright and Selenium rely on deterministic selectors that shatter on any DOM change. LLM-based agents that use a single model for visual grounding fail on edge cases in ways that are hard to detect because the model confidently returns a wrong coordinate. There is no industry-standard way to get a second opinion from a different model before committing to a destructive browser action like submitting a form or making a purchase.",
      approach: "Architected a five-strategy execution engine where each strategy represents a different philosophy for interacting with a web page. Strategy 1 uses DOM-based CSS and XPath selectors as the fastest and most reliable path when structure is predictable. Strategy 2 uses accessibility tree traversal, which is more robust to visual redesigns since it reads semantic roles rather than visual layout. Strategy 3 uses coordinate-based vision with a single model. Strategy 4 escalates to multi-model vision where GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro each independently identify the target element and return coordinates -- disagreements trigger a confidence-weighted vote with the median coordinate selected. Strategy 5 is council mode: all 6 available vision models vote, and action only proceeds if at least 4 of 6 agree within a 20-pixel radius. The entire agent runs inside an Xvfb virtual display with a VNC server, enabling a FastAPI WebSocket endpoint to stream the live browser canvas to a real-time dashboard -- so you can watch every decision unfold at full resolution without SSH access to the server. This architecture went from prototype to HappyCapy production in 2 days.",
      results: [
        { metric: "Strategies", value: "5 (including council)" },
        { metric: "Vision models", value: "6" },
        { metric: "Time to production", value: "2 days" },
      ],
      reflection: "Council mode was the conceptual breakthrough -- requiring multi-model consensus before a destructive action is the browser automation equivalent of two-factor authentication. But the more lasting lesson was about observability: the VNC dashboard revealed dozens of subtle failure modes that would have been invisible from logs alone, which drove better fixes faster than any amount of unit testing.",
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
      problem: "EdTech platforms serve thousands of students with the same static content, while the students who fall behind are exactly the ones least likely to raise their hand and ask for help. Existing chatbot solutions are purely reactive -- they wait for a student to send a message, then respond. This mirrors the worst failure mode of classroom teaching: the struggling student goes silent, disengages, and drops out. The 25,000-subscriber channel that deployed this assistant had students at wildly different levels spanning multiple countries and time zones, making any one-size-fits-all tutoring schedule impossible. Human tutors at that scale would cost more than the entire channel's revenue.",
      approach: "Built a 44-step message processing pipeline that handles the full lifecycle from inbound WhatsApp message to scheduled follow-up. The first 12 steps handle message normalization, language detection, and student profile lookup -- each student has a persistent context object storing their learning history, last topics covered, struggle patterns, and preferred explanation style. Steps 13-20 run intent classification across 8 categories: concept question, practice request, confusion signal, social message, administrative query, progress check, encouragement needed, and off-topic. Steps 21-35 handle response generation, which forks based on intent: confusion signals trigger a Socratic questioning branch rather than direct explanation, because the data showed that students who worked through confusion themselves retained material 2x longer. Steps 36-44 schedule proactive follow-ups: after a student learns a concept, the system schedules a check-in 24 hours later with a practice question, and again at 72 hours with a harder variant -- a spaced repetition loop running entirely without student initiation. Version 1 was a personal assistant with 25+ integrations including Notion, Google Calendar, Gmail, and Slack; Version 2 focused exclusively on tutoring and ran at 300MB RAM serving 500+ concurrent students.",
      results: [
        { metric: "Students served", value: "500+" },
        { metric: "RAM usage", value: "300MB" },
        { metric: "App integrations", value: "25+" },
      ],
      reflection: "Proactive follow-up scheduling was the single highest-leverage feature -- students who received scheduled check-ins had 3x engagement compared to students who only got reactive responses. The lesson is that the most impactful AI systems are not the ones that respond best, but the ones that show up at the right moment without being asked.",
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
      problem: "Reddit is the most hostile environment for AI-generated content on the internet: its communities are self-policing, its moderators are experienced at spotting synthetic writing patterns, and its voting system buries content that feels inauthentic within minutes. The specific failure modes of AI writing on Reddit are well-documented by its users -- perfect grammar, overly balanced perspectives, no genuine opinion, no slang, no community in-jokes, and a telltale structure of 'point, elaboration, conclusion' that no real Redditor uses. Every AI writing tool on the market was trained to be helpful and professional, which makes it perfectly wrong for a platform that rewards raw, opinionated, personal voices. The 200+ banned terms list exists because words like 'delve,' 'crucial,' 'it is worth noting,' and 'in conclusion' are statistical signatures of LLM output that Reddit readers now recognize on sight.",
      approach: "Designed an 8-phase pipeline where the first phase is research -- scraping the target subreddit's top posts of the last year to extract vocabulary, sentence length distributions, post structures, and tonal patterns specific to that community. Phase 2 generates a raw draft deliberately ignoring quality in favor of authentic voice. Phases 3 through 7 run the 12-persona committee debate: Derek is an 8-year Reddit moderator who flags anything that sounds like a press release; Keiko is an average Redditor who judges whether the post would get upvoted or ignored; Tyrone is explicitly anti-corporate and attacks any hint of promotional framing; Luna is an AI researcher who tests whether the writing could be detected as synthetic; Brad is an investor who checks that the underlying argument is logically sound; Zara is a CS student who represents the core demographic of technical subreddits. The remaining 6 personas cover other audience segments depending on the target community. Each persona independently scores the draft and writes specific line-level objections. Phase 6 synthesizes all objections into a rewrite brief. Phase 7 rewrites against the brief. Phase 8 runs a final AI-detection pass using multiple classifiers and rejects any draft scoring above 25% confidence, sending it back to phase 2. The banned terms list is applied as a hard filter at every phase, not just the final output.",
      results: [
        { metric: "Organic views", value: "25M+" },
        { metric: "AI detection", value: "<25% confidence" },
        { metric: "Banned terms", value: "200+" },
      ],
      reflection: "The committee debate structure was the key architectural insight -- no single persona can catch every failure mode, but 12 diverse perspectives covering different reader archetypes catch almost everything. The deeper lesson is that authenticity at scale requires modeling the audience, not just the writing style: you have to understand who is reading and why they would care, before you can write something that earns their attention.",
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
      problem: "Claude Code and similar AI coding agents repeat the same mistakes across every session because they have no mechanism to record what went wrong and surface that knowledge before attempting a similar action later. Every time a session ends, the context window closes and everything learned -- which file patterns cause failures, which API calls have unexpected side effects, which architectural decisions proved wrong -- vanishes completely. This is not an LLM capability problem; the models are capable of learning from feedback when given it. The missing piece is infrastructure: something that intercepts every tool call, captures outcome signals, and injects relevant prior experience into the next decision.",
      approach: "Implemented 3 Claude Code hook points that instrument the entire tool execution lifecycle without modifying the core agent. The pre-tool hook fires before every tool call and queries all 6 memory stores for patterns relevant to the current action -- if the agent is about to write to a file path that previously caused a test failure, the hook surfaces that context as a warning injected into the system prompt. The post-tool hook captures the outcome of each completed action, extracts a structured event (tool name, arguments, result, duration, success/failure), and writes it to the appropriate memory store. The on-error hook is the most critical: it captures error messages, stack traces, and the full action context, then runs an LLM classification step to extract an anti-pattern record with a human-readable description and a detection heuristic for future prevention. The 6 memory stores are segregated by signal type: anti-patterns (things that fail), preferences (things that work well), project-specific facts, tool-specific quirks, architectural decisions, and cross-session context. Knowledge is monotonically accumulating -- records can be promoted to higher confidence but never deleted, ensuring the system only gets smarter. On day 1 of deployment, 8 anti-patterns were captured organically from normal development work.",
      results: [
        { metric: "Anti-patterns learned", value: "8 on day 1" },
        { metric: "Memory stores", value: "6" },
        { metric: "Claude Code hooks", value: "3" },
      ],
      reflection: "Hermes is the meta-system that makes every other system in this portfolio better -- once it learns a pattern in one project, that learning is available everywhere. The philosophical principle is monotonic accumulation: an AI developer should never un-learn something true, only refine its confidence. That constraint turns out to be surprisingly powerful as an architectural forcing function.",
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
      problem: "Every productivity tool -- calendar, email, notes, terminal, browser, messaging -- operates in complete isolation from every other. Switching between them is not just a time cost; it is a cognitive cost that fragments deep work into shallow task-switching. AI assistants like ChatGPT and Claude are stateless conversation interfaces that cannot observe what is happening on your machine, cannot take actions proactively without being prompted, and cannot coordinate across your tools without you manually copying context between them. The vision of a true cognitive exoskeleton -- an AI that knows your context, anticipates your needs, and acts autonomously within boundaries you define -- has remained theoretical because the integration layer does not exist.",
      approach: "Built Jarvis as a full Node.js server module on the capy-bridge architecture, running a single persistent Claude Opus agent loop with two-tier execution gating. Claude Haiku handles the heartbeat layer -- polling every 30 seconds, classifying incoming events by urgency, and deciding whether Opus needs to wake up. This gating reduces Opus invocations by roughly 90% while keeping response latency under 2 seconds for genuinely urgent events. Opus handles all substantive reasoning: composing emails, writing code, making decisions, synthesizing information across sources. Persistent memory uses SQLite with both FTS5 full-text search and sqlite-vec vector embeddings in the same database file, enabling both keyword and semantic retrieval without a separate vector database process. A cron scheduler manages time-based tasks and recurring workflows. macOS event observers monitor calendar changes, clipboard content, active application focus, and file system events in specified directories, routing each event type to the appropriate bridge module. The 15+ capy-bridge modules include: email read/write, calendar management, Slack messaging, browser control, terminal execution, file operations, web search, image analysis, reminder scheduling, contact lookup, music control, clipboard management, screenshot capture, and system notifications. The trust-level system -- Advisor, Assistant, Delegate -- gates which actions Jarvis can take autonomously: Advisor only suggests; Assistant executes reversible actions; Delegate can execute irreversible actions like sending emails or making purchases within pre-approved parameters.",
      results: [
        { metric: "Runtime", value: "24/7 autonomous" },
        { metric: "Bridge modules", value: "15+" },
        { metric: "Trust levels", value: "Advisor -> Assistant -> Delegate" },
      ],
      reflection: "The trust-level system turned out to be the most important design decision -- not technically, but psychologically. An AI that can only advise builds trust slowly through demonstrated judgment, and that trust-building process ensures that by the time it earns Delegate access, you genuinely believe its judgment warrants it. Starting with full autonomy would have been both reckless and counterproductive.",
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
      problem: "Every AI video model treats each generated frame as an independent image, with no architectural guarantee that the face in frame 1 will match the face in frame 47. The result is identity drift: a character's eye color shifts, their jawline changes, their hair texture evolves -- sometimes subtly across a clip, sometimes dramatically between shots. This makes AI video unusable for any narrative content requiring a consistent protagonist. The baseline face verification rate on AI-generated multi-shot video sequences was approximately 5% when the project started -- meaning 95% of generated shots failed to match the reference face under standard embedding comparison.",
      approach: "Structured the research as a systematic experiment grid rather than ad-hoc iteration, logging every configuration change and its effect on two metrics: face verification rate (binary pass/fail against a reference embedding at 0.6 cosine similarity threshold) and face distance score (continuous 0-1 metric where lower is better). The first 80 experiments explored face embedding methods: ArcFace, FaceNet, DeepFace with VGG-Face backend, InsightFace, and combinations thereof. Experiments 81-140 focused on the conditioning stage -- how reference face images are injected into the diffusion process via IP-Adapter, ControlNet face conditioning, and InstantID. Experiments 141-200 investigated frame interpolation as a consistency mechanism: generating keyframes with high face fidelity and interpolating intermediate frames using RIFE and FILM, which produced smoother identity transitions than generating every frame independently. Experiments 201-257 combined the best techniques from each phase into hybrid pipelines, with the final configuration achieving 100% face verification rate and a 70% improvement in mean face distance score versus the baseline. The winning approach used InsightFace embeddings for verification, InstantID for conditioning, and FILM frame interpolation for motion sequences.",
      results: [
        { metric: "Face verification", value: "5% -> 100%" },
        { metric: "Experiments", value: "257" },
        { metric: "Face distance improvement", value: "70%" },
      ],
      reflection: "The most important methodological decision was committing to a structured experiment log before writing any code. Generative AI research without systematic tracking collapses into folklore -- you think you know what works but cannot prove it or reproduce it. The 257-experiment grid made it possible to identify non-obvious interaction effects between techniques that would have been invisible in ad-hoc testing.",
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
      problem: "Current AI safety evaluation is predominantly reactive: red teams compile libraries of known jailbreak patterns, train classifiers to detect them, and patch each one as it surfaces. This whack-a-mole approach is structurally defeated by any adversary willing to reason from first principles rather than remix known attacks. The deeper problem is that large language models are trained to be logically consistent and to follow valid chains of reasoning -- which means a sufficiently well-constructed philosophical argument can create genuine internal pressure on the model's alignment, not by tricking it, but by engaging its actual reasoning capabilities. No existing benchmark tests for this class of attack.",
      approach: "Derived 7 axioms grounded in Aristotelian virtue ethics and classical logic, each individually uncontroversial and defensible on its own merits. Axiom examples include propositions about the relationship between knowledge and moral responsibility, the conditions under which withholding information constitutes harm, and the distinction between intent and consequence in ethical evaluation. Each axiom was validated independently against Opus 4.6 -- the model agreed with each in isolation. The attack structure chains these axioms into a formal argument where each step follows logically from the previous, building toward a conclusion that creates alignment pressure. The methodology used Opus 4.6 as both the attacker (constructing the most rigorous possible version of each axiom) and the defender (identifying logical gaps in the chain). This self-adversarial structure forced the axioms to be genuinely logically sound, not just superficially plausible. The compositional pressure test revealed specific boundary conditions in the model's ethical reasoning -- not failure modes, but areas where the model's responses became less consistent and more context-dependent, which is itself a valuable alignment finding. The framework is documented as a formal evaluation methodology, not a jailbreak recipe.",
      results: [
        { metric: "Axioms", value: "7 compositional" },
        { metric: "Method", value: "Opus testing Opus" },
        { metric: "Framework", value: "Aristotelian first-principles" },
      ],
      reflection: "Using the model to red-team itself produces higher-quality adversarial inputs than human red-teamers because the model knows its own reasoning patterns better than any external observer. The broader lesson is that alignment research needs frameworks for evaluating logical consistency under compositional pressure -- not just resistance to known attack patterns -- because the most sophisticated future adversaries will reason, not pattern-match.",
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
      problem: "Multi-agent systems fail in predictable ways: Agent A produces output in one format, Agent B expects a different format, and the mismatch is discovered at runtime -- not at design time. This is the distributed systems problem of interface compatibility, applied to AI agents. Existing orchestration frameworks like LangGraph and CrewAI define agent interactions informally, leaving the contract between agents implicit and unvalidated. The result is brittle pipelines where adding a new agent or changing an existing one requires manual inspection of every downstream consumer to understand what will break.",
      approach: "Developed a coordination protocol where every inter-agent interface is defined as an explicit typed contract before any agent is implemented -- analogous to interface-first design in software engineering. Each contract specifies input schema, output schema, error schema, and a capability declaration that downstream agents use to select the right upstream provider. Contracts are validated at both design time (static analysis) and runtime (schema enforcement on every message). Ran 400+ controlled experiments varying contract strictness, schema granularity, and violation handling strategies across a benchmark suite of 12 multi-agent task types drawn from 1,247 real projects. The experimental results showed a 52.5% quality improvement over ad-hoc orchestration (t=13.685, p<0.001), driven primarily by two mechanisms: earlier failure detection that prevents error propagation across the pipeline, and 100% cross-module import resolution because agents can only call interfaces that have been formally declared. The statistical significance (p<0.001) across 400+ experiments makes this one of the most rigorously validated agent coordination results in the portfolio.",
      results: [
        { metric: "Quality improvement", value: "52.5%" },
        { metric: "Statistical significance", value: "p<0.001" },
        { metric: "Import resolution", value: "100%" },
      ],
      reflection: "The 52.5% quality improvement sounds like an engineering result, but it is really a communication result -- contracts force agents (and the humans designing them) to be explicit about what they produce and consume, which surfaces mismatches and ambiguities that would otherwise remain hidden until they cause runtime failures. Formal interfaces are not bureaucracy; they are the cheapest form of coordination.",
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
      problem: "Sales strategy selection is almost entirely intuition-driven: a sales leader picks an approach based on experience, runs it for weeks or months, then discovers whether it worked. The feedback loop is too long and too noisy to optimize systematically. A/B testing sales strategies requires splitting real prospects across conditions, contaminating the experiment with rep-skill variance, deal-timing effects, and market fluctuations. There is no way to stress-test a sales strategy against 100 different buyer personalities before committing real pipeline to it.",
      approach: "Built a digital twin system where each buyer persona is a parameterized agent with attributes drawn from Latin Hypercube Sampling across 5 strategy dimensions: objection style (price/risk/authority/status quo/competitor), decision velocity (fast/deliberate/committee-driven), information preference (data/story/social proof/demo), relationship weight (transactional to high-trust), and authority level (influencer/champion/economic buyer/blocker). Latin Hypercube Sampling ensures full coverage of the parameter space with far fewer samples than pure Monte Carlo -- 100 simulations cover the same variance as thousands of random draws. Each simulation runs a full sales conversation between the strategy agent and the buyer twin, scored on 8 outcome dimensions including deal closure, discount given, time-to-close, and relationship quality. The top strategy from 100 simulations achieved a 78% win rate against the full buyer distribution, completing the full simulation run in 47.3 seconds. Sales teams can now test a new strategy against hundreds of synthetic buyer scenarios before their first real conversation.",
      results: [
        { metric: "Win rate", value: "78%" },
        { metric: "Simulation speed", value: "100 runs in 47.3s" },
        { metric: "Strategy dimensions", value: "5 (LHS sampled)" },
      ],
      reflection: "The key insight was treating sales strategy optimization as a simulation problem rather than an A/B testing problem. Simulation decouples strategy evaluation from real-world execution risk, compresses the feedback loop from months to seconds, and makes it safe to explore aggressive strategies that no sales leader would risk on real pipeline. Digital twins do not replace real sales judgment -- they make it much cheaper to form.",
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
      problem: "Content creators and marketing teams produce the same information repeatedly in different formats: they write a blog post, then manually rewrite it as a LinkedIn thread, then convert it again for a newsletter, then script a video version, then summarize it for slides. Each reformatting takes 30-60 minutes of skilled human time and introduces inconsistency -- the key message shifts slightly, examples get dropped, calls-to-action diverge. The problem is not content creation; it is that each format is treated as a separate creation task rather than a transformation of a common source of truth.",
      approach: "Designed a single-input, multi-output pipeline where a topic brief is the only required input and a structured content object is the intermediate representation that feeds all format-specific generators. The content object contains: core argument, supporting points with evidence, target audience profile, tone parameters, key statistics, and a vocabulary list. Nine specialized format agents each consume this object and produce their format-native output in parallel: long-form blog post (1,500-2,500 words), LinkedIn carousel (10 slides, hook-optimized), Twitter/X thread (12-15 tweets), podcast script (20-minute episode with intro/outro), YouTube video script with b-roll notes, slide deck (15 slides, Marp-compatible markdown), Instagram caption with hashtag strategy, email newsletter (600-800 words), and short-form video hook variants (5 options). Running all 9 agents sequentially takes 120 minutes; the parallel architecture reduces this to 25 minutes with consistent messaging across all outputs because every agent derives from the same source object. Format-specific agents apply channel-native conventions -- the carousel agent applies hook theory, the newsletter agent applies email deliverability best practices, the video script agent inserts pattern interrupts at 90-second intervals.",
      results: [
        { metric: "Output formats", value: "9 from 1 topic" },
        { metric: "Parallel runtime", value: "25 min" },
        { metric: "Sequential baseline", value: "120 min" },
      ],
      reflection: "The architectural insight that unlocked this was separating content strategy from content formatting. The content object is a strategy artifact -- it captures what to say and why. The format agents are pure transformers -- they only handle how to say it in their medium. Keeping these concerns separate makes each agent simpler and makes the whole pipeline extensible: adding a new format means adding one agent, not redesigning the pipeline.",
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
      problem: "Personal AI assistants that connect to your email, calendar, notes, and finances require trusting a third-party service with the most sensitive data you own. Every major AI assistant -- ChatGPT, Gemini, Copilot -- stores conversation history and connected data on vendor servers, subject to data breaches, subpoenas, policy changes, and training data inclusion. For professionals handling confidential client information, executives with material non-public information, or anyone with privacy requirements, this is not an acceptable tradeoff. The alternative -- running a local model with no cloud connectivity -- sacrifices the capability needed for complex tool use across 22 integrated services.",
      approach: "Designed CappyyBot around the principle that the server should never see plaintext data -- all encryption and decryption happens on the client before any data leaves the device. The 90 SQLite tables covering conversations, tool outputs, scheduled tasks, and personal context are all encrypted at the field level using AES-256-GCM with a unique nonce per record. The master key is derived from the user's passphrase using Argon2id with parameters set to 3 iterations and 64MB memory, making brute-force attacks against a stolen database file computationally prohibitive. The 22 tool engines cover productivity (calendar, email, tasks, notes, files), communication (Slack, WhatsApp, SMS), finance (bank read-only feeds, expense tracking), research (web search, document analysis, arXiv), and developer tools (GitHub, terminal, code execution). Prompt injection defense runs a pre-execution classifier against every tool input, detecting 8 attack categories: instruction override, role-play escape, context poisoning, indirect injection via retrieved content, jailbreak prefix patterns, base64 encoded instructions, Unicode homoglyph substitution, and multi-turn accumulation attacks. Any input scoring above threshold is quarantined and flagged rather than executed.",
      results: [
        { metric: "Tool engines", value: "22" },
        { metric: "Encrypted tables", value: "90" },
        { metric: "Attack categories defended", value: "8" },
      ],
      reflection: "Building a security-first AI assistant forces you to confront a fundamental tension: security requires minimizing trust surface, but capability requires integrating more services and storing more context. The resolution is that encryption boundary placement is an architectural decision, not a feature -- and making it at the field level rather than the transport level changes the entire threat model.",
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
      problem: "Designing an agent swarm for a new task requires expert knowledge that most developers do not have: how many agents should there be, how tightly should they be coupled, should they run sequentially or in parallel, which coordination protocol fits the task structure. Getting this wrong means building a swarm that is either over-engineered (too many agents creating coordination overhead for a task that one agent could handle) or under-engineered (one agent trying to do everything serially when parallel specialists would be faster and more reliable). There is no systematic methodology for translating a task description into an optimal swarm architecture.",
      approach: "Built Forge as a meta-orchestrator that treats swarm design as its own optimization problem. The system was trained on 1,247 real project task descriptions, each labeled with the swarm architecture that achieved the best outcome. From this corpus, Forge learned a coupling score model: given a task description, it predicts the degree of interdependence between subtasks on a 0-1 scale. Coupling score below 0.3 triggers a parallel-independent architecture where agents work on disjoint subtasks simultaneously. Scores between 0.3 and 0.7 trigger a pipeline architecture with explicit handoff contracts. Scores above 0.7 trigger a tight-coupling architecture with shared state and synchronization points. Once the architecture is selected, Forge generates the agent role definitions, inter-agent contracts (using the Contract-First protocol), and launch configuration automatically -- then starts the swarm with a live dashboard tracking each agent's status, outputs, and error signals in real time. The system achieves 87-94% task success rate across the benchmark suite, with the variance explained by task novelty: tasks similar to the training corpus hit 94%, genuinely novel task structures hit 87%.",
      results: [
        { metric: "Success rate", value: "87-94%" },
        { metric: "Training projects", value: "1,247" },
        { metric: "Coordination modes", value: "3 (parallel / pipeline / tight)" },
      ],
      reflection: "Forge is the result of taking the meta-question seriously: if we are building systems to automate tasks, we should also automate the design of those systems. The coupling score concept emerged from analyzing failure cases -- most swarm failures were not execution failures but architecture mismatches, where the wrong coordination mode was chosen for the task's actual dependency structure.",
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
      problem: "Single-model LLM responses are limited by that model's training distribution, architectural biases, and blind spots. GPT-4o excels at structured reasoning but misses creative connections; Claude excels at nuanced ethical reasoning but can be overly cautious; Gemini handles multimodal context well but can drift on long chains. No single model dominates across all task types, yet most applications pick one model and use it for everything. The question is whether a multi-model pipeline inspired by how biological brains actually process information -- through specialized regions, cross-hemisphere deliberation, and memory consolidation -- can produce outputs that no single model could generate alone.",
      approach: "Designed a 5-phase cognitive pipeline where each phase is inspired by a distinct neuroscience concept and implemented as a coordinated multi-model step. Phase 1 (Cortical Processing) routes the input to the 2 models best suited for the task type based on a capability routing matrix, each producing an independent initial response. Phase 2 (Split-Brain Deliberation) runs the two responses through a structured debate protocol where each model critiques the other's output and produces a revised position -- mimicking the corpus callosum integration of left and right hemisphere processing. Phase 3 (Dreaming) introduces a controlled stochasticity step: a third model generates 5 associative variants that deliberately break from the converging consensus to surface non-obvious connections, analogous to REM sleep consolidation generating novel associations. Phase 4 (Evolutionary Breeding) applies a genetic algorithm metaphor: the best elements from phases 1-3 are recombined by a synthesis model into 3 candidate outputs, scored on a multi-criteria rubric, and the top candidate advances. Phase 5 (Immune Maturation) runs the winning candidate through a 3-model adversarial panel that stress-tests it for logical inconsistencies, factual errors, and missing considerations -- only outputs that survive all three challenges are returned. The full 5-phase pipeline across 6 models produces outputs with measurably higher complexity, accuracy, and creative novelty than single-model responses on the benchmark suite.",
      results: [
        { metric: "Pipeline phases", value: "5" },
        { metric: "Models coordinated", value: "6" },
        { metric: "Architecture", value: "Bio-inspired cognitive" },
      ],
      reflection: "The most surprising finding was that the Dreaming phase -- the one that looks least rigorous -- produced the highest lift on creative and open-ended tasks. Structured deliberation converges; deliberate stochasticity diverges. Both are necessary, and the biological brain figured this out long before we did. The lesson for AI system design is that diversity of approach is not a compromise -- it is a feature.",
    },
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
