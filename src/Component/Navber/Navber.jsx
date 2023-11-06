import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png"
import useAuth from "../../hooks/useAuth";


const Navber = () => {


  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log('Sign out')
      })
      .then(err => {
        console.log(err)
      })
  }



  const navlinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/assignment">All Assignment</NavLink></li>
    <li><NavLink to="/myAsgmt">My asgmt</NavLink></li>
    <li><NavLink to="/createAsgmt"> Create asgmt</NavLink></li>
    <li><NavLink to="/submitted"> Submitted asgmt</NavLink></li>

  </>
  return (
    <div>
      <div className="navbar bg-[#DCF2CC]">
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
        {
                            user?.email ?
                                <div className="flex items-center">
                                    <h1 className="mr-3 font-semibold">{user.displayName}</h1>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar dropdown-end">

                                        <div>

                                            <div>
                                            </div>
                                            <div className="w-10 rounded-full">
                                                <div>
                                                    <img className="rounded-full" src={user.photoURL} alt="user.displayName" />
                                                </div>
                                            </div>

                                        </div>
                                    </label>
                                    <button onClick={handleSignOut} className="btn font-semibold bg-[#FF6F61] text-white hover:bg-blue-300 text-base">Log Out</button>
                                </div>
                                :

                                <NavLink to="/login" className="btn font-semibold hover:bg-blue-300 bg-[#FF6F61] text-white text-base">Login</NavLink>
                        }      
        </div>
      </div>
    </div>
  );
};

export default Navber;