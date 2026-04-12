"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";
import { Leaf, Atom, FlaskConical } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* THREE-STEP APPROACH */}
      <section className="py-16 sm:py-20 bg-gray-50 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our Approach: A Three-Step Process
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 max-w-full sm:max-w-3xl mx-auto mt-4 sm:mt-6 leading-relaxed px-4 sm:px-0"
        >
          We apply cutting-edge machine learning to the vast, untapped potential
          of natural products to identify and develop next-generation
          therapeutics.
        </motion.p>

        {/* STEP CARDS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-full sm:max-w-6xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16"
        >
          {/* STEP 1 */}
          <motion.div variants={fadeUp} className="text-center px-4 sm:px-6">
            <div className="w-20 h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#C8F4FF] flex items-center justify-center">
              <Leaf size={32} className="text-[#0AA9E0]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              1. Sourcing Bioactive Compounds
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We curate and analyze diverse bioactive molecules, focusing on
              enzyme inhibitors with proven biological interactions.
            </p>
          </motion.div>

          {/* STEP 2 */}
          <motion.div variants={fadeUp} className="text-center px-4 sm:px-6">
            <div className="w-20 h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#C8F4FF] flex items-center justify-center">
              <Atom size={32} className="text-[#0AA9E0]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              2. AI-Powered Analysis
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              AI algorithms analyze complex biological data to predict molecular
              behavior and therapeutic potential.
            </p>
          </motion.div>

          {/* STEP 3 */}
          <motion.div variants={fadeUp} className="text-center px-4 sm:px-6">
            <div className="w-20 h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#C8F4FF] flex items-center justify-center">
              <FlaskConical size={32} className="text-[#0AA9E0]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              3. Identifying Therapeutics
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We have identified new compounds with high efficacy, enabling faster and
              more targeted drug discovery.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* BREAKTHROUGH SECTION */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-full sm:max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="bg-[#E0EAF5] rounded-3xl p-6 sm:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            {/* LEFT */}
            <motion.div
              variants={fadeLeft}
              className="w-full md:w-2/3 mb-6 md:mb-0"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                A Breakthrough Against Antibiotic Resistance
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl">
                Our algorithm has successfully identified antibacterial
                compounds that reverse antibiotic resistance, both Gram positive
                and Gram negative deadly pathogens a critical step forward in
                the fight against Multi-Drug Resistant (MDR) and Extensively
                Drug Resistant (XDR) bacteria.
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={fadeRight}
              className="w-full md:w-1/3 bg-white rounded-2xl p-6 sm:p-8 shadow-md text-center"
            >
              <p className="text-gray-600 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                New Compounds Identified
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900">
                11
              </h1>
              <p className="text-green-500 font-semibold text-xs sm:text-sm mt-1 sm:mt-2">
                That Reverse Antibiotic Resistance
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-4 sm:px-6"
        >
          <SectionHeader title="Join Us in Shaping the Future of Medicine" />
          <SectionText text="Discover how our AI-driven approach is creating a new paradigm in the fight against infectious diseases." />

          <div className="flex justify-center mt-6">
            <Link href="/research">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22D3EE] hover:bg-[#1EC4DC] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto transition"
              >
                Explore Our Research
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
