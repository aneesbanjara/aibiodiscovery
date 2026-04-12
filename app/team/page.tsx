"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";
import Link from "next/link";

/* =====================
   Animation Variants
===================== */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TeamPage() {
  const teamMembers = [
    {
      imgLink: "/images/team/ManfredPhilippPhD.png",
      profileLink: "https://fulbright.org/manfred-philipp",
      orgLink: "https://www.gc.cuny.edu/people/manfred-philipp",
      name: "Manfred Philipp, PhD",
      position: "Co-Founder & CEO",
      organization: "CUNY Graduate Center & Lehman College, New York, USA",
      contribution:
        "Co-author on protein structure files, awarded & pending patents, and peer-reviewed publications.",
    },
    {
      imgLink: "/images/team/PurushottamPrasaiPhD.jpeg",
      profileLink: "",
      orgLink: "",
      name: "Purushotam Prasai, PhD",
      position: "Co-Founder & CTO",
      organization: "Patan Academy of Health Sciences, Nepal",
      contribution:
        "Responsible for influenza pandemic preparedness and virology research under CDC grants.",
    },
    {
      imgLink: "/images/team/HariPrasadKattelPhD.png",
      profileLink: "",
      orgLink: "",
      name: "Hari Prasad Kattel, PhD",
      position: "Advisor, Microbiologist",
      organization:
        "Technical Deputy Controller, Department of Microbiology, Tribhuvan University Teaching Hospital, Nepal",
      contribution:
        "Leading microbiology research and technical oversight in our studies.",
    },

    {
      imgLink: "/images/team/NareshBahadurKhadka.png",
      profileLink: "",
      orgLink: "",
      name: "Naresh Bahadur Khadka",
      position: "Medical Laboratory Technologist (MLS/ASCP)",
      organization: "High-complexity clinical laboratories",
      contribution:
        "Specializes in microbiology, molecular diagnostics, and clinical lab operations.",
    },
    {
      imgLink: "/images/team/JulianGingoldPhD.png",
      profileLink:
        "https://doctors.montefioreeinstein.org/providers/1346634433/julian-a-gingold",
      orgLink: "",
      name: "Dr. Julian A. Gingold",
      position: "Medical Advisor",
      organization:
        "Montefiore Einstein & Albert Einstein College of Medicine, New York, USA",
      contribution:
        "Expert in fertility genomics, IVF outcomes research, and minimally invasive reproductive surgery with 50+ peer-reviewed publications and national clinical guideline contributions.",
    },

    {
      imgLink: "/images/team/NishantTripathi.png",
      profileLink: "",
      orgLink: "",
      name: "Mr. Nishant Tripathi",
      position: "CPA & Financial Expert",
      organization: "California, USA",
      contribution:
        "Brings over 12 years of experience in accounting and finance for research funding and management.",
    },
    {
      imgLink: "/images/team/ThomasMoga.jpg",
      profileLink: "https://www.dykema.com/people/thomas-t-moga.html",
      orgLink: "",
      name: "Thomas T. Moga, J.D.",
      position: "Intellectual Property & Patent Law Expert",
      organization: "Dykema Gossett PLLC, USA",
      contribution:
        "Over 30 years of experience in global patent portfolio development, biotechnology and pharmaceutical IP protection, and expert testimony in international patent disputes.",
    },
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader title="Meet Our Team" />
          <SectionText text="Our multidisciplinary team blends microbiology, virology, AI-driven research, and financial leadership to advance therapeutic drug discovery." />
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Photo Avatar */}
              {/* Image + Name (First Link) */}
              <Link href={member.profileLink || "#"} target="_blank">
                <div className="cursor-pointer">
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

                  <h3 className="text-lg font-semibold text-gray-900 hover:text-[#0A84FF] transition">
                    {member.name}
                  </h3>
                </div>
              </Link>

              {/* Position + Organization (Second Link) */}
              <Link href={member.orgLink || "#"} target="_blank">
                <div className="cursor-pointer">
                  <p className="mt-1 text-sm font-medium text-[#0A84FF] hover:underline">
                    {member.position}
                  </p>

                  <p className="mt-1 text-sm text-gray-500 hover:underline">
                    {member.organization}
                  </p>
                </div>
              </Link>

              <div className="mx-auto my-4 h-px w-12 bg-gray-200 group-hover:bg-[#0A84FF] transition" />

              <p className="text-sm text-gray-600 leading-relaxed">
                {member.contribution}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
