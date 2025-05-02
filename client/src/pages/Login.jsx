import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login(){
    const handleLogin = ()=>{}
    const [loginData , setLoginData] = useState({
        email:"",
        password:""
    })
    const handleOnChange = ()=>{}
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-center font-bold text-2xl mb-1.5">Login</h1>
                <div className="">
                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                    <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>    
                    <input
                    name="email" 
                    type="email"
                    id="email" 
                    placeholder="exp@email.com" 
                    className="input w-full"
                    value={loginData.email}
                    onChange={handleOnChange} 
                    required
                    />
                    <label htmlFor="password" className="text-sm font-medium mb-1">Password</label>
                    <input
                    name="password" 
                    type="password"
                    id="password" 
                    placeholder="pass@123" 
                    className="input w-full"
                    value={loginData.password}
                    onChange={handleOnChange} 
                    required/>
                    <p> Create a new account <Link to={"/register"}>
                    <span className="hover:border-b-2 hover:text-blue-500">Register</span></Link></p>
                    <button type="submit" 
                    className="btn-neutral btn w-full text-white text-lg font-semibold">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}