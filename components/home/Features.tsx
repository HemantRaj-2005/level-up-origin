"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

// Define TypeScript interface for features
interface Feature {
  text: string
}

const Features: React.FC = () => {
  const features: Feature[] = [
    { text: "Audience analytics dashboard" },
    { text: "Content performance insights" },
    { text: "Optimal posting schedule" },
    { text: "Hashtag & SEO optimization" },
    { text: "Engagement growth strategies" },
    { text: "Competitor benchmarking" },
  ]

  // Use ref and useInView for scroll-triggered animations
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-blue-700/20 dark:bg-blue-600/20 text-blue-400 dark:text-blue-300"
                >
                  Powerful Features
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100">
                  Tools Designed for{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-300 dark:to-pink-300">
                    Creator Success
                  </span>
                </h2>
              </div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full bg-blue-700/20 dark:bg-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </motion.div>
                    <span className="text-lg font-medium text-gray-400 dark:text-gray-200 group-hover:text-blue-400 dark:group-hover:text-blue-300">
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-purple-700/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-2xl blur-2xl"
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-950/50 dark:to-black/50 rounded-2xl border border-gray-700 dark:border-gray-800 p-4 shadow-2xl group hover:shadow-blue-600/10 dark:hover:shadow-blue-500/10 transition-all duration-300">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 dark:bg-gray-950">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-blue-700/10 to-purple-700/10 dark:from-blue-600/10 dark:to-purple-600/10 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center text-gray-400 dark:text-gray-200">
                      <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100">
                        Analytics Dashboard
                      </h3>
                      <p className="text-sm mt-2">Interactive mockup of your growth tools</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features