"use client";

import {
  Search,
  FlaskConical,
  Beaker,
  DollarSign,
  Activity,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Research4AImg from "@/public/images/research/4A.png";
import Research5AImg from "@/public/images/research/5A.png";
import Research6AImg from "@/public/images/research/6A.png";
import Research8AImg from "@/public/images/research/8A.png";
import Research9AImg from "@/public/images/research/9A.png";
import Image from "next/image";

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
  const researchFigures = [
    {
      img: Research4AImg,
      label: "Figure 4A",
      desc: "Disk diffusion assay evaluating antibacterial activity of ceftazidime. Strong synergistic effect with Compound C.",
    },
    {
      img: Research5AImg,
      label: "Figure 5A",
      desc: "Reproducibility of the synergistic interaction between ceftazidime and Compound C.",
    },
    {
      img: Research6AImg,
      label: "Figure 6A",
      desc: "Restored activity of penicillin G against resistant staphylococcus when combined with Compound C.",
    },
    {
      img: Research8AImg,
      label: "Figure 8A",
      desc: "Compound C enhances ceftazidime activity while minimally affecting meropenem.",
    },
    {
      img: Research9AImg,
      label: "Figure 9A",
      desc: "Selective activation of penicillin G by Compound C; cefoxitin remains unaffected.",
    },
  ];

  return (
    <main className="space-y-16 max-w-full sm:max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center max-w-full sm:max-w-3xl mx-auto px-2 sm:px-4 py-6 space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Our Research Methodology
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          We are advancing the next generation of therapeutics that restore the
          effectiveness of antibiotics compromised by bacterial resistance. Our
          platform combines AI-driven discovery with real-world laboratory
          validation and clinical preparation to combat infectious diseases.
        </p>
      </motion.div>

      {/* Phase Sections */}
      {[
        {
          phase: "PHASE 1",
          icon: <Search className="text-blue-700 w-5 h-5 sm:w-6 sm:h-6" />,
          title: "In Silico Evaluation",
          desc: "Our process begins with powerful computational analysis. We sift through vast datasets to identify promising candidates with high potential for therapeutic efficacy.",
          bgLeft: "bg-blue-50 border-blue-100 text-blue-900",
          bgRight: "text-gray-700",
          color: "blue",
        },
        {
          phase: "PHASE 2",
          icon: (
            <FlaskConical className="text-purple-700 w-5 h-5 sm:w-6 sm:h-6" />
          ),
          title: "Live Bacteria Evaluation",
          desc: "Selected candidates undergo rigorous in-vitro testing against both gram-positive and gram-negative bacterial pathogens. By themselves, all but two of these compounds show no antibacterial activity, reducing the risk of resistance development, and show no toxicity in human cell cultures.",
          bgLeft: "text-white",
          bgRight: "bg-purple-50 border-purple-100 text-purple-900",
          color: "purple",
        },
        {
          phase: "PHASE 3",
          icon: <Beaker className="text-emerald-700 w-5 h-5 sm:w-6 sm:h-6" />,
          title: "Compound Optimization & Combination Discovery",
          desc: "Promising compounds are refined and tested in combination with existing antibiotics to restore their activity. Additional combinations are under development and will be covered in future patent filings.",
          bgLeft: "bg-emerald-50 border-emerald-100 text-emerald-900",
          bgRight: "text-gray-700",
          color: "emerald",
        },
        {
          phase: "NEXT STEPS",
          icon: <Activity className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />,
          title: "Research",
          desc: "We will further confirm the safety of our agents via human tissue culture studies. Phase I trials on healthy volunteers will establish safety and dosage, followed by trials on infected individuals to test efficacy in real-world conditions.",
          bgLeft: "text-white",
          bgRight: "bg-gray-700 text-white",
          color: "green",
        },
        {
          phase: "FINANCIAL & CLINICAL",
          icon: (
            <DollarSign className="text-yellow-700 w-5 h-5 sm:w-6 sm:h-6" />
          ),
          title: "Financial & Clinical",
          desc: "AlBioDiscovery is targeting a $20M seed round to fund synthesis and testing of additional compounds, in-vitro validation, and Phase I & II clinical trials in the US.",
          bgLeft: "bg-yellow-50 border-yellow-100 text-yellow-900",
          bgRight: "text-gray-700",
          color: "yellow",
        },
      ].map((item, idx) => (
        <motion.section
          key={idx}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-4 sm:px-6 py-6 sm:py-8 ${
            idx % 2 === 1 ? "bg-gray-800" : "bg-[#fafafa]"
          }`}
        >
          <motion.div
            variants={fadeLeft}
            className={`rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition ${
              idx % 2 === 1 ? item.bgRight : item.bgLeft
            }`}
          >
            <div
              className={`flex items-center ${
                idx % 2 === 1 ? "justify-end" : "justify-start"
              } gap-3 mb-2`}
            >
              {idx % 2 === 1 && (
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${item.color}-400`}
                >
                  {item.phase}
                </span>
              )}
              <div
                className={`p-2 sm:p-3 rounded-lg ${
                  idx % 2 === 1
                    ? `${item.color}-600 bg-${item.color}-600/30`
                    : `${item.color}-100`
                }`}
              >
                {item.icon}
              </div>
              {!(idx % 2 === 1) && (
                <span
                  className={`text-xs font-bold uppercase tracking-widest text-${item.color}-700`}
                >
                  {item.phase}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase">
              {item.title}
            </h2>
          </motion.div>
          <motion.div variants={fadeRight} className="p-4 sm:p-8">
            <p
              className={`leading-relaxed ${
                idx % 2 === 1 ? "text-white" : "text-gray-700"
              } text-sm sm:text-base`}
            >
              {item.desc}
            </p>
          </motion.div>
        </motion.section>
      ))}

      {/* Research Figures Section */}
      <motion.section
        className="px-4 sm:px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Experimental Validation & Results
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {researchFigures.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center w-full sm:w-56 text-center"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <div className="rounded-full border-4 border-blue-300 overflow-hidden w-40 h-40 mb-4 shadow-lg">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Protecting Innovation */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-10 text-center shadow-md"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
          Protecting Our Innovation
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-full sm:max-w-3xl mx-auto leading-relaxed">
          AlBioDiscovery has filed international patents covering our novel
          compounds and agent-antibiotic combinations.
        </p>
      </motion.section>
    </main>
  );
}
