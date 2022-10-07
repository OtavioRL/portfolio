import { ReactComponent as TerminalSVG } from './terminal.svg';

const Front = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
        <TerminalSVG className='bg-verde w-2/5 sm:w-2/6 md:w-1/4 p-8% md:p-6% rounded-full overflow-visible'/>
        <h1 className='text-h6 sm:text-h4 text-center font-bold mt-5'>Desenvolvedor Frontend</h1>
        <p className='text-plg sm:text-pxl text-center mt-5 leading-6'>Eu gosto de desenvolver sites do zero, e adoro tirar ideias do papel e colocá-las na internet.</p>
        <h2 className='text-plg sm:text-pxl text-center font-bold text-roxo mt-10'>Linguagens que eu utilizo:</h2>
        <p className='text-plg sm:text-pxl text-center mt-3'>HTML, CSS, JavaScript, Typescript, Git</p>
        <h2 className='text-plg sm:text-pxl text-center font-bold text-roxo mt-10'>Ferramentas que eu utilizo:</h2>
        <p className='text-plg sm:text-pxl text-center mt-3'>React</p>
        <p className='text-plg sm:text-pxl text-center'>Github</p>
        <p className='text-plg sm:text-pxl text-center'>Tailwind css</p>
        <p className='text-plg sm:text-pxl text-center'>Bootstrap</p>
        <p className='text-plg sm:text-pxl text-center'>MiUI</p>
        <p className='text-plg sm:text-pxl text-center'>Redux</p>
        <p className='text-plg sm:text-pxl text-center'>Next.js</p>
    </div>
  );
};

export default Front;