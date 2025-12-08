"use client";

import { motion } from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";

import CounterCard from "@/components/CounterCard";
import { Gauge, Crosshair, Bot } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center h-[80vh]"
        style={{ backgroundImage: "url('/images/aiBioDiscoveryLP.png')" }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <div className="relative z-10 max-w-2xl px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Revolutionizing Drug Discovery <br /> with AI to Combat Bacterial
            Infections
          </motion.h1>
          <Button text="Contact Us" />
        </div>
      </section>

      {/* CRISIS SECTION */}
      <section className="py-20 bg-gray-50 text-center">
        <SectionHeader title="The Global Crisis of Antibiotic Resistance" />
        <SectionText text="Antibiotic resistance (AMR) is a silent pandemic. Every year, millions of infections are becoming untreatable. Without urgent action, we risk entering a post-antibiotic era where common infections and injuries could once again become fatal." />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-12">
          <CounterCard
            title="Annual Deaths"
            end={1.27}
            decimals={2}
            suffix="M"
            bottomText="Due to AMR"
            color="red"
          />

          <CounterCard
            title="Projected by 2050"
            end={10}
            suffix="M"
            bottomText="Annual deaths of AMR"
            color="red"
          />

          <CounterCard
            title="Research Spend"
            end={1}
            suffix="B"
            bottomText="USD Annually"
            color="green"
          />
        </div>
      </section>

      {/* FEATURES SECTION (your image) */}

      <section className="py-20 bg-white">
        <SectionHeader title="Al: The Next Frontier in Therapeutic Discovery" />
        <SectionText text="Our proprietary Al platform revolutionizes the drug discovery pipeline. By analyzing vast biological datasets, we can identify novel antibiotic candidates at a speed and scale previously unimaginable, dramatically accelerating the path from lab to clinic." />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {/* ITEM 1 */}
            <div>
              <div className="w-16 h-16 bg-[#C7F2FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="text-[#0AA6E8]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Accelerated Discovery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce discovery timelines from years to months through rapid,
                intelligent screening of molecular compounds.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <div className="w-16 h-16 bg-[#C7F2FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Crosshair className="text-[#0AA6E8]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Higher Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI models identify candidates with higher probabilities of
                success, minimizing costly late-stage failures.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <div className="w-16 h-16 bg-[#C7F2FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="text-[#0AA6E8]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Novel Mechanisms</h3>
              <p className="text-gray-600 leading-relaxed">
                Uncover unconventional antibacterial agents and mechanisms of
                action to overcome existing resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA – Shaping the Future of Medicine */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Join Us in Shaping the Future of Medicine
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Discover how our AI-driven approach is creating a new paradigm in
              the fight against infectious diseases. Explore our research, our
              team, and the technology that powers our mission.
            </p>

            <button className="bg-[#22D3EE] hover:bg-[#1EC4DC] text-white font-semibold px-6 py-3 rounded-lg transition">
              Explore Our Research
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center">
        <SectionHeader title="Ready to explore the future of therapeutic drug discovery?" />
        <SectionText text="Contact us today to learn more about our research and how we can collaborate to address the global challenge of infectious bacterial diseases." />
        <Button text="Learn More" />
      </section>
    </div>
  );
}
