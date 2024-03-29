import { useState } from "react";
import {menu, shield, close} from '../assets';
import { navLinks} from '../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={shield} alt="hoobank" className="w-[124px] h-[32px]"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={`font-poppins`}>
            <a href={`#${nav.id}`} className={`font-poppins cursor-pointer font-normal text-[16px] text-white ${index=== navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" 
        className="w-[28px] h-[28px] object-contain"
        onClick={()=>setToggle((prev)=>!prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 mx-4 my-2 min-w-[140px] right-0 rounded-xl sidebar`}>
          <ul className="list-none flex-col justify-end items-center">
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={`font-poppins`}>
            <a href={`#${nav.id}`} className={`font-poppins cursor-pointer font-normal text-[16px] text-white ${index=== navLinks.length-1 ? 'mb-0' : 'mb-10'}`}>{nav.title}</a>
           </li> 
          
        ))}
        </ul>
        </div>

      </div>
      

    </nav>
  )
}

export default Navbar