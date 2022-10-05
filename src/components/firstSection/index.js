import Avatar from "./avatar";
import { ReactComponent as Illustration } from "./illustration.svg";
import SectionText from "./sectionText";

const FirstSection = () => {
  return (
    <section className="flex flex-col items-center">
      <SectionText/>
      <Avatar/>
      <Illustration className="w-2/3 max-w-lg h-max mt-10" />      
    </section>
  );
};

export default FirstSection;