"use client";

import { FlaskConical, Microscope, Brain } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Vision for the Future</h2>
        <p className="text-gray-600 leading-relaxed mb-12">
          AlBioDiscovery is committed to advancing its research and development
          efforts to combat infectious bacterial diseases. Our future plans
          involve a phased approach, integrating cutting-edge AI technologies to
          accelerate therapeutic drug discovery.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        {/* Phase I Development */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-blue-50 p-3 rounded-2xl">
            <FlaskConical className="text-blue-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phase I Development</h3>
            <p className="text-gray-600 leading-relaxed">
              In Phase I, we will focus on identifying and validating novel drug
              targets using our proprietary AI-driven platform. This phase will
              involve extensive in vitro and in vivo studies to assess the
              efficacy and safety of potential drug candidates. Our goal is to
              select the most promising compounds for further development.
            </p>
          </div>
        </div>

        {/* Phase II Development */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-blue-50 p-3 rounded-2xl">
            <Microscope className="text-blue-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phase II Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Phase II will concentrate on optimizing the lead compounds
              identified in Phase I. This will include refining the drug
              formulation, conducting preclinical studies to evaluate
              pharmacokinetics and pharmacodynamics, and preparing for clinical
              trials. We aim to demonstrate the potential of our AI-designed
              drugs to effectively treat bacterial infections.
            </p>
          </div>
        </div>

        {/* Integrating AI in Future Research */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-blue-50 p-3 rounded-2xl">
            <Brain className="text-blue-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Integrating AI in Future Research
            </h3>
            <p className="text-gray-600 leading-relaxed">
              AI will continue to be a cornerstone of our research. We plan to
              enhance our AI algorithms with new data and insights, enabling us
              to predict drug efficacy and safety with greater accuracy. This
              will not only accelerate the drug discovery process but also
              reduce development costs and improve the chances of success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
