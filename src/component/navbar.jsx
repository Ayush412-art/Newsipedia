import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = ()=>{
    return(
        <>

            <div className='nav-container  h-[50px] py-1 bg-stone-700'>
            <div className='nav w-[85%] mt-[10px]'>
             
                <nav>
                        <ul className='flex justify-end gap-5'>
                            <li>
                                <NavLink  exact to={"/"} className='nav '>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Sports"} className='nav'>Sports</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Entertainment"} className='nav'>Entertainment</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/National"} className='nav'>National</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/International"} className='nav'>International</NavLink>
                            </li>
                        </ul>
                    </nav>
                
            </div>
                    
             </div>
        </>
        
    )
}
export default Navbar;