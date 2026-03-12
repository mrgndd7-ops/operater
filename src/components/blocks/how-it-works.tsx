"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Bell, BookOpen, Bot, Brain, Calendar, ChevronDown, Cloud, Ghost, Github, Hash, Layers, LayoutDashboard, LayoutGrid, Mail, Minus, Plus, Puzzle, Search, Settings, Sparkles, SquareKanban, User, Zap } from "lucide-react"
import { FramerCarousel } from "@/components/ui/framer-carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

const Slide1 = () => (
  <div className="relative w-full min-h-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
    {/* Top glow */}
    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent pointer-events-none z-10" />
    {/* Bottom glow */}
    <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/10 via-white/[0.03] to-transparent pointer-events-none z-10" />

    <div className="p-8 flex flex-row items-center gap-16 pl-16">
      <div className="w-full max-w-[520px] flex-shrink-0">
        <Card className="p-6 gap-5 rounded-2xl border border-white/10 bg-[#0d0d0d]">
          <CardHeader className="gap-3 p-0 items-center text-center">
            <div className="flex flex-col gap-1 items-center">
              <h1 className="text-xl font-semibold text-white">Get started</h1>
              <p className="text-xs text-white/40">Set up your account and tell us about your company</p>
            </div>
          </CardHeader>

          <CardContent className="gap-4 p-0 flex flex-col">
            <div className="flex flex-col gap-3">
              <Label className="text-xs font-semibold text-white/70">Account</Label>
              <div className="flex gap-3">
                <div className="flex flex-col gap-1.5 flex-1">
                  <Label className="text-[11px] text-white/40">Full name</Label>
                  <Input className="h-9 rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <Label className="text-[11px] text-white/40">Work email</Label>
                  <Input className="h-9 rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-[11px] text-white/40">Password</Label>
                <Input className="h-9 rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="Create a password" type="password" />
              </div>
            </div>

            <Separator className="bg-white/10" />

            <div className="flex flex-col gap-3">
              <Label className="text-xs font-semibold text-white/70">Company details</Label>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Label className="text-[11px] text-white/40">Company name</Label>
                  <Badge className="text-[9px] px-1.5 py-0 h-4 font-normal rounded-full bg-white/10 text-white/40 border-0">Required</Badge>
                </div>
                <Input className="h-9 rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="Your company name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Label className="text-[11px] text-white/40">Company website</Label>
                  <Badge className="text-[9px] px-1.5 py-0 h-4 font-normal rounded-full bg-white/10 text-white/40 border-0">Required</Badge>
                </div>
                <Input className="h-9 rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="www.yourcompany.com" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Label className="text-[11px] text-white/40">Company description</Label>
                  <Badge className="text-[9px] px-1.5 py-0 h-4 font-normal rounded-full bg-white/10 text-white/40 border-0">Required</Badge>
                </div>
                <Textarea className="min-h-[72px] resize-none rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="What does your company do? Who are your customers?" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-0">
            <Button className="w-full h-10 font-medium text-sm rounded-lg bg-white text-black hover:bg-white/90">
              Continue
            </Button>
          </CardFooter>
        </Card>
      </div>

      <h2
        className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <span className="font-bold text-white">1. One setup</span><br />
        <span className="font-light text-white/70">Agents that actually</span><br />
        <span className="font-light text-white/70">know your business</span>
      </h2>
    </div>
  </div>
)

const Slide2 = () => (
  <div className="relative w-full min-h-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
    {/* Top glow */}
    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent pointer-events-none z-10" />
    {/* Bottom glow */}
    <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/10 via-white/[0.03] to-transparent pointer-events-none z-10" />

    <div className="p-8 flex flex-row items-center gap-16 pl-16">
      {/* Single container with two panels */}
      <Card className="p-0 rounded-2xl border border-white/10 bg-[#0d0d0d] flex-shrink-0 overflow-hidden" style={{ width: '520px', minHeight: '680px' }}>
        <div className="flex" style={{ minHeight: '680px' }}>
          {/* Left panel — Invite team */}
          <div className="flex-1 p-6 flex flex-col gap-4 min-w-0">
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-white">Invite team members</h2>
              <p className="text-xs text-white/40">Collaborate inside your Space.</p>
            </div>
            <div className="flex gap-2">
              <Input className="h-8 flex-1 rounded-lg bg-black text-white border-white/10 text-xs placeholder:text-white/20" placeholder="colleague@co..." type="email" />
              <Button className="h-8 px-3 text-xs rounded-lg bg-white text-black hover:bg-white/90 flex-shrink-0">Add</Button>
            </div>
            <Separator className="bg-white/10" />
            <p className="text-[10px] text-white/30 uppercase tracking-widest">Team members</p>
            <div className="flex flex-col gap-3">
              {[
                { initials: 'SM', name: 'Sarah Mitchell', email: 'sarah@company.com', role: 'Admin' },
                { initials: 'JC', name: 'James Chen', email: 'james@company.com', role: 'Member' },
                { initials: 'AL', name: 'Amy Liu', email: 'amy@company.com', role: 'Member' },
              ].map((member) => (
                <div key={member.email} className="flex items-center gap-2.5 p-3 rounded-lg bg-black/40">
                  <div className="size-7 flex items-center justify-center text-xs font-medium rounded-full bg-white/10 text-white flex-shrink-0">{member.initials}</div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-xs font-medium text-white truncate">{member.name}</span>
                    <span className="text-[10px] text-white/30 truncate">{member.email}</span>
                  </div>
                  <span className="text-[10px] text-white/40 bg-white/10 px-2 py-0.5 rounded-full flex-shrink-0">{member.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="w-px bg-white/10 self-stretch" />

          {/* Right panel — LLM selection */}
          <div className="flex-1 p-6 flex flex-col min-w-0">
            <div className="flex flex-col gap-1 mb-4">
              <h2 className="text-sm font-semibold text-white">Select your AI model</h2>
              <p className="text-xs text-white/40">Powers your agents. Change anytime.</p>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              {[
                { icon: <Sparkles className="size-4 text-white" />, name: 'Claude', provider: 'Anthropic', desc: 'Advanced reasoning for complex tasks.', selected: true },
                { icon: <Zap className="size-4 text-white" />, name: 'GPT-4o', provider: 'OpenAI', desc: 'Fast multimodal general-purpose model.', selected: false },
                { icon: <Brain className="size-4 text-white" />, name: 'Gemini', provider: 'Google', desc: 'Large context, broad knowledge.', selected: false },
              ].map((model) => (
                <div key={model.name} className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer ${model.selected ? 'border-white/60 bg-white/5' : 'border-white/10 bg-black/30'}`}>
                  <div className="size-7 flex items-center justify-center flex-shrink-0 rounded-lg bg-white/10">{model.icon}</div>
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-white">{model.name}</span>
                      <Badge className="text-[9px] px-1.5 py-0 h-4 font-normal rounded-full bg-white/10 text-white/40 border-0">{model.provider}</Badge>
                    </div>
                    <p className="text-[10px] text-white/30 leading-relaxed">{model.desc}</p>
                  </div>
                  <div className={`size-4 rounded-full border flex-shrink-0 mt-0.5 flex items-center justify-center ${model.selected ? 'border-white' : 'border-white/20'}`}>
                    {model.selected && <div className="size-2 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
              <div className="flex items-center px-3 py-2.5 rounded-xl border border-dashed border-white/10">
                <span className="text-[10px] text-white/30">+ Llama, Mistral, DeepSeek and more available</span>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button className="h-9 px-4 text-xs rounded-lg bg-white text-black hover:bg-white/90 flex items-center gap-1.5">
                Continue <ArrowRight className="size-3" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Right side text */}
      <h2
        className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <span className="font-bold text-white">2. Your Team, Your AI</span><br />
        <span className="font-light text-white/70">Operater builds the rest around both</span>
      </h2>
    </div>
  </div>
)

const TOOLS = [
  { icon: <SquareKanban className="size-4 text-white" />, name: 'Jira', status: 'connected' },
  { icon: <Hash className="size-4 text-white" />, name: 'Slack', status: 'connected' },
  { icon: <Github className="size-4 text-white" />, name: 'GitHub', status: 'connected' },
  { icon: <BookOpen className="size-4 text-white" />, name: 'Notion', status: 'disconnected' },
  { icon: <Mail className="size-4 text-white" />, name: 'Gmail', status: 'approval' },
  { icon: <Calendar className="size-4 text-white" />, name: 'Google Calendar', status: 'disconnected' },
  { icon: <Minus className="size-4 text-white" />, name: 'Linear', status: 'approval' },
  { icon: <Cloud className="size-4 text-white" />, name: 'AWS', status: 'disconnected' },
]

const Slide3 = () => (
  <div className="relative w-full min-h-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
    {/* Top glow */}
    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent pointer-events-none z-10" />
    {/* Bottom glow */}
    <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/10 via-white/[0.03] to-transparent pointer-events-none z-10" />

    <div className="p-8 flex flex-row items-center gap-16 pl-16">
      <div className="w-full max-w-[520px] flex-shrink-0">
        <Card className="p-6 gap-5 rounded-2xl border border-white/10 bg-[#0d0d0d] flex flex-col">
          {/* Agent identity */}
          <CardHeader className="gap-1.5 p-0">
            <h2 className="text-sm font-semibold text-white">Agent identity</h2>
          </CardHeader>
          <CardContent className="gap-3 p-0 flex flex-col">
            <div className="flex gap-3">
              <div className="flex flex-col gap-1.5 flex-1">
                <Label className="text-[11px] text-white/40">Agent name</Label>
                <Input className="h-9 rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="e.g. Sprint Sentinel" />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <Label className="text-[11px] text-white/40">Role</Label>
                <Input className="h-9 rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="e.g. Engineering Ops" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-1.5 flex-1">
                <Label className="text-[11px] text-white/40">Job description</Label>
                <Textarea className="min-h-[60px] resize-none rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="Describe what this agent should do..." />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <Label className="text-[11px] text-white/40">KPIs & success metrics</Label>
                <Textarea className="min-h-[60px] resize-none rounded-lg bg-black text-white border-white/10 text-sm placeholder:text-white/20" placeholder="e.g. Reduce sprint blockers by 30%..." />
              </div>
            </div>
          </CardContent>

          <Separator className="bg-white/10" />

          {/* Connect tools */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-sm font-semibold text-white">Connect tools</h2>
              <p className="text-xs text-white/40">Integrate services your agent needs.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/40 border border-white/10">
                  <div className="size-7 flex items-center justify-center flex-shrink-0 rounded-lg bg-white/10">{tool.icon}</div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-xs font-medium text-white truncate">{tool.name}</span>
                    <span className={`text-[10px] ${tool.status === 'connected' ? 'text-green-400' : tool.status === 'approval' ? 'text-red-400' : 'text-white/30'}`}>
                      {tool.status === 'connected' ? 'Connected' : tool.status === 'approval' ? 'Requires approval' : 'Not connected'}
                    </span>
                  </div>
                  <Switch checked={tool.status === 'connected'} className="flex-shrink-0 scale-75" />
                </div>
              ))}
            </div>
            <div className="flex items-center px-3 py-2 rounded-xl border border-dashed border-white/10">
              <span className="text-[10px] text-white/30">+ HubSpot, Salesforce, Zapier and 50+ more available</span>
            </div>
          </div>

          <CardFooter className="p-0">
            <Button className="w-full h-10 font-medium text-sm rounded-lg bg-white text-black hover:bg-white/90 flex items-center gap-2">
              Activate agent <ArrowRight className="size-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <h2
        className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <span className="font-bold text-white">3. A teammate</span><br />
        <span className="font-light text-white/70">Define its identity, assign its</span><br />
        <span className="font-light text-white/70">responsibilities, and connect its tools</span>
      </h2>
    </div>
  </div>
)

const Slide4 = () => (
  <div className="relative w-full min-h-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
    {/* Top glow */}
    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent pointer-events-none z-10" />
    {/* Bottom glow */}
    <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/10 via-white/[0.03] to-transparent pointer-events-none z-10" />

    <div className="p-8 flex flex-row items-center gap-16 pl-16">
      {/* Dashboard mockup — 520px, same as other slides */}
      <div className="flex-shrink-0 rounded-xl overflow-hidden border border-white/10" style={{ width: '520px', minHeight: '680px', display: 'flex', backgroundColor: 'oklch(0.145 0 0)' }}>
        {/* LEFT SIDEBAR */}
        <aside className="flex flex-col justify-between border-r border-white/[0.06] flex-shrink-0" style={{ width: '160px', backgroundColor: 'oklch(0.12 0 0)' }}>
          <div>
            <div className="flex items-center gap-2 p-4 pb-3">
              <div className="size-6 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <Ghost className="size-3.5 text-white" />
              </div>
              <span className="font-semibold text-xs text-white tracking-tight">Operater</span>
            </div>
            <div className="px-3 pb-3">
              <button className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-1.5">
                  <Layers className="size-3 text-white/50" />
                  <span className="text-[11px] text-white/90">Product Core</span>
                </div>
                <ChevronDown className="size-3 text-white/50" />
              </button>
            </div>
            <nav className="flex flex-col gap-0.5 px-2">
              {[
                { icon: <LayoutDashboard className="size-3" />, label: 'Dashboard', active: true },
                { icon: <Bell className="size-3" />, label: 'Notifications', active: false },
                { icon: <BarChart3 className="size-3" />, label: 'Analytics', active: false },
                { icon: <Puzzle className="size-3" />, label: 'Tool Integrations', active: false },
                { icon: <Settings className="size-3" />, label: 'Settings', active: false },
              ].map((item) => (
                <a key={item.label} className={`flex items-center gap-2 px-2.5 py-2 text-[11px] rounded-lg cursor-pointer ${item.active ? 'font-medium text-white' : 'text-white/50'}`} style={item.active ? { backgroundColor: 'rgba(255,255,255,0.08)' } : {}}>
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="p-3 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 px-1 py-1">
              <div className="size-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <User className="size-3 text-white/50" />
              </div>
              <span className="text-[9px] text-white/40 truncate">alex@operater.io</span>
            </div>
          </div>
        </aside>

        {/* MIDDLE */}
        <main className="flex flex-col overflow-hidden" style={{ width: '196px' }}>
          <div className="flex-1 flex flex-col p-4">
            <h1 className="text-[11px] font-semibold text-white mb-0.5">Space Command Center</h1>
            <p className="text-[9px] text-white/40 mb-3">Manage agents and workspace</p>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg mb-3" style={{ backgroundColor: 'oklch(0.205 0 0)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Search className="size-3 text-white/40 flex-shrink-0" />
              <span className="text-[10px] text-white/30">Search agents...</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {[
                { icon: <Plus className="size-3.5 text-white" />, title: 'Create Agent', desc: 'Deploy a new AI agent to automate tasks and workflows.', cta: 'Get Started' },
                { icon: <Layers className="size-3.5 text-white" />, title: 'Product Core', desc: 'Primary workspace for product operations and intelligence.', cta: 'View Space' },
              ].map((card) => (
                <div key={card.title} className="p-3 rounded-lg flex flex-col gap-1.5" style={{ backgroundColor: 'oklch(0.205 0 0)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-1.5">
                    <div className="size-6 flex items-center justify-center rounded-md flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-white">{card.title}</span>
                  </div>
                  <p className="text-[9px] text-white/40 leading-relaxed">{card.desc}</p>
                  <button className="flex items-center gap-1 text-[10px] text-white/60 px-2 py-1 rounded-md self-start" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {card.cta} <ArrowRight className="size-2.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2.5 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ backgroundColor: 'oklch(0.205 0 0)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="size-4 flex items-center justify-center rounded-md flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <Ghost className="size-2.5 text-white" />
              </div>
              <span className="text-[9px] text-white/25">Tell Operater what to do...</span>
            </div>
          </div>
        </main>

        {/* RIGHT PANEL */}
        <aside className="flex flex-col border-l border-white/[0.06] flex-shrink-0" style={{ width: '164px', backgroundColor: 'oklch(0.12 0 0)' }}>
          <div className="p-3 flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-2">
              <h2 className="text-[11px] font-semibold text-white">AI Agents</h2>
              <div className="flex flex-col">
                <div className="flex items-center justify-between px-1.5 py-1 border-b border-white/[0.06]">
                  <span className="text-[9px] text-white/40">Name</span>
                  <span className="text-[9px] text-white/40">Status</span>
                </div>
                {['Automators', 'Senes Coord.', 'Release Coord.'].map((name) => (
                  <div key={name} className="flex items-center justify-between px-1.5 py-2 border-b border-white/[0.04]">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="size-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                        <Bot className="size-2.5 text-white/50" />
                      </div>
                      <span className="text-[10px] text-white truncate">{name}</span>
                    </div>
                    <Badge className="text-[8px] font-medium px-1 py-0 h-3.5 rounded-full border-0 flex-shrink-0" style={{ backgroundColor: 'rgba(34,197,94,0.12)', color: 'rgb(74,222,128)' }}>
                      Active
                    </Badge>
                  </div>
                ))}
              </div>
              <button className="w-full py-1 text-[10px] font-medium rounded-md flex items-center justify-center gap-1" style={{ backgroundColor: 'rgba(255,255,255,0.88)', color: '#111' }}>
                <Plus className="size-2.5" /> Create agent
              </button>
            </div>

            <div className="border-t border-white/[0.06]" />

            <div className="flex flex-col gap-2">
              <h2 className="text-[11px] font-semibold text-white">Team</h2>
              {[
                { initials: 'SM', name: 'Sarah Mitchell', role: 'Admin' },
                { initials: 'JC', name: 'James Chen', role: 'Member' },
                { initials: 'AL', name: 'Amy Liu', role: 'Member' },
              ].map((member) => (
                <div key={member.name} className="flex items-center gap-1.5 px-1.5 py-1.5 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                  <div className="size-5 rounded-full flex items-center justify-center text-[8px] font-semibold text-white flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                    {member.initials}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[10px] font-medium text-white truncate">{member.name}</span>
                    <div className="flex items-center gap-1">
                      <span className="size-1 rounded-full bg-green-400 inline-block" />
                      <span className="text-[8px] text-white/40">Active</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Right side text */}
      <h2
        className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <span className="font-bold text-white">4. Your Space</span><br />
        <span className="font-light text-white/70">Your command center,</span><br />
        <span className="font-light text-white/70">fully operational</span>
      </h2>
    </div>
  </div>
)

const slides = [
  { id: 1, content: <Slide1 /> },
  { id: 2, content: <Slide2 /> },
  { id: 3, content: <Slide3 /> },
  { id: 4, content: <Slide4 /> },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/70 text-center tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          How it <span className="font-bold text-white">works</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
        >
          <FramerCarousel slides={slides} />
        </motion.div>
      </div>
    </section>
  )
}
