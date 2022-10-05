import Design from './design';
import Front from './front';
import Back from './back';

const Card = () => {
  return (
    <div className="p-10 w-5/6 bg-slate-50 relative bottom-24 rounded-xl flex flex-col items-center border-solid border-grey-100 border">
      <Design/>
      <Front/> 
      <Back/> 
    </div>
  );
};

export default Card;