"use client"
import React from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Users, Shield, Headphones } from "lucide-react"

// Define TypeScript interface for stats
interface Stat {
  value: string
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const PlatformStat: React.FC = () => {
  const stats: Stat[] = [
    { value: "10,000+", label: "Creators Helped", icon: Users },
    { value: "500%", label: "Average Growth", icon: TrendingUp },
    { value: "0", label: "Fake Followers", icon: Shield },
    { value: "24/7", label: "Expert Support", icon: Headphones },
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
            Our Impact
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-200 mt-4 max-w-2xl mx-auto animate-glow">
            Empowering creators with authentic growth and unparalleled support.
          </p>
        </motion.div>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-950/50 dark:to-black/50 border border-gray-700 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 dark:hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-purple-700/10 dark:from-blue-600/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-blue-700/20 dark:bg-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <stat.icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100 animate-shine mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 dark:text-gray-200 font-medium animate-glow">
                  {stat.label}
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

export default PlatformStat