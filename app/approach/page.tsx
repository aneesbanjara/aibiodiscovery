"use client";

import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";

import { Leaf, Atom, FlaskConical } from "lucide-react";
import CounterCard from "@/components/CounterCard";

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* THREE-STEP APPROACH SECTION */}
      <section className="bounceIn py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Approach: A Three-Step Process
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
          We apply cutting-edge machine learning to the vast, untapped potential
          of natural products to identify and develop next-generation
          therapeutics.
        </p>

        {/* 3 STEP CARDS */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mt-16">
          {/* STEP 1 */}
          <div className="text-center px-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C8F4FF] flex items-center justify-center">
              <Leaf size={36} className="text-[#0AA9E0]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Sourcing Natural Products
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We begin by gathering extensive data from a diverse range of
              natural compounds, known for their biological activity.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C8F4FF] flex items-center justify-center">
              <Atom size={36} className="text-[#0AA9E0]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. AI-Powered Analysis
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our proprietary AI algorithms analyze complex biological data to
              predict molecular behavior and therapeutic potential.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C8F4FF] flex items-center justify-center">
              <FlaskConical size={36} className="text-[#0AA9E0]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Identifying Therapeutics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We pinpoint novel compounds with high efficacy, leading to faster,
              more targeted drug discovery and development.
            </p>
          </div>
        </div>
      </section>

      {/* BREAKTHROUGH SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#E0EAF5] rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* LEFT CONTENT */}
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                A Breakthrough Against Antibiotic Resistance
              </h2>

              <p className="text-gray-700 leading-relaxed max-w-xl">
                Our AI platform has successfully identified compounds that
                reverse antibiotic resistance in deadly pathogens, a critical
                step forward in the fight against superbugs.
              </p>
            </div>

            {/* RIGHT – JUST BIG NUMBER (NO CARD) */}
            <div className="md:w-1/3 flex justify-center bg-white rounded-2xl p-8 shadow-md">
              <div className="text-center">
                <p className="text-gray-600 text-base font-semibold mb-2">
                  Novel Compounds Identified
                </p>

                <h1 className="text-6xl font-bold text-blue-900">7</h1>

                <p className="text-green-500 font-semibold text-sm mt-2 ">
                  Resistance Reversing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <SectionHeader title="Join Us in Shaping the Future of Medicine" />

        <SectionText text="Discover how our Al-driven approach is creating a new paradigm in the fight against infectious diseases. Explore our research, our team, and the technology that powers our mission." />
        <div className="flex justify-center mt-6">
          <button className="bg-[#22D3EE] hover:bg-[#1EC4DC] text-white font-semibold px-6 py-3 rounded-lg transition">
            Explore Our Research
          </button>
        </div>
      </section>
    </div>
  );
}
