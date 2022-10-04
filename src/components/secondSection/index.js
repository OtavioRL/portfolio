import Card from "./card";
import SectionText from "./sectionText";

const SecondSection = () => {
  return (
    <section className="flex flex-col items-center">
      <SectionText/>
      <Card/>
    </section>
  );
};

export default SecondSection;