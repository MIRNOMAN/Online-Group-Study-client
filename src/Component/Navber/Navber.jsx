import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png"


const Navber = () => {
    const navlinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/assignment">Assignment</NavLink></li>
    <li><NavLink to="/myAsgmt">My asgmt</NavLink></li>
    <li><NavLink to="/createAsgmt"> Create asgmt</NavLink></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navlinks}   
      </ul>
    </div>
    <img className="h-[130px] w-[130px]" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink to="/login" className="btn"> Login</NavLink>
  </div>
</div>
        </div>
    );
};

export default Navber;