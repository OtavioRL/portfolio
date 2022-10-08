import Design from './design';
import Front from './front';
import Back from './back';

const Cards = () => {
  return (
    <div className="p-10 lg:p-0 w-5/6 bg-slate-50 relative bottom-24 rounded-xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-around lg:h-screen xl:bottom-32 border-solid border-grey-100 border shadow-lg">
      <Design/>
      <Front/> 
      <Back/> 
    </div>
  );
};

export default Cards;