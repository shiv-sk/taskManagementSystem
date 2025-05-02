import { useState } from "react"
import { useParams } from "react-router-dom"

export default function NewProject(){
    const handleLogin = ()=>{}
    const [ProjectData , setProjectData] = useState({
        title:"",
        description:""
    })
    const handleOnChange = (e)=>{
        setProjectData({...ProjectData , [e.target.name]:e.target.value})
    }
    const {userId} = useParams();
    console.log("userId from new Project! " , userId);
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-center font-bold text-2xl mb-1.5">NewProject</h1>
                <div className="">
                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                    <label htmlFor="title" className="text-sm font-medium mb-1">Title</label>    
                    <input
                    name="title" 
                    type="text"
                    id="title" 
                    placeholder="Project One" 
                    className="input w-full"
                    value={ProjectData.title}
                    onChange={handleOnChange} 
                    required
                    />
                    <label htmlFor="description" className="text-sm font-medium mb-1">Description</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    className="textarea w-full" 
                    value={ProjectData.description} 
                    onChange={handleOnChange} 
                    placeholder="Project-Description" 
                    required></textarea>
                    <button type="submit" 
                    className="btn-neutral btn w-full text-white text-lg font-semibold">NewProject</button>
                    </form>
                </div>
            </div>
        </div>
    )
}