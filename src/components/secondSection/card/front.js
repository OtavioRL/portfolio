import Item from './cardComponents/item';
import { ReactComponent as TerminalSVG } from './svgs/terminal.svg';
import Title from './cardComponents/title';
import SubTitle from './cardComponents/subtitle';
import P from './cardComponents/paragraph';
import Description from './cardComponents/description';
import SVG from './cardComponents/svg';

const Front = () => {
  return (
    <div className='flex flex-col items-center mt-10 lg:mt-4 lg:w-1/3 lg:h-screen'>
      <SVG Svg={TerminalSVG} />
      <div className='flex flex-col lg:w-2/3 xl:w-2/3 lg:h-full justify-start'>
        <Title title="Desenvolvedor Frontend" />
        <Description texto="Eu gosto de desenvolver sites do zero, e adoro tirar ideias do papel e colocá-las na internet." />
        <SubTitle subtitle="Linguagens que eu utilizo:" />
        <P texto="HTML, CSS, JavaScript, Typescript, Git" />
        <SubTitle subtitle="Ferramentas que eu utilizo:" />
        <Item texto='React' isFirst={true} />
        <Item texto='Gitub' />
        <Item texto='Tailwind css' />
        <Item texto='Bootstrap' />
        <Item texto='MiUI' />
        <Item texto='Redux' />
        <Item texto='Next.js' />
      </div>
    </div>
  );
};

export default Front;