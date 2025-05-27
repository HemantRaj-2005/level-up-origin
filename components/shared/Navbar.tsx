"use client"
import Link from "next/link"
import React, { useRef, useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// Define TypeScript interface for nav items
interface NavItem {
  name: string
  href: string
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { setTheme } = useTheme()

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  // Use ref and useInView for subtle animation on load
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-br from-gray-900/90 to-gray-800/90 dark:from-black/90 dark:to-gray-900/90 backdrop-blur-sm border-b border-gray-700 dark:border-gray-800" ref={ref}>
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center gap-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100 [text-shadow:_0_0_8px_rgba(255,255,255,0.3),_0_0_12px_rgba(59,130,246,0.2)] animate-[shine_4s_linear_infinite] bg-[length:200%_auto]">
            YourLogo
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * navItems.indexOf(item), ease: "easeOut" }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-400 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 [text-shadow:_0_0_4px_rgba(255,255,255,0.2),_0_0_8px_rgba(59,130,246,0.1)] animate-[glow_3s_ease-in-out_infinite] transition-colors duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="hidden sm:inline-flex bg-blue-700/20 dark:bg-blue-600/20 border-blue-600 dark:border-blue-500 text-blue-400 dark:text-blue-300 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 rounded-xl"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-800 dark:bg-gray-950 border-gray-700 dark:border-gray-800">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="text-gray-400 dark:text-gray-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:text-blue-400 dark:hover:text-blue-300"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="text-gray-400 dark:text-gray-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:text-blue-400 dark:hover:text-blue-300"
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="text-gray-400 dark:text-gray-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:text-blue-400 dark:hover:text-blue-300"
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden bg-blue-700/20 dark:bg-blue-600/20 text-blue-400 dark:text-blue-300 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isOpen && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "md:hidden absolute top-16 inset-x-0 px-6 pt-2 pb-4 space-y-2 bg-gradient-to-br from-gray-900/95 to-gray-800/95 dark:from-black/95 dark:to-gray-900/95 backdrop-blur-sm border-b border-gray-700 dark:border-gray-800",
          isOpen ? "block" : "hidden"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 dark:text-gray-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:text-blue-400 dark:hover:text-blue-300 [text-shadow:_0_0_4px_rgba(255,255,255,0.2),_0_0_8px_rgba(59,130,246,0.1)] animate-[glow_3s_ease-in-out_infinite] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div className="pt-2 border-t border-gray-700 dark:border-gray-800">
          <div className="flex flex-col space-y-2">
            <Button
              variant="ghost"
              className="justify-start text-gray-400 dark:text-gray-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:text-blue-400 dark:hover:text-blue-300 [text-shadow:_0_0_4px_rgba(255,255,255,0.2),_0_0_8px_rgba(59,130,246,0.1)] animate-[glow_3s_ease-in-out_infinite]"
              onClick={() => {
                setTheme("light")
                setIsOpen(false)
              }}
            >
              Light Theme
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-gray-400 dark:text-gray-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:text-blue-400 dark:hover:text-blue-300 [text-shadow:_0_0_4px_rgba(255,255,255,0.2),_0_0_8px_rgba(59,130,246,0.1)] animate-[glow_3s_ease-in-out_infinite]"
              onClick={() => {
                setTheme("dark")
                setIsOpen(false)
              }}
            >
              Dark Theme
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-gray-400 dark:text-gray-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:text-blue-400 dark:hover:text-blue-300 [text-shadow:_0_0_4px_rgba(255,255,255,0.2),_0_0_8px_rgba(59,130,246,0.1)] animate-[glow_3s_ease-in-out_infinite]"
              onClick={() => {
                setTheme("system")
                setIsOpen(false)
              }}
            >
              System Theme
            </Button>
          </div>
        </div>
      </motion.div>
      <style>{`
        @keyframes shine {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(59, 130, 246, 0.1);
          }
          50% {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(59, 130, 246, 0.3);
          }
        }
      `}</style>
    </header>
  )
}

export default Navbar
