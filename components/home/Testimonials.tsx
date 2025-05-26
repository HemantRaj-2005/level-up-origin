"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
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
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/50 via-background to-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Creators{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Say
            </span>
          </h2>
        </motion.div>

        <div className="px-8 md:px-12 lg:px-16">
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
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-background to-muted/50 p-8 rounded-2xl border border-muted/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                      <Quote className="w-8 h-8 text-primary/50 mb-6" />
                      <p className="text-lg text-muted-foreground mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-muted" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.handle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;