import { ReactComponent as BackSVG } from './back.svg';

const Back = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
        <BackSVG className='bg-verde w-2/5 px-5 py-4 rounded-full overflow-visible'/>
        <h1 className='text-h6 text-center font-bold mt-5'>Desenvolvedor Backend</h1>
        <p className='text-plg text-center mt-5 leading-6'>Ainda estou estudando backend mas já consigo desenvolver uma aplicação fullstack com API e banco de dados integrado.</p>
        <h2 className='text-plg text-center font-bold text-roxo mt-10'>O que eu aprendi até agora:</h2>
        <p className='text-plg text-center mt-3'>Docker</p>
        <p className='text-plg text-center'>SQL & mySQL</p>
        <p className='text-plg text-center'>Node.js</p>
        <p className='text-plg text-center'>Arquitetura de software</p>
    </div>
  );
};

export default Back;