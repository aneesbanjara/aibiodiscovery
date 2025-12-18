"use client";

import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";

export default function TeamPage() {
  const teamMembers = [
    {
      imgLink: "/images/team/ManfredPhilippPhD.png",
      name: "Dr. Manfred Philipp",
      position: "Professor Emeritus",
      organization: "CUNY Graduate Center & Lehman College, New York, USA",
      contribution:
        "Co-author on protein structure files, awarded & pending patents, and peer-reviewed publications.",
    },
    {
      imgLink: "/images/team/PurushottamPrasaiPhD.png",
      name: "Dr. Purushotam Prasai",
      position: "Virologist & Academic",
      organization: "Patan Academy of Health Sciences, Nepal",
      contribution:
        "Responsible for influenza pandemic preparedness and virology research under CDC grants.",
    },
    {
      imgLink: "/images/team/HariPrasadKattelPhD.png",
      name: "Dr. Hari Prasad Kattel",
      position: "Consultant Microbiologist & Technical Deputy Controller",
      organization:
        "Department of Microbiology, Tribhuvan University Teaching Hospital, Nepal",
      contribution:
        "Leading microbiology research and technical oversight in our studies.",
    },
    {
      imgLink: "/images/team/NareshBahadurKhadka.png",
      name: "Naresh Bahadur Khadka",
      position: "Medical Laboratory Technologist (MLS/ASCP)",
      organization: "High-complexity clinical laboratories",
      contribution:
        "Specializes in microbiology, molecular diagnostics, and clinical lab operations.",
    },
    {
      imgLink: "/images/team/NishantTripathi.png",
      name: "Mr. Nishant Tripathi",
      position: "CPA & Financial Expert",
      organization: "California, USA",
      contribution:
        "Brings over 12 years of experience in accounting and finance for research funding and management.",
    },
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeader title="Meet Our Team" />
        <SectionText text="Our multidisciplinary team blends microbiology, virology, AI-driven research, and financial leadership to advance therapeutic drug discovery." />

        <div className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Photo Avatar */}
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#5AC8FA] p-[2px]">
                <div className="h-full w-full rounded-full bg-white overflow-hidden">
                  <Image
                    src={member.imgLink}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#0A84FF]">
                {member.position}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {member.organization}
              </p>

              <div className="mx-auto my-4 h-px w-12 bg-gray-200 group-hover:bg-[#0A84FF] transition" />

              <p className="text-sm text-gray-600 leading-relaxed">
                {member.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
