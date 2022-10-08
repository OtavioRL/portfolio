import { ReactComponent as DesignSVG } from './svgs/design.svg';
import Item from './cardComponents/item';
import Title from './cardComponents/title';
import SubTitle from './cardComponents/subtitle';
import P from './cardComponents/paragraph';
import Description from './cardComponents/description';
import SVG from './cardComponents/svg';

const Design = () => {
  return (
    <div className='flex flex-col items-center lg:mt-4 lg:w-1/3 lg:h-screen'>
        <SVG Svg={DesignSVG} />
        <div className='flex flex-col lg:w-2/3 xl:w-2/3 lg:h-full justify-start'>
          <Title title='Designer' />
          <Description texto='Eu valorizo uma estética simples, clean e minimalista.' />
          <SubTitle subtitle='O que eu gosto de desenvolver:' />
          <P texto="UX, UI, Sites, Apps" />
          <SubTitle subtitle='Ferramentas que eu utilizo:' />
          <Item texto='Figma' isFirst={true} />
          <Item texto='Photoshop' />
          <Item texto='Illustrator' />
          <Item texto='Type-scale' />
        </div>
    </div>
  );
};

export default Design;