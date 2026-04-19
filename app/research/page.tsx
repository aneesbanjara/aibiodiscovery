"use client";

import {
  Search,
  FlaskConical,
  Beaker,
  DollarSign,
  Activity,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
// import Research4AImg from "@/public/images/research/4A.png";
// import Research5AImg from "@/public/images/research/5A.png";
// import Research6AImg from "@/public/images/research/6A.png";
// import Research8AImg from "@/public/images/research/8A.png";
// import Research9AImg from "@/public/images/research/9A.png";
import Research2Img from "@/public/images/research/2.png";
import Research3Img from "@/public/images/research/3.png";
import Research4Img from "@/public/images/research/4.png";
// import Research5Img from "@/public/images/research/5.png";
// import Research6Img from "@/public/images/research/6.png";
import Research7Img from "@/public/images/research/7.png";
// import Research8Img from "@/public/images/research/8.png";
// import Research9Img from "@/public/images/research/9.png";
import Research10Img from "@/public/images/research/10.jpeg";
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
    // {
    //   img: Research1Img,
    //   label: "",
    //   desc: "",
    // },
    {
      img: Research2Img,
      label: "",
      desc: "",
    },
    {
      img: Research10Img,
      label: "",
      desc: "",
    },
    // {
    //   img: Research3Img,
    //   label: "",
    //   desc: "",
    // },
    // {
    //   img: Research4Img,
    //   label: "",
    //   desc: "",
    // },
    // {
    //   img: Research5Img,
    //   label: "",
    //   desc: "",
    // },
    // {
    //   img: Research6Img,
    //   label: "",
    //   desc: "",
    // },
    // {
    //   img: Research7Img,
    //   label: "",
    //   desc: "",
    // },
    // {
    //   img: Research8Img,
    //   label: "",
    //   desc: "",
    // },
    // {
    //   img: Research9Img,
    //   label: "",
    //   desc: "",
    // },
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
          phase: "STEP 1",
          icon: <Search className="text-blue-700 w-5 h-5 sm:w-6 sm:h-6" />,
          title: "In Silico Evaluation",
          desc: "Our process begins with powerful computational analysis. We sift through vast datasets to identify promising candidates with high potential for therapeutic efficacy.",
          bgLeft: "bg-blue-50 border-blue-100 text-blue-900",
          bgRight: "text-gray-700",
          color: "blue",
        },
        {
          phase: "STEP 2",
          icon: (
            <FlaskConical className="text-purple-700 w-5 h-5 sm:w-6 sm:h-6" />
          ),
          title: "Live Bacteria Evaluation",
          desc: "Selected candidates undergo rigorous in-vitro testing against both gram-positive and gram-negative bacterial pathogens. By themselves, these compounds show no antibacterial activity, reducing the risk of resistance development. We have confirmed the safety of our agents via human tissue culture and animal studies.",
          bgLeft: "text-white",
          bgRight: "bg-purple-50 border-purple-100 text-purple-900",
          color: "purple",
        },
        {
          phase: "STEP 3",
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
          desc: "We have further confirmed the safety of our agents via human tissue culture studies. Phase I trials on healthy volunteers will establish safety and dosage, followed by trials on infected individuals to test efficacy in real-world conditions.",
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
          desc: "AlBioDiscovery is targeting a $20M seed round to fund synthesis and testing of additional compounds, in-vitro validation, and Phase I & II clinical trials in the US and abroad.",
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

      {/* Research Figures – Featured Layout */}
      <motion.section
        className="px-4 sm:px-6 py-20 bg-gradient-to-b from-white to-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Experimental Validation & Results
        </motion.h2>

        {/* Featured Figure */}
        <motion.div
          variants={fadeUp}
          className="max-w-6xl mx-auto mb-16 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
        >
          <div className="relative w-full h-[420px] bg-gray-100">
            <Image
              src={researchFigures[0].img}
              alt={researchFigures[0].label}
              fill
              className="object-contain p-8"
              unoptimized
            />
          </div>

          <div className="p-6 sm:p-8">
            {/* <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-2">
              {researchFigures[0].label || "Featured Figure"}
            </p> */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl">
              {researchFigures[0].desc || (
                <>
                  Bactericidal activity of compound AB-4 on{" "}
                  <em>Acinetobacter baumannii</em>
                </>
              )}
            </p>
          </div>
        </motion.div>

        {/* Supporting Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {researchFigures.slice(1).map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="relative w-full h-64 bg-gray-50">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </div>

              <div className="p-5">
                {/* <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
                  {item.label || `Figure ${idx + 2}`}
                </p> */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  Docking an Fmoc-Peptide to <em>E.coli</em> TEM-1 <em>beta</em>
                  -Lactamase{" "}
                </p>
              </div>
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
          We have filed patents covering our compounds and agent-antibiotic
          combinations.
        </p>
      </motion.section>
    </main>
  );
}
