"use client";

import { motion, Variants } from "framer-motion";

import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";
import CounterCard from "@/components/CounterCard";

import { Gauge, Crosshair, Bot } from "lucide-react";
import Link from "next/link";

// ===== FRAMER MOTION VARIANTS =====
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <motion.section
        className="relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center h-[80vh]"
        style={{ backgroundImage: "url('/images/aiBioDiscoveryLP.png')" }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="bg-black/50 absolute inset-0" />

        <motion.div className="relative z-10 max-w-2xl px-4" variants={fadeUp}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Revolutionizing Drug Discovery <br />
            with AI to Combat Bacterial Infections
          </motion.h1>

          <Link href="/contact">
            <Button text="Contact Us" />
          </Link>
        </motion.div>
      </motion.section>

      {/* CRISIS SECTION */}
      <motion.section
        className="py-20 bg-gray-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader title="The Global Crisis of Antibiotic Resistance" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <SectionText text="Antibiotic resistance (AMR) is a silent pandemic. Every year, millions of infections are becoming untreatable. Without urgent action, we risk entering a post-antibiotic era where common infections and injuries could once again become fatal." />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-12"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <CounterCard
              title="Annual Deaths"
              end={1.27}
              decimals={2}
              suffix="M"
              bottomText="Due to AMR"
              color="red"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <CounterCard
              title="Projected by 2050"
              end={10}
              suffix="M"
              bottomText="Annual deaths of AMR"
              color="red"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <CounterCard
              title="Research Spend"
              end={1}
              suffix="B"
              bottomText="USD Annually"
              color="green"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FEATURES SECTION */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader title="AI: The Next Frontier in Therapeutic Discovery" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <SectionText text="Our proprietary AI platform revolutionizes the drug discovery pipeline. By analyzing vast biological datasets, we can identify novel antibiotic candidates at a speed and scale previously unimaginable." />
        </motion.div>

        <motion.div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-10 text-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <div className="w-16 h-16 bg-[#C7F2FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="text-[#0AA6E8]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Accelerated Discovery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce discovery timelines from years to months.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="w-16 h-16 bg-[#C7F2FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Crosshair className="text-[#0AA6E8]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Higher Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify candidates with higher probabilities of success.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="w-16 h-16 bg-[#C7F2FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="text-[#0AA6E8]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Novel Mechanisms</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover unconventional antibacterial agents.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA – Shaping the Future of Medicine */}
      <motion.section className="py-10 bg-gray-50">
        <motion.div className="max-w-5xl mx-auto px-6">
          <motion.div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Join Us in Shaping the Future of Medicine
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Discover how our AI-driven approach is creating a new paradigm in
              the fight against infectious diseases. Explore our research, our
              team, and the technology that powers our mission.
            </p>

            <Link href="/research">
              <button className="bg-[#22D3EE] hover:bg-[#1EC4DC] text-white font-semibold px-6 py-3 rounded-lg transition">
                Explore Our Research
              </button>{" "}
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        className="py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader title="Ready to explore the future of therapeutic drug discovery?" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <SectionText text="Contact us today to learn more about our research and collaboration opportunities." />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Link href="/contact">
            <Button text="Learn More" />
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
