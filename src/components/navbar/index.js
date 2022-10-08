import {Spin as Menu} from 'hamburger-react';

const NavBar = () => {
  return (
    <nav className='flex justify-end'> 
      <div className='mr-5 mt-5'>
        <Menu size={200}/>
      </div>
    </nav>
  );
};

export default NavBar;