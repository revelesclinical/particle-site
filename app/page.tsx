"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-light tracking-tight mb-6"
          >
            {"it takes innovation to"}
            <br />
            <span className="font-normal">transform clinical trials</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            AI-powered engagement strategies for clinical trials that drive results
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full">
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="min-h-screen py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-light text-center mb-16"
          >
            advanced engagement solutions
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Strategy", "Analytics", "Optimization", "Implementation"].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg border border-border"
              >
                <h3 className="text-xl font-medium mb-4">{service}</h3>
                <p className="text-muted-foreground">
                  Maximize clinical trial success through data-driven engagement strategies.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

