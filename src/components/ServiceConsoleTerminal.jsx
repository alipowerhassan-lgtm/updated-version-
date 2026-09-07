import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Code,
  Smartphone,
  Bot,
  LayoutDashboard,
  Palette,
  Layers,
  Sparkles,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function ServiceConsoleTerminal({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('live'); // 'live' | 'arch' | 'logs'
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  const servicesConsoleData = [
    {
      id: 'web-dev',
      name: 'Web Development',
      cmd: 'volen deploy --service="web-development" --stack="react-nextjs-tailwind"',
      status: '200 OK • DEPLOYED',
      output: [
        '✔ Compiling Next.js 15 App Router & React 19 Server Components...',
        '✔ Optimizing Tailwind CSS JIT engine & dynamic layout math...',
        '✔ Edge CDN deployed: 14ms global latency • SEO score: 100/100',
        '➜ Output: Production-ready enterprise web application running live.'
      ],
      tag: 'Full-Stack Web',
      tech: ['React 19', 'Next.js', 'Tailwind', 'Node.js', 'Vite'],
      icon: <Code className="w-4 h-4 text-sky-400" />
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Engineering',
      cmd: 'volen build --target="ios-android" --framework="react-native"',
      status: 'BUILD SUCCESSFUL',
      output: [
        '✔ Compiling native Swift/Kotlin bridges & React Native runtime...',
        '✔ Biometric auth & offline sync storage initialized...',
        '✔ Published to Apple App Store & Google Play Store pipelines...',
        '➜ Output: 60 FPS ultra-responsive cross-platform mobile apps.'
      ],
      tag: 'iOS & Android',
      tech: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin'],
      icon: <Smartphone className="w-4 h-4 text-emerald-400" />
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      cmd: 'volen train --pipeline="llm-rag-agent" --vector-db="pinecone"',
      status: 'MODEL ACTIVE',
      output: [
        '✔ Connecting OpenAI / Claude API gateway & custom fine-tuned weights...',
        '✔ Ingesting enterprise document knowledge base into Vector DB...',
        '✔ Autonomous reasoning agent loop active with 99.8% precision...',
        '➜ Output: Automated intelligent enterprise decision agent live.'
      ],
      tag: 'AI Pipelines',
      tech: ['OpenAI API', 'Python', 'LangChain', 'Pinecone', 'PyTorch'],
      icon: <Bot className="w-4 h-4 text-purple-400" />
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      cmd: 'volen cluster --orchestrate="kubernetes-terraform-aws"',
      status: 'PROVISIONED',
      output: [
        '✔ Provisioning AWS Elastic Kubernetes Service (EKS) multi-region...',
        '✔ Terraform infrastructure-as-code applied: Zero-Downtime CI/CD...',
        '✔ Auto-scaling active: 100 to 1,000,000+ dynamic concurrent users...',
        '➜ Output: Rock-solid, resilient cloud infrastructure running.'
      ],
      tag: 'DevOps & AWS',
      tech: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions'],
      icon: <LayoutDashboard className="w-4 h-4 text-amber-400" />
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Pen Testing',
      cmd: 'volen audit --security="zero-trust" --compliance="iso27001"',
      status: 'SECURED • 0 THREATS',
      output: [
        '✔ Executing automated OWASP Top-10 penetration testing suite...',
        '✔ Enforcing AES-256 payload encryption & JWT zero-trust auth...',
        '✔ SOC-2 & ISO 27001 vulnerability audit complete: 0 vulnerabilities...',
        '➜ Output: Enterprise data fortress protected round-the-clock.'
      ],
      tag: 'Zero-Trust Sec',
      tech: ['AES-256', 'OAuth 2.0', 'Zero-Trust', 'Pen-Testing'],
      icon: <ShieldCheck className="w-4 h-4 text-red-400" />
    },
    {
      id: 'ui-ux',
      name: 'UI/UX & Product Design',
      cmd: 'volen render --design="glassmorphism-light-theme"',
      status: 'PIXEL PERFECT',
      output: [
        '✔ Ingesting Figma design tokens & micro-animations...',
        '✔ Accessible WCAG AAA contrast ratio & responsive layout grid...',
        '✔ Smooth 3D hardware-accelerated tilt cards & WebGL canvas...',
        '➜ Output: Visually stunning UI design system delivered.'
      ],
      tag: 'UI/UX Design',
      tech: ['Figma', 'Glassmorphism', 'Tailwind', 'Framing'],
      icon: <Palette className="w-4 h-4 text-pink-400" />
    }
  ];

  const currentService = servicesConsoleData[activeServiceIdx];

  // Typing effect loop
  useEffect(() => {
    let timer;
    if (!isPlaying) return;

    setIsTypingDone(false);
    setTypedText('');

    const targetCmd = currentService.cmd;
    let charIdx = 0;

    const typeInterval = setInterval(() => {
      if (charIdx <= targetCmd.length) {
        setTypedText(targetCmd.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(typeInterval);
        setIsTypingDone(true);

        // Auto advance to next service after 4 seconds if playing
        timer = setTimeout(() => {
          setActiveServiceIdx((prev) => (prev + 1) % servicesConsoleData.length);
        }, 4000);
      }
    }, 35);

    return () => {
      clearInterval(typeInterval);
      if (timer) clearTimeout(timer);
    };
  }, [activeServiceIdx, isPlaying]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-sky-500/30 shadow-2xl shadow-sky-950/40 text-slate-100 overflow-hidden font-mono text-xs sm:text-sm relative z-20">
      {/* --- TOP TERMINAL HEADER BAR --- */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4">
        {/* Mac Window Dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50"></div>
          <span className="text-slate-400 text-[11px] font-mono ml-2 hidden sm:inline-block">
            volen-solution-cli ~ (interactive service console v2.0)
          </span>
        </div>

        {/* Console Mode Tabs */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'live'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>Service Stream</span>
          </button>
          <button
            onClick={() => setActiveTab('arch')}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'arch'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'logs'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Live Telemetry</span>
          </button>
        </div>

        {/* Play / Pause Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause Service Loop' : 'Play Service Loop'}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* --- SERVICE SELECTION BUTTON STRIP --- */}
      <div className="bg-slate-900/60 border-b border-slate-800/80 px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none">
        <span className="text-[10px] uppercase font-bold text-slate-500 shrink-0">Services:</span>
        {servicesConsoleData.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setActiveServiceIdx(idx);
              setIsPlaying(false);
            }}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 border ${
              activeServiceIdx === idx
                ? 'bg-sky-500/20 text-sky-300 border-sky-400/40 shadow-xs'
                : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            {s.icon}
            <span>{s.name}</span>
          </button>
        ))}
      </div>

      {/* --- CONSOLE MAIN SCREEN AREA --- */}
      <div className="p-5 sm:p-6 min-h-[220px] flex flex-col justify-between space-y-4 bg-slate-950/90 relative">
        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none"></div>

        {activeTab === 'live' && (
          <div className="space-y-4 relative z-10">
            {/* Active Service Tag & Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1">
                  {currentService.icon}
                  <span>{currentService.name}</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                  {currentService.tag}
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                ● {currentService.status}
              </span>
            </div>

            {/* Command Line Input */}
            <div className="flex items-center gap-2 text-sky-300 font-mono text-xs sm:text-sm">
              <span className="text-emerald-400 font-bold">volen@production:~#</span>
              <span className="text-slate-100 font-mono">{typedText}</span>
              <span className={`w-2 h-4 bg-sky-400 ${isPlaying ? 'animate-pulse' : ''}`}></span>
            </div>

            {/* Terminal Output Lines */}
            {isTypingDone && (
              <div className="space-y-2 pt-2 animate-fadeIn">
                {currentService.output.map((line, lIdx) => (
                  <div
                    key={lIdx}
                    className={`flex items-start gap-2 font-mono text-xs sm:text-sm leading-relaxed ${
                      lIdx === currentService.output.length - 1
                        ? 'text-sky-300 font-bold pt-1'
                        : 'text-slate-300'
                    }`}
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                    <span>{line}</span>
                  </div>
                ))}

                {/* Tech Pills */}
                <div className="pt-3 flex flex-wrap items-center gap-2 border-t border-slate-900 mt-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Engineered With:</span>
                  {currentService.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-900 text-sky-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'arch' && (
          <div className="space-y-3 relative z-10 animate-fadeIn">
            <div className="text-xs font-bold text-sky-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Volen Solution Architecture Blueprint</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-sky-400 font-bold">1. Frontend Layer</div>
                <div className="text-slate-400 text-[11px]">React 19 • Next.js • Tailwind CSS • WebGL 3D Canvas</div>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-emerald-400 font-bold">2. AI & Backend</div>
                <div className="text-slate-400 text-[11px]">Node.js • Python AI reasoning • Vector DB RAG • GraphQL</div>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-purple-400 font-bold">3. Zero-Trust Sec</div>
                <div className="text-slate-400 text-[11px]">AES-256 payload encryption • AWS EKS Kubernetes • SOC-2</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="space-y-2 relative z-10 font-mono text-[11px] text-slate-300 animate-fadeIn">
            <div className="text-slate-500 pb-1 border-b border-slate-800">System Activity Telemetry Stream:</div>
            <div className="flex items-center justify-between text-emerald-400">
              <span>[2026-09-07T19:47Z] INFO: Global Node Pakistan HQ</span>
              <span>12ms Latency</span>
            </div>
            <div className="flex items-center justify-between text-sky-400">
              <span>[2026-09-07T19:47Z] INFO: US East Client Gateway</span>
              <span>34ms Latency</span>
            </div>
            <div className="flex items-center justify-between text-indigo-400">
              <span>[2026-09-07T19:47Z] INFO: UK London Financial Hub</span>
              <span>26ms Latency</span>
            </div>
            <div className="flex items-center justify-between text-teal-400">
              <span>[2026-09-07T19:47Z] INFO: KSA Vision 2030 Partner Hub</span>
              <span>18ms Latency</span>
            </div>
          </div>
        )}

        {/* --- FOOTER STATUS & ACTION BAR --- */}
        <div className="pt-3 border-t border-slate-900 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400 relative z-10">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Volen Solution Production CLI Active</span>
          </div>

          <button
            onClick={() => onSelectService && onSelectService(currentService.name)}
            className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Explore {currentService.name} Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
