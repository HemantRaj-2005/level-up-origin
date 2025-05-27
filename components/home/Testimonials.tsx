"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Define TypeScript interface for testimonials
interface Testimonial {
  name: string
  handle: string
  image: string
  quote: string
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      handle: "@sarahj",
      image: "/images/testimonials/sarah.jpg",
      quote: "This platform helped me grow from 1k to 50k followers in just 3 months with completely organic strategies. The analytics are mind-blowing!",
    },
    {
      name: "Mike Chen",
      handle: "@mikechen",
      image: "/images/testimonials/mike.jpg",
      quote: "The content optimization tools are game-changing. I've seen a 300% increase in engagement since I started using them.",
    },
    {
      name: "Emma Rodriguez",
      handle: "@emmarod",
      image: "/images/testimonials/emma.jpg",
      quote: "Finally, a platform that focuses on real growth instead of fake metrics. My audience engagement has never been better!",
    },
    {
      name: "David Wilson",
      handle: "@davidw",
      image: "/images/testimonials/david.jpg",
      quote: "The scheduling features saved me 10+ hours per week. Now I can focus on creating quality content while the platform handles the rest.",
    },
    {
      name: "Priya Patel",
      handle: "@priyap",
      image: "/images/testimonials/priya.jpg",
      quote: "As a small creator, the growth strategies helped me compete with established accounts. My follower count tripled in 2 months!",
    },
    {
      name: "Liam Nguyen",
      handle: "@liamn",
      image: "/images/testimonials/liam.jpg",
      quote: "The hashtag optimization tool boosted my post visibility by 400%. It's like having a personal marketing team!",
    },
    {
      name: "Aisha Khan",
      handle: "@aishak",
      image: "/images/testimonials/aisha.jpg",
      quote: "The competitor benchmarking feature gave me insights to outpace my niche rivals. My content now reaches the right audience!",
    },
    {
      name: "Carlos Mendes",
      handle: "@carlosm",
      image: "/images/testimonials/carlos.jpg",
      quote: "The analytics dashboard is so intuitive. I can track my growth in real-time and adjust my strategy instantly.",
    },
  ]

  // Use ref and useInView for scroll-triggered animations
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-blue-700/20 dark:bg-blue-600/20 text-blue-400 dark:text-blue-300 animate-pulse"
          >
            Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100 [text-shadow:_0_0_8px_rgba(255,255,255,0.3),_0_0_12px_rgba(59,130,246,0.2)] animate-[shine_4s_linear_infinite] bg-[length:200%_auto]">
            What Creators{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-300 dark:to-pink-300">
              Say
            </span>
          </h2>
        </motion.div>

        <div className="px-8 md:px-12 lg:px-16" ref={ref}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    className="group relative h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-purple-700/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-950/50 dark:to-black/50 p-8 rounded-2xl border border-gray-700 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 dark:hover:shadow-blue-500/10 h-full flex flex-col">
                      <Quote className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-6" />
                      <p className="text-lg text-gray-400 dark:text-gray-200 mb-6 flex-grow [text-shadow:_0_0_4px_rgba(255,255,255,0.2),_0_0_8px_rgba(59,130,246,0.1)] animate-[glow_3s_ease-in-out_infinite]">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700/20 to-purple-700/20 dark:from-blue-600/20 dark:to-purple-600/20 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-950" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-300 dark:to-blue-100 [text-shadow:_0_0_8px_rgba(255,255,255,0.3),_0_0_12px_rgba(59,130,246,0.2)] animate-[shine_4s_linear_infinite] bg-[length:200%_auto]">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-400 dark:text-gray-200 [text-shadow:_0_0_4px_rgba(255,255,255,0.2),_0_0_8px_rgba(59,130,246,0.1)] animate-[glow_3s_ease-in-out_infinite]">
                            {testimonial.handle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-blue-700/20 dark:bg-blue-600/20 text-blue-400 dark:text-blue-300 hover:bg-blue-700/30 dark:hover:bg-blue-600/30" />
            <CarouselNext className="hidden md:flex -right-4 bg-blue-700/20 dark:bg-blue-600/20 text-blue-400 dark:text-blue-300 hover:bg-blue-700/30 dark:hover:bg-blue-600/30" />
          </Carousel>
        </div>
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

export default Testimonials
