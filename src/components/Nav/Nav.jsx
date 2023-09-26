import { NavLink } from "react-router-dom";


const Nav = () => {
    const link=<>
     <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/donations'>Donation</NavLink></li>
      <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
   
    
    
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <img src="https://i.ibb.co/nLXtdJB/Logo.png" className="h-[40px]"></img>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {link}  
    </ul>
  </div>
</div>
        </div>
    );
};

export default Nav;