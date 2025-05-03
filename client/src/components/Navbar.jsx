import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar(){
    const {user , logoutUser} = useAuth();
    return(
        <div className="navbar bg-gray-600 shadow-lg">
            {
                user ? (
                    <>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
                                    viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" 
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li className="text-xl font-extrabold"><Link to={`/`}>Home</Link></li>
                                    <li className="text-xl font-extrabold"><Link to={`/allprojects/${user._id}`}>Projects</Link></li>
                                    <li className="text-xl font-extrabold"><Link to={`/mytasks/${user._id}`}>AssignedTasks</Link></li>
                                </ul>
                            </div>
                            <Link 
                            className="btn hidden sm:inline-flex btn-ghost text-xl font-bold 
                            bg-gray-600 shadow-xl text-white">TaskManagementSystem</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                            <li className="text-lg text-white"><Link to={`/allprojects/${user._id}`}>Projects</Link></li>
                            <li className="text-lg text-white"><Link to={`/mytasks/${user._id}`}>AssignedTasks</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <button className="btn hover:shadow-lg text-lg" onClick={logoutUser}>logout</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
                                    viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" 
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                            </div>
                            <Link to={"/"}
                            className="btn hidden sm:inline-flex btn-ghost text-xl font-bold 
                            bg-gray-600 shadow-xl text-white">TaskManagementSystem</Link>
                        </div>
                        <div className="navbar-end">
                            <Link to={"/login"}><button className="btn hover:shadow-lg text-lg">signIn</button></Link>
                        </div>
                    </>
                )
            }
            
        </div>
    )
}