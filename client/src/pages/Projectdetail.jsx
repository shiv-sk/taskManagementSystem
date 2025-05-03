import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { baseUrl, getAndDeleteReq } from "../apiCalls";
import { toast } from "react-toastify";

export default function ProjectDetail(){
    const {projectId} = useParams();
    const [isLoading , setIsLoading] = useState(false);
    const [project , setProject] = useState(null);
    
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

    return(
        <div className="min-h-screen flex justify-center items-center flex-col gap-2.5">
            <h1 className="text-lg font-bold">Project-Detail</h1>
            {
                isLoading ? "Processing..." :
                project ? (
                    <>
                    <div className="py-8 px-10 rounded-lg shadow-lg bg-gray-600 space-y-5">
                        <h1 className="text-lg font-semibold text-white">{project.title || "Project-Title"}</h1>
                        <p className="font-medium text-white">{project.description || "Project-Description"}</p>
                        <div className="flex flex-wrap justify-around items-center gap-1.5">
                            <span className="font-light text-lg text-white">Owner: {project.owner.name || "username"}</span>
                            <span className="font-light text-lg text-white">
                                CreatedAt: {new Date(project.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="flex flex-wrap justify-around items-center gap-1.5">
                            <Link to={`/alltasks/${project._id}`}><button className="btn btn-neutral shadow-lg">AllTasks</button></Link>
                            <button className="btn btn-neutral shadow-lg">Edit</button>
                            <button className="btn btn-neutral shadow-lg">Delete</button>
                        </div>
                    </div>
                    </>
                ) : (
                    <p>Project Not Found!</p>
                )
            }
            
        </div>
    )
}