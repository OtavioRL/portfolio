import Cards from "./card";
import SectionText from "./sectionText";

const SecondSection = () => {
  return (
    <section className="flex flex-col items-center">
      <SectionText/>
      <Cards/>
    </section>
  );
};

export default SecondSection;