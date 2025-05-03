import { useParams } from "react-router-dom"
import { baseUrl, getAndDeleteReq, postAndPatchReq } from "../apiCalls";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function EditProject(){
    const {projectId} = useParams();
    const [isLoading , setIsLoading] = useState(false);
    const [project , setProject] = useState({
        title:"",
        description:""
    });

    const handleOnChange = (e)=>{
        setProject({...project , [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        if(!projectId){
            return;
        }
        setIsLoading(true);
        const getProject = async()=>{
            try {
                const response = await getAndDeleteReq(`${baseUrl}/project/${projectId}`);
                console.log(response);
                if(response.status === "success"){
                    setProject(response?.data);
                }
            } catch (error) {
                const errorMessage = error.response?.data?.message || "server Error! ";
                toast.error(errorMessage)
            }finally{
                setIsLoading(false);
            }
        }
        getProject();
    } , [projectId]);

    const handleEditTask = async(e)=>{
        e.preventDefault();
        if(!projectId){
            return;
        }
        setIsLoading(true);
        try {
            const response = await postAndPatchReq(`${baseUrl}/project/${projectId}` , "patch" , 
                {title:project.title , description:project.description});
            console.log(response);
        } catch (error) {
            const errorMessage = error.response?.data?.message || "server Error! ";
            toast.error(errorMessage)
        }finally{
            setIsLoading(false);
        }
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4 py-5">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-center font-bold text-2xl mb-1.5">EditProject</h1>
                <div className="">
                    <form className="flex flex-col gap-4" onSubmit={handleEditTask}>
                    <label htmlFor="title" className="text-sm font-medium mb-1">Title</label>    
                    <input
                    name="title" 
                    type="text"
                    id="title" 
                    placeholder="Project One" 
                    className="input w-full"
                    value={project.title}
                    onChange={handleOnChange} 
                    required
                    />
                    <label htmlFor="description" className="text-sm font-medium mb-1">Description</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    className="textarea w-full" 
                    value={project.description} 
                    onChange={handleOnChange} 
                    placeholder="Project-Description" 
                    required></textarea>
                    <button 
                    type="submit" 
                    className="btn-neutral btn w-full text-white text-lg font-semibold" 
                    disabled={isLoading}>{isLoading ? "Processing.." : "EditTask"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}