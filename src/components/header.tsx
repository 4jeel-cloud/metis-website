"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-8 sm:pt-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-none border-2 border-[#ff0000] bg-white/95 px-5 py-4 shadow-[4px_4px_0_#ff0000] sm:px-6 sm:py-3">
        <div className="scan-line" />
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="black-font.png" alt="Metis" width={160} height={44} className="h-9 w-auto object-contain sm:h-8" priority />
          </Link>

          <nav className="hidden items-center md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-1.5 text-sm text-[#6b6b6b] transition-colors hover:text-[#ff0000]"
              >
                {item.label}
              </a>
            ))}
            <div className="mx-4 h-5 w-[2px] bg-[#e0dcd3]" />
            <a
              href="#contact"
              className="border-2 border-[#ff0000] bg-[#ff0000] px-5 py-1.5 text-sm font-semibold text-white shadow-[3px_3px_0_#cc0000] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#cc0000] active:shadow-none"
            >
              Start
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5 text-[#1a1a1a]" /> : <Menu className="h-5 w-5 text-[#1a1a1a]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-2 max-w-6xl border-2 border-[#ff0000] bg-white p-4 shadow-[4px_4px_0_#ff0000] md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[#e0dcd3] px-3 py-3 text-sm text-[#6b6b6b] transition-colors last:border-0 hover:text-[#ff0000]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 block border-2 border-[#ff0000] bg-[#ff0000] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-[3px_3px_0_#cc0000]"
            >
              Start a Project
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
