"use client";

import {
  Search,
  FlaskConical,
  Beaker,
  DollarSign,
  Activity,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

/* Animation Variants */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function ResearchPage() {
  return (
    <main className="space-y-16 max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto px-4 py-6 space-y-4"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Research Methodology
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          We are advancing the next generation of therapeutics that restore the
          effectiveness of antibiotics compromised by bacterial resistance. Our
          platform combines AI-driven discovery with real-world laboratory
          validation and clinical preparation to combat infectious diseases.
        </p>
      </motion.div>

      {/* Phase 1 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center bg-[#fafafa] px-8 py-5"
      >
        <motion.div
          variants={fadeLeft}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Search className="text-blue-700 w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              PHASE 1
            </span>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 uppercase">
            In Silico Evaluation
          </h2>
        </motion.div>

        <motion.div variants={fadeRight} className="p-8">
          <p className="text-gray-700 text-base leading-relaxed">
            Our process begins with powerful computational analysis. We sift
            through vast datasets to identify promising candidates with high
            potential for therapeutic efficacy.
          </p>
        </motion.div>
      </motion.section>

      {/* Phase 2 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center bg-gray-800 px-8 py-5"
      >
        <motion.div variants={fadeLeft} className="p-8">
          <p className="text-white text-base leading-relaxed">
            Selected candidates undergo rigorous in-vitro testing against both
            gram-positive and gram-negative bacterial pathogens. By themselves,
            all but two of these compounds show no antibacterial activity,
            reducing the risk of resistance development, and show no toxicity in
            human cell cultures.
          </p>
        </motion.div>

        <motion.div
          variants={fadeRight}
          className="bg-purple-50 border border-purple-100 rounded-2xl p-8 shadow-md text-right hover:shadow-lg transition"
        >
          <div className="flex items-center justify-end gap-4 mb-2">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">
              PHASE 2
            </span>
            <div className="p-3 bg-purple-200 rounded-lg">
              <FlaskConical className="text-purple-700 w-6 h-6" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-purple-900 uppercase">
            Live Bacteria Evaluation
          </h2>
        </motion.div>
      </motion.section>

      {/* Phase 3 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center bg-[#fafafa] px-8 py-5"
      >
        <motion.div
          variants={fadeLeft}
          className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-emerald-200 rounded-lg">
              <Beaker className="text-emerald-700 w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              PHASE 3
            </span>
          </div>
          <h2 className="text-2xl font-bold text-emerald-900 uppercase">
            Compound Optimization & Combination Discovery
          </h2>
        </motion.div>

        <motion.div variants={fadeRight} className="p-8">
          <p className="text-gray-700 text-base leading-relaxed">
            Promising compounds are refined and tested in combination with
            existing antibiotics to restore their activity. Additional
            combinations are under development and will be covered in future
            patent filings.
          </p>
        </motion.div>
      </motion.section>

      {/* Next Steps */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center bg-gray-800 px-8 py-5"
      >
        <motion.div variants={fadeLeft} className="p-8">
          <p className="text-white text-base leading-relaxed">
            We will further confirm the safety of our agents via human tissue
            culture studies. Phase I trials on healthy volunteers will establish
            safety and dosage, followed by trials on infected individuals to
            test efficacy in real-world conditions.
          </p>
        </motion.div>

        <motion.div
          variants={fadeRight}
          className="bg-gray-700 rounded-2xl p-8 shadow-md text-right hover:shadow-lg transition"
        >
          <div className="flex items-center justify-end gap-4 mb-2">
            <span className="text-xs font-bold text-green-400 uppercase tracking-widest">
              NEXT STEPS
            </span>
            <div className="p-3 bg-gray-600 rounded-lg">
              <Activity className="text-green-400 w-6 h-6" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white uppercase">Research</h2>
        </motion.div>
      </motion.section>

      {/* Financial & Clinical */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center bg-[#fafafa] px-8 py-5"
      >
        <motion.div
          variants={fadeLeft}
          className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-yellow-200 rounded-lg">
              <DollarSign className="text-yellow-700 w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-yellow-700 uppercase tracking-widest">
              NEXT STEPS
            </span>
          </div>
          <h2 className="text-2xl font-bold text-yellow-900 uppercase">
            Financial & Clinical
          </h2>
        </motion.div>

        <motion.div variants={fadeRight} className="p-8">
          <p className="text-gray-700 text-base leading-relaxed">
            AlBioDiscovery is targeting a $20M seed round to fund synthesis and
            testing of additional compounds, in-vitro validation, and Phase I &
            II clinical trials in the US.
          </p>
        </motion.div>
      </motion.section>

      {/* Protecting Innovation */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-center shadow-md"
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Protecting Our Innovation
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-base leading-relaxed">
          AlBioDiscovery has filed international patents covering our novel
          compounds and agent-antibiotic combinations.
        </p>
      </motion.section>
    </main>
  );
}
