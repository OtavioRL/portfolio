import { ReactComponent as BackSVG } from './back.svg';

const Back = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
        <BackSVG className='bg-verde w-2/5 sm:w-2/6 md:w-1/4 p-8% md:p-6% rounded-full overflow-visible'/>
        <h1 className='text-h6 sm:text-h4 text-center font-bold mt-5'>Desenvolvedor Backend</h1>
        <p className='text-plg sm:text-pxl text-center mt-5 leading-6'>Ainda estou estudando backend mas já consigo desenvolver uma aplicação fullstack com API e banco de dados integrado.</p>
        <h2 className='text-plg sm:text-pxl text-center font-bold text-roxo mt-10'>O que eu aprendi até agora:</h2>
        <p className='text-plg sm:text-pxl text-center mt-3'>Docker</p>
        <p className='text-plg sm:text-pxl text-center'>SQL & mySQL</p>
        <p className='text-plg sm:text-pxl text-center'>Node.js</p>
        <p className='text-plg sm:text-pxl text-center'>Arquitetura de software</p>
    </div>
  );
};

export default Back;