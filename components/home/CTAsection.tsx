"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTAsection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Soft background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-white/20 dark:bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 dark:bg-white/5 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-5 py-2 text-sm font-semibold bg-white/20 text-white dark:text-white rounded-full backdrop-blur-sm"
        >
          Start Growing Today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-6"
        >
          Unlock Your Growth <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 dark:from-white dark:to-white/80">
            The Authentic Way
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-white/90 dark:text-white/80 mb-10"
        >
          Join thousands of creators who are scaling sustainably. No gimmicks. Just results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button>
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline">
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAsection;
