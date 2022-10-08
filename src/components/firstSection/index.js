import Avatar from "./avatar";
import { ReactComponent as Illustration } from "./illustration.svg";
import SectionText from "./sectionText";

const FirstSection = () => {
  return (
    <section className="flex flex-col items-center justify-between h-full">
      <SectionText/>
      <Avatar/>
      <Illustration className="w-5/6 max-w-xl h-fit mt-10" />      
    </section>
  );
};

export default FirstSection;