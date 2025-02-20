"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navigation() {
  const menuItems = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm"
    >
      <Link href="/" className="text-2xl font-bold">
        Logo
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <ModeToggle />
      </nav>

      <Button className="md:hidden" variant="ghost" size="icon">
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </Button>
    </motion.header>
  )
}

