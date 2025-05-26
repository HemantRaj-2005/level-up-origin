"use client"
import React, { Suspense, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'

// Lazy load ReactPlayer with no SSR
const ReactPlayer = dynamic(
  () => import("react-player/lazy"),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full bg-muted rounded-xl">
        <div className="animate-pulse rounded-xl w-full h-full bg-gradient-to-r from-muted-foreground/10 via-muted-foreground/20 to-muted-foreground/10" />
      </div>
    )
  }
)

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-muted/50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            🚀 New Growth Strategies
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Grow Your Audience
          </span>{" "}
          <TypeAnimation
            sequence={[
              'Organically',
              1500,
              'Authentically',
              1500,
              'Effectively',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary/50 via-purple-400 to-purple-600"
          />
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Authentic growth strategies for creators who want to build real
          engagement without shortcuts.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started Free</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-6 text-lg border-2 hover:bg-transparent hover:text-foreground relative group"
          >
            <span className="relative z-10">How It Works</span>
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-md transition-all duration-300"></span>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="relative w-full max-w-4xl aspect-video bg-muted rounded-xl border shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=2sktYwWIg40"
              width="100%"
              height="100%"
              controls={true}
              playing={false}
              playIcon={
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 md:w-10 md:h-10 ml-1">
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
                borderRadius: "0.75rem",
                overflow: "hidden",
              }}
            />
          </div>
        </motion.div>
        
        {/* Floating elements */}
        <motion.div 
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-primary/20 blur-sm hidden md:block"
        />
        <motion.div 
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-1/3 right-16 w-8 h-8 rounded-full bg-secondary/20 blur-sm hidden md:block"
        />
      </div>
    </section>
  )
}

export default Hero