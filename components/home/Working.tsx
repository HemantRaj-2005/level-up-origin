"use client"
import React from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, LayoutDashboard, PenTool } from "lucide-react"

// Define TypeScript interface for process steps
interface ProcessStep {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const Working: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      icon: LayoutDashboard,
      title: "Strategy Analysis",
      description: "We analyze your current presence and create a customized growth plan.",
    },
    {
      icon: PenTool,
      title: "Content Optimization",
      description: "Learn what content performs best and how to create more of it.",
    },
    {
      icon: TrendingUp,
      title: "Organic Growth",
      description: "Implement techniques that attract real, engaged followers.",
    },
  ]

  // Use ref and useInView for scroll-triggered animations
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100 animate-shine">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-300 dark:to-pink-300">Proven</span> Process
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-200 mt-4 max-w-2xl mx-auto animate-glow">
            A strategic approach to skyrocket your audience growth with authenticity.
          </p>
        </motion.div>
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-950/50 dark:to-black/50 border border-gray-700 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 dark:hover:shadow-blue-500/10 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-purple-700/10 dark:from-blue-600/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10 flex flex-col">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-blue-700/20 dark:bg-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <step.icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100 animate-shine mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-200 animate-glow flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for shiny text effect */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 4s linear infinite;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.3), 0 0 12px rgba(59, 130, 246, 0.2);
        }
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(59, 130, 246, 0.1);
          }
          50% {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(59, 130, 246, 0.3);
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Working