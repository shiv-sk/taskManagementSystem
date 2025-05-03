import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { baseUrl, postAndPatchReq } from "../apiCalls"
import { toast } from "react-toastify";

export default function NewProject(){
    const {userId} = useParams();
    const navigate = useNavigate();
    const [isLoading , setIsLoading] = useState(false);
    const [ProjectData , setProjectData] = useState({
        title:"",
        description:"",
        owner:userId ? userId : null
    })

    const handleOnChange = (e)=>{
        setProjectData({...ProjectData , [e.target.name]:e.target.value})
    }
    
    const handleNewProject = async(e)=>{
        e.preventDefault();
        if(!userId){
            return;
        }
        setIsLoading(true);
        try {
            const response = await postAndPatchReq(`${baseUrl}/project/new` , "post" , ProjectData);
            // console.log(response);
            if(response.status === "success"){
                navigate(`/allprojects/${userId}`);
            }
        } catch (error) {
            // console.error("error from newProject! " , error?.response?.data?.message);
            const errorMessage = error?.response?.data?.message || "server Error! "
            toast.error(errorMessage)
        }finally{
            setIsLoading(false);
        }
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4 py-5">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-center font-bold text-2xl mb-1.5">NewProject</h1>
                <div className="">
                    <form className="flex flex-col gap-4" onSubmit={handleNewProject}>
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
                    <button 
                    type="submit" 
                    className="btn-neutral btn w-full text-white text-lg font-semibold" 
                    disabled={isLoading}>{isLoading ? "Processing.." : "NewProject"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}