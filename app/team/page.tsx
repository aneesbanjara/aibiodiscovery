"use client";

import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";
import { User } from "lucide-react"; // import a generic user icon

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Manfred Philipp",
      position: "Professor Emeritus",
      organization: "CUNY Graduate Center & Lehman College, New York, USA",
      contribution:
        "Co-author on protein structure files, awarded & pending patents, and peer-reviewed publications.",
      icon: User,
    },
    {
      name: "Dr. Purushotam Prasai",
      position: "Virologist & Academic",
      organization: "Patan Academy of Health Sciences, Nepal",
      contribution:
        "Responsible for influenza pandemic preparedness and virology research under CDC grants.",
      icon: User,
    },
    {
      name: "Dr. Hari Prasad Kattel",
      position: "Consultant Microbiologist & Technical Deputy Controller",
      organization:
        "Department of Microbiology, Tribhuvan University Teaching Hospital, Nepal",
      contribution:
        "Leading microbiology research and technical oversight in our studies.",
      icon: User,
    },
    {
      name: "Naresh Bahadur Khadka",
      position: "Medical Laboratory Technologist (MLS/ASCP)",
      organization: "High-complexity clinical laboratories",
      contribution:
        "Specializes in microbiology, molecular diagnostics, and clinical lab operations.",
      icon: User,
    },

    {
      name: "Mr. Nishant Tripathi",
      position: "CPA & Financial Expert",
      organization: "California, USA",
      contribution:
        "Brings over 12 years of experience in accounting and finance for research funding and management.",
      icon: User,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <SectionHeader title="Meet Our Team" />
        <SectionText text="Our multidisciplinary team combines expertise in microbiology, virology, AI-driven research, and financial management to advance therapeutic drug discovery." />

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                {/* Replace image with big icon */}
                <IconComponent className="w-32 h-32 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium text-sm mb-2">
                  {member.position}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {member.organization}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.contribution}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
