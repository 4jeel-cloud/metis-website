"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowRight, Database, ShoppingCart, Monitor, Users, Sparkle, Wrench } from "lucide-react"

const services = [
  { title: "Metis ERP", desc: "Open-source ERP for SMEs — accounting, inventory, HR, CRM, manufacturing, and more.", icon: Database },
  { title: "Metis POS", desc: "Point of sale — web-based or fully offline desktop app. Stock, invoicing, barcodes, and multi-user.", icon: ShoppingCart },
  { title: "Metis CRM", desc: "Free & open-source Laravel CRM for complete customer lifecycle management. WhatsApp & VoIP ready.", icon: Users },
  { title: "Custom Solutions", desc: "Tailored business software built on modern stacks — Laravel, Filament, Vue, and React.", icon: Wrench },
]

const work = [
  { title: "Metis ERP", logo: "service-logos/logo-light-metis-erp.png" },
  { title: "Metis CRM", logo: "service-logos/metis-crm-white-logo.png" },
  { title: "Metis POS", logo: "service-logos/metis-pos-logo-white.png" },
  { title: "Metis POS Desktop", logo: "service-logos/metis-pos-logo-white.png" },
]

const stats = [
  { v: "200+", l: "Projects" },
  { v: "50+", l: "Team" },
  { v: "12", l: "Countries" },
  { v: "99%", l: "Retention" },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionDivider() {
  return (
    <div className="relative px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid-divider-thick" />
      </div>
    </div>
  )
}

function PixelDiamond({ className, size = 12 }: { className?: string; size?: number }) {
  return (
    <div
      className={`${className} pixel-float`}
      style={{
        width: size,
        height: size,
        background: "#ff0000",
        transform: "rotate(45deg)",
        opacity: 0.2,
      }}
    />
  )
}

function PixelGrid({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 opacity-[0.04] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 0, 0, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 0, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
      }}
    />
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border-2 border-[#ff0000] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff0000]">
      {children}
    </span>
  )
}

function SectionLine() {
  return <div className="mt-3 h-1 w-12 bg-[#ff0000]" />
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 text-[32px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[48px]">
      {children}
    </h2>
  )
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[100dvh] flex-col px-5 pt-16 pb-12 sm:px-8 sm:pt-20 lg:pt-24">
        <PixelGrid className="hidden md:block" />
        <PixelDiamond className="absolute right-[15%] top-[20%] h-8 w-8" size={32} />
        <PixelDiamond className="absolute left-[8%] top-[55%] h-5 w-5" size={20} />
        <PixelDiamond className="absolute right-[20%] bottom-[25%] h-3 w-3" size={12} />


        <div className="absolute left-0 right-0 top-0 h-px bg-[#ff0000]/20" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Image src="black-font.png" alt="Metis" width={524} height={476} className="mb-4 h-10 w-auto object-contain sm:mb-6 sm:h-14" priority />
            </motion.div>

            <motion.span
              className="mb-3 inline-flex items-center gap-2 border-2 border-[#ff0000] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff0000]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Sparkle className="h-3 w-3" /> Est. 2026
            </motion.span>

            <h1 className="max-w-4xl text-[clamp(2.2rem,9vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.04em]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                We build the
              </motion.span>
              <motion.span
                className="block text-[#ff0000]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                invisible
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                infrastructure.
              </motion.span>
            </h1>

            <motion.p
              className="mt-4 max-w-xl text-base leading-[1.6] text-[#6b6b6b] sm:mt-5 sm:text-lg sm:leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              Open-source business software. ERP, POS, and custom solutions built for real-world operations.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 border-2 border-[#ff0000] bg-[#ff0000] px-7 py-3 text-sm font-semibold text-white shadow-[4px_4px_0_#cc0000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#cc0000] active:shadow-none"
              >
                Our Products <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] px-7 py-3 text-sm font-semibold text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1a1a1a] active:shadow-none"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Stats ── */}
      <section className="relative overflow-hidden border-b-4 border-[#ff0000] bg-[#ff0000] px-5 py-16 sm:px-8">
        <PixelGrid className="opacity-[0.1]" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl font-bold text-white sm:text-5xl">{s.v}</div>
              <div className="mt-2 text-sm text-white/60">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="relative px-5 py-14 sm:px-8 md:py-20 lg:py-28">
        <PixelGrid />
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <SectionLabel>Services</SectionLabel>
            <SectionLine />
            <SectionHeading>
              Software that runs your <span className="text-[#ff0000]">business</span>.
            </SectionHeading>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <FadeUp key={s.title} delay={i * 0.08}>
                  <div className="group relative flex h-full flex-col border-2 border-[#1a1a1a] bg-white p-6 shadow-[4px_4px_0_#ff0000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#ff0000] sm:p-8">
                    <div className="corner-brackets">
                      <Icon className="mb-4 h-6 w-6 text-[#ff0000]" />
                    </div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <div className="my-4 h-[2px] w-8 bg-[#ff0000]" />
                    <p className="flex-1 text-sm leading-[1.7] text-[#6b6b6b]">{s.desc}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Work ── */}
      <section id="work" className="relative overflow-hidden px-5 py-14 sm:px-8 md:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ff0000,#990000)]" />
        <PixelGrid className="opacity-[0.08]" />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp>
            <span className="inline-block border-2 border-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Selected Work
            </span>
            <div className="mt-3 h-1 w-12 bg-white" />
            <h2 className="mt-8 max-w-2xl text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[48px]">
              Our <span>products.</span>
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {work.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.1}>
                <a href="#" className="flex flex-col items-center gap-3">
                    <Image
                      src={p.logo}
                      alt={p.title}
                      width={524}
                      height={476}
                      className="h-28 w-auto border-2 border-white object-contain opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 sm:h-32"
                    />
                  <span className="text-xs font-semibold tracking-wider text-white/50">
                    {p.title}
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── About ── */}
      <section id="about" className="relative px-5 py-14 sm:px-8 md:py-20 lg:py-28">
        <PixelGrid />
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeUp>
              <SectionLabel>About</SectionLabel>
              <SectionLine />
              <SectionHeading>
                Craft over <span className="text-[#ff0000]">chaos.</span>
              </SectionHeading>
              <p className="mt-6 text-base leading-[1.8] text-[#6b6b6b]">
                Metis builds open-source business software that actually works. From ERP systems
                that handle accounting, inventory, and HR, to POS solutions that run entirely offline —
                we make tools that small and medium businesses rely on every day.
              </p>
              <ul className="mt-8 space-y-4 border-l-4 border-[#ff0000] pl-5">
                {["Open-source ERP with modular plugin system", "CRM with WhatsApp & VoIP integrations", "POS — web-based and offline desktop"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm leading-[1.6] text-[#6b6b6b]">
                    <span className="h-2 w-2 shrink-0 bg-[#ff0000]" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="relative border-2 border-[#1a1a1a] bg-white p-6 shadow-[6px_6px_0_#ff0000] sm:p-10">
                <div className="corner-brackets">
                  <div className="absolute -top-3 -right-3 border-2 border-[#ff0000] bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#ff0000]">
                    Philosophy
                  </div>
                  <p className="text-lg leading-[1.8] italic text-[#4a4a4a]">
                    &ldquo;Business software shouldn&apos;t get in the way. We build tools that are
                    powerful enough for enterprise, simple enough for anyone.&rdquo;
                  </p>
                  <div className="mt-8 h-px w-full bg-[#e0dcd3]" />
                  <p className="mt-5 text-sm font-semibold text-[#ff0000]">
                    — Metis Studio Philosophy
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Contact ── */}
      <section id="contact" className="relative px-5 py-14 sm:px-8 md:py-20 lg:py-28">
        <div className="mx-auto max-w-xl">
          <FadeUp>
            <div className="text-center">
              <SectionLabel>Contact</SectionLabel>
              <SectionLine />
              <SectionHeading>
                Have an idea? <span className="text-[#ff0000]">Tell us.</span>
              </SectionHeading>
              <p className="mt-4 text-sm text-[#6b6b6b]">
                Need a custom ERP or POS setup? We&apos;ll get back within 24 hours.
              </p>
            </div>
          </FadeUp>

          <form onSubmit={(e) => e.preventDefault()} className="mt-12 space-y-6 text-left">
            <div className="grid gap-6 sm:grid-cols-2">
              <FadeUp delay={0.05}>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Name</label>
                <input type="text" className="mt-2 w-full border-2 border-[#1a1a1a] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#ff0000] focus:shadow-[3px_3px_0_#ff0000]" placeholder="Your name" />
              </FadeUp>
              <FadeUp delay={0.1}>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Email</label>
                <input type="email" className="mt-2 w-full border-2 border-[#1a1a1a] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#ff0000] focus:shadow-[3px_3px_0_#ff0000]" placeholder="you@example.com" />
              </FadeUp>
            </div>
            <FadeUp delay={0.15}>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Message</label>
              <textarea rows={4} className="mt-2 w-full resize-none border-2 border-[#1a1a1a] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#ff0000] focus:shadow-[3px_3px_0_#ff0000]" placeholder="Tell us about your project..." />
            </FadeUp>
            <FadeUp delay={0.2}>
              <button
                type="submit"
                className="w-full border-2 border-[#ff0000] bg-[#ff0000] px-6 py-3.5 text-sm font-bold text-white shadow-[4px_4px_0_#cc0000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#cc0000] active:shadow-none"
              >
                Send Message
              </button>
            </FadeUp>
          </form>
        </div>
      </section>

      <SectionDivider />

      {/* ── Footer ── */}
      <footer className="relative overflow-hidden border-t-4 border-[#ff0000] bg-[#1a1a1a] px-5 py-14 sm:px-8 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp>
            <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
              <Image src="white-font.png" alt="Metis" width={524} height={476} className="h-9 w-auto object-contain" />
              <div className="flex gap-10 text-sm">
                <a href="#" className="text-white/50 transition-colors hover:text-white">Twitter</a>
                <a href="#" className="text-white/50 transition-colors hover:text-white">GitHub</a>
                <a href="#" className="text-white/50 transition-colors hover:text-white">LinkedIn</a>
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-center">
              <p className="text-sm text-white/30">
                &copy; {new Date().getFullYear()} Metis. All rights reserved.
              </p>
            </div>
          </FadeUp>
        </div>
      </footer>
    </>
  )
}
