"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Define TypeScript interface for component props (optional for future extensibility)
interface CTAsectionProps {
  // Add props if needed in the future
}

const CTAsection: React.FC<CTAsectionProps> = () => {
  // Use ref and useInView for scroll-triggered animations
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Enhanced background orbs with parallax effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-80 h-80 bg-blue-700/20 dark:bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700/20 dark:bg-purple-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block mb-4 px-5 py-2 text-sm font-semibold bg-blue-700/20 dark:bg-blue-600/20 text-blue-400 dark:text-blue-300 rounded-full backdrop-blur-sm animate-pulse"
        >
          Start Growing Today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100 [text-shadow:_0_0_8px_rgba(255,255,255,0.3),_0_0_12px_rgba(59,130,246,0.2)] animate-[shine_4s_linear_infinite] bg-[length:200%_auto]"
        >
          Unlock Your Growth <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-300 dark:to-pink-300">
            The Authentic Way
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-gray-400 dark:text-gray-200 mb-10 [text-shadow:_0_0_4px_rgba(255,255,255,0.2),_0_0_8px_rgba(59,130,246,0.1)] animate-[glow_3s_ease-in-out_infinite]"
        >
          Join thousands of creators who are scaling sustainably. No gimmicks. Just results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="px-10 py-6 text-lg font-semibold bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl shadow-lg transform transition-transform hover:scale-105 relative overflow-hidden group"
            onClick={() => window.alert("Starting your free trial!")}
          >
            <span className="relative z-10 [text-shadow:_0_0_4px_rgba(255,255,255,0.2)] animate-[shine_3s_linear_infinite] bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 bg-[length:200%_auto]">
              Start Your Free Trial
            </span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-700 dark:from-blue-700 dark:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-6 text-lg font-semibold border-2 border-blue-600 dark:border-blue-500 text-blue-400 dark:text-blue-300 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 rounded-xl transform transition-transform hover:scale-105 relative group"
            onClick={() => window.location.href = "/demo"}
          >
            <span className="relative z-10 [text-shadow:_0_0_4px_rgba(255,255,255,0.2)] animate-[shine_3s_linear_infinite] bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500 bg-[length:200%_auto]">
              Schedule a Demo
            </span>
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-500 rounded-xl transition-all duration-300" />
          </Button>
        </motion.div>
      </div>
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
    </section>
  )
}

export default CTAsection
