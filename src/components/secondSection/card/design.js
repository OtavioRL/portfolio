import { ReactComponent as DesignSVG } from './design.svg';

const Design = () => {
  return (
    <div className='flex flex-col items-center'>
        <DesignSVG className='bg-verde w-2/5 p-8% rounded-full overflow-visible'/>
        <h1 className='text-h6 text-center font-bold mt-5'>Designer</h1>
        <p className='text-plg text-center mt-5 leading-6'>Eu valorizo uma estética simples, <i>clean</i> e minimalista.</p>
        <h2 className='text-plg text-center font-bold text-roxo mt-10'>O que eu gosto de desenvolver:</h2>
        <p className='text-plg text-center mt-3'>UX, UI, Sites, Apps</p>
        <h2 className='text-plg text-center font-bold text-roxo mt-10'>Ferramentas que eu utilizo:</h2>
        <p className='text-plg text-center mt-3'>Figma</p>
        <p className='text-plg text-center'>Photoshop</p>
        <p className='text-plg text-center'>Illustrator</p>
        <p className='text-plg text-center'>Type-scale</p>
    </div>
  );
};

export default Design;