import Avatar from "./avatar";
import { ReactComponent as Illustration } from "./illustration.svg";
import SectionText from "./sectionText";

const FirstSection = () => {
  return (
    <section className="flex flex-col items-center">
      <SectionText/>
      <Avatar/>
      <Illustration className="max-w-xs h-max mt-10" />      
    </section>
  );
};

export default FirstSection;