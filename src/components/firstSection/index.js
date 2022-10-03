import Avatar from "./avatar";
import SectionText from "./sectionText";

const FirstSection = () => {
  return (
    <section className="flex flex-col items-center">
      <SectionText/>
      <Avatar/>
    </section>
  );
};

export default FirstSection;