interface SectionTextProps {
  text: string;
}

const SectionText: React.FC<SectionTextProps> = ({ text }) => (
  <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{text}</p>
);

export default SectionText;
