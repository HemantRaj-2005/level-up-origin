"use client"
import React, { Suspense, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'

// Define types for the component
interface HeroProps {
  videoUrl?: string
}

// Lazy load ReactPlayer with no SSR
const ReactPlayer = dynamic(
  () => import("react-player/lazy"),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full bg-gray-900 dark:bg-gray-950 rounded-2xl">
        <div className="animate-pulse rounded-2xl w-full h-full bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50" />
      </div>
    )
  }
)

const Hero: React.FC<HeroProps> = ({ videoUrl = "https://www.youtube.com/watch?v=2sktYwWIg40" }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { scrollY } = useScroll()
  const parallaxY1 = useTransform(scrollY, [0, 500], [0, -50])
  const parallaxY2 = useTransform(scrollY, [0, 500], [0, 50])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Darker animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-700/30 to-purple-700/30 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{ y: parallaxY1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-700/30 to-orange-700/30 dark:from-pink-600/30 dark:to-orange-600/30 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"
          style={{ y: parallaxY2 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 text-base font-semibold rounded-full bg-blue-700/20 dark:bg-blue-600/20 text-blue-400 dark:text-blue-300 shadow-md animate-pulse">
            🚀 Cutting-Edge Growth Strategies
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100 animate-shine">
            Amplify Your Reach
          </span>{" "}
          <TypeAnimation
            sequence={[
              'Organically',
              1500,
              'Authentically',
              1500,
              'Exponentially',
              1500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-300 dark:to-pink-300 animate-shine"
          />
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 dark:text-gray-200 max-w-3xl mx-auto mb-10 animate-glow"
        >
          Discover proven strategies to grow your audience with genuine engagement and lasting impact.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button 
            size="lg" 
            className="px-10 py-6 text-lg font-semibold bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl shadow-lg transform transition-transform hover:scale-105 relative overflow-hidden group"
            onClick={() => window.alert("Starting your growth journey!")}
          >
            <span className="relative z-10 animate-shine-text">Start Growing Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-700 dark:from-blue-700 dark:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-10 py-6 text-lg font-semibold border-2 border-blue-600 dark:border-blue-500 text-blue-400 dark:text-blue-300 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 rounded-xl transform transition-transform hover:scale-105 relative group"
            onClick={() => window.location.href = "/how-it-works"}
          >
            <span className="relative z-10 animate-shine-text">Explore How It Works</span>
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-500 rounded-xl transition-all duration-300" />
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-12 flex justify-center"
        >
          <div className="relative w-full max-w-4xl aspect-video bg-gray-900 dark:bg-gray-950 rounded-2xl border border-gray-800 dark:border-gray-900 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-purple-700/20 dark:from-blue-600/20 dark:to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              controls={true}
              playing={false}
              playIcon={
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-700/30 to-purple-700/30 dark:from-blue-600/30 dark:to-purple-600/30">
                  <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-700 dark:bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10 md:w-12 md:h-12 ml-1">
                      <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
                    </svg>
                  </button>
                </div>
              }
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    color: "white",
                  },
                },
              }}
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            />
          </div>
        </motion.div>
        
        {/* Enhanced floating elements with parallax */}
        <motion.div 
          style={{ y: parallaxY1 }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-12 w-8 h-8 rounded-full bg-blue-700/40 dark:bg-blue-600/40 blur-sm hidden md:block"
        />
        <motion.div 
          style={{ y: parallaxY2 }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
          className="absolute bottom-1/3 right-20 w-10 h-10 rounded-full bg-purple-700/40 dark:bg-purple-600/40 blur-sm hidden md:block"
        />
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
        .animate-shine-text {
          background: linear-gradient(90deg, #ffffff 0%, #3b82f6 50%, #ffffff 100%);
          background-size: 200% auto;
          background-clip: text;
          color: transparent;
          animation: shine 3s linear infinite;
          text-shadow: 0 0 4px rgba(255, 255, 255, 0.2);
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

export default Hero