import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

export default function Homepage(){
    const {user} = useAuth();
    return(
        <div className="min-h-screen">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-xl lg:text-5xl font-bold">Welcome To TaskManagement!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    {
                        user && user._id ? (
                            <Link to={`/allprojects/${user._id}`}><button className="btn btn-primary">Projects</button></Link>
                        ) : 
                        (
                            <Link to={"/login"}><button className="btn btn-primary">Login</button></Link>
                        )
                    }
                    
                    </div>
                </div>
            </div>
        </div>
    )
}