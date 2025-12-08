"use client";

import {
  Search,
  FlaskConical,
  Beaker,
  DollarSign,
  Activity,
} from "lucide-react";

export default function ResearchPage() {
  return (
    <main className="bounceIn max-w-3xl mx-auto px-4 py-16 text-center">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Our Research Methodology
      </h1>
      <p className="text-gray-600 mb-12">
        We are advancing the next generation of therapeutics that restore the
        effectiveness of antibiotics compromised by bacterial resistance. Our
        platform combines AI-driven discovery with real-world laboratory
        validation and clinical preparation to combat infectious diseases.
      </p>

      {/* Phase 1 */}
      <div className="flex items-start gap-4 mb-10 text-left">
        <div className="flex-shrink-0">
          <div className="p-2 bg-blue-50 rounded-full border border-blue-100">
            <Search className="w-5 h-5 text-blue-500" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Phase 1: In Silico Evaluation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our process begins with powerful computational analysis and
            AI-driven screening. We sift through vast datasets to identify
            promising candidates with high potential for therapeutic efficacy.
          </p>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="flex items-start gap-4 mb-10 text-left">
        <div className="flex-shrink-0">
          <div className="p-2 bg-blue-50 rounded-full border border-blue-100">
            <FlaskConical className="w-5 h-5 text-blue-500" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Phase 2: Live Bacteria Evaluation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Selected candidates undergo rigorous in-vitro testing against both
            gram-positive and gram-negative bacterial pathogens. By themselves,
            these compounds show no antibacterial activity, reducing the risk of
            resistance development, and show minimal toxicity in human cell
            cultures.
          </p>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="flex items-start gap-4 mb-10 text-left">
        <div className="flex-shrink-0">
          <div className="p-2 bg-blue-50 rounded-full border border-blue-100">
            <Beaker className="w-5 h-5 text-blue-500" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Phase 3: Compound Optimization & Combination Discovery
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Promising compounds are refined and tested in combination with
            existing antibiotics to restore their activity. Additional
            combinations are under development and will be covered in future
            patent filings.
          </p>
        </div>
      </div>

      {/* Next Steps: Research */}
      <div className="flex items-start gap-4 mb-10 text-left">
        <div className="flex-shrink-0">
          <div className="p-2 bg-green-50 rounded-full border border-green-100">
            <Activity className="w-5 h-5 text-green-500" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Next Steps: Research
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We will further confirm the safety of our agents via human tissue
            culture studies. Phase I trials on healthy volunteers will establish
            safety and dosage, followed by trials on infected individuals to
            test efficacy in real-world conditions.
          </p>
        </div>
      </div>

      {/* Financial & Clinical Roadmap */}
      <div className="flex items-start gap-4 mb-10 text-left">
        <div className="flex-shrink-0">
          <div className="p-2 bg-yellow-50 rounded-full border border-yellow-100">
            <DollarSign className="w-5 h-5 text-yellow-500" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Next Steps: Financial & Clinical
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            AlBioDiscovery is targeting a $1M seed round to fund synthesis and
            testing of additional compounds, in-vitro validation, and Phase I &
            II clinical trials in the US. Phase I trials will analyze
            absorption, distribution, metabolism, and excretion, while Phase II
            will assess effectiveness in infected patients.
          </p>
        </div>
      </div>

      {/* Protecting Innovation */}
      <div className="mt-16 p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Protecting Our Innovation
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          AlBioDiscovery has filed international patents covering our novel
          compounds and agent-antibiotic combinations, ensuring continued
          development of groundbreaking treatments for multidrug-resistant
          bacterial infections.
        </p>
      </div>
    </main>
  );
}
