interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{title}</h2>
);

export default SectionHeader;
