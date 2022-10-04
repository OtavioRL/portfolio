import { ReactComponent as DesignSVG } from './design.svg';
import { ReactComponent as TerminalSVG } from './terminal.svg';

const Card = () => {
  return (
    <div className="p-10 w-5/6 bg-slate-50 relative bottom-24 rounded-xl flex flex-col items-center border-solid border-grey-100 border">
        <TerminalSVG className='bg-verde w-2/5 py-4 px-5 rounded-full overflow-visible'/>
        <h1 className='text-h6 text-center font-bold mt-5'>Desenvolvedor Frontend</h1>
        <p className='text-plg text-center mt-5 leading-6'>Eu gosto de desenvolver sites do zero, e adoro tirar ideias do papel e colocá-las internet.</p>
        <h2 className='text-plg text-center font-bold text-roxo mt-10'>Linguagens que eu utilizo:</h2>
        <p className='text-plg text-center mt-3'>HTML, CSS, JavaScript, Typescript, Git</p>
        <h2 className='text-plg text-center font-bold text-roxo mt-10'>Ferramentas que eu utilizo:</h2>
        <p className='text-plg text-center mt-3'>React</p>
        <p className='text-plg text-center'>Github</p>
        <p className='text-plg text-center'>Tailwind css</p>
        <p className='text-plg text-center'>Bootstrap</p>
        <p className='text-plg text-center'>MiUI</p>
        <p className='text-plg text-center'>Redux</p>
        <p className='text-plg text-center'>Next.js</p>
    </div>
  );
};

export default Card;