import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";
import Card from "@/components/Card";

export default function AboutPage() {
  const cards = [
    {
      title: "Organoboron Compounds",
      description: `Organoboron compounds have emerged as a promising class of molecules in drug discovery due to their
unique chemical properties and biological activities. These compounds feature a boron atom covalently
bonded to organic substituents, allowing for diverse structural modifications and interactions with biological
targets. The ability of boron to form reversible covalent bonds with diols and other biomolecules makes
organoboron compounds particularly attractive for targeting specific enzymes and proteins involved in
bacterial infections.`,
    },
    {
      title: "Natural Products",
      description: `Natural products, derived from plants, microorganisms, and marine organisms, have long served as a rich
source of therapeutic agents. These compounds often possess complex structures and exhibit a wide range
of biological activities, making them valuable leads for drug development. The combination of natural
product scaffolds with organoboron chemistry offers a novel approach to create hybrid molecules with
enhanced efficacy and specificity against bacterial pathogens.`,
    },
    {
      title: "Principal Officers' Work",
      description: `The principal officers at AlBioDiscovery have extensive experience in organoboron chemistry and natural
product research. Their work has focused on the synthesis and characterization of novel organoboron
compounds, as well as the isolation and modification of natural products with antibacterial potential. Their
publications and patents demonstrate their contributions to the field, including the development of new
synthetic methodologies and the identification of promising drug candidates.`,
    },
    {
      title: "Publications and Patents",
      description: `AlBioDiscovery's principal officers have authored numerous peer-reviewed publications in leading scientific
journals and hold several patents related to organoboron compounds and natural products. These
publications cover a range of topics, including the synthesis of boron-containing heterocycles, the
development of boron-based enzyme inhibitors, and the discovery of novel antibacterial agents from natural
sources. The patents protect their intellectual property and cover various aspects of their research, including
compound structures, synthetic methods, and therapeutic applications.`,
    },
    {
      title: "Impact on FDA-Approved Pharmaceuticals",
      description: `The work of AlBioDiscovery's principal officers and other researchers in the field has had a significant impact
on the development of FDA-approved pharmaceuticals. Several drugs currently on the market incorporate
organoboron moieties or are derived from natural product scaffolds. These include treatments for various
bacterial infections, highlighting the translational potential of this research area. AlBioDiscovery aims to build
upon this foundation by developing innovative therapies for infectious diseases, leveraging their expertise in
organoboron chemistry and natural product research.`,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeader title="Scientific Background" />
        <SectionText text="Delving into the foundational research and innovative science that drives AlBioDiscovery's mission forward." />
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto mt-10">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </main>
  );
}
