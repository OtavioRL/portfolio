import { ReactComponent as BackSVG } from './svgs/back.svg';
import Item from './cardComponents/item';
import Title from './cardComponents/title';
import SubTitle from './cardComponents/subtitle';
import Description from './cardComponents/description';
import SVG from './cardComponents/svg';

const Back = () => {
  return (
    <div className='flex flex-col items-center mt-10 lg:mt-4 lg:w-1/3 lg:h-screen'>
      <SVG Svg={BackSVG} />
      <div className='flex flex-col lg:w-2/3 xl:w-2/3 lg:h-full justify-start'>
        <Title title='Desenvolvedor Backend' />
        <Description texto="Ainda estou estudando backend mas já consigo desenvolver uma aplicação fullstack com API e banco de dados integrado." />
        <SubTitle subtitle="O que eu aprendi até agora:" />
        <Item texto='Docker' isFirst={true} />
        <Item texto='SQL & mySQL'/>
        <Item texto='Node.js'/>
        <Item texto='Arquitetura de software'/>
      </div>
    </div>
  );
};

export default Back;