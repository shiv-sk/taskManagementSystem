import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl, getAndDeleteReq } from "../apiCalls";

export default function AllPorojects(){
    const {userId} = useParams();
    const [isLoading , setIsLoading] = useState(false);
    const [allProjects , setAllProjects] = useState([]);
    useEffect(()=>{
        const allProjectsOfUser = async()=>{
            if(!userId){
                return;
            }
            setIsLoading(true);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/project/get/allprojects/${userId}` , "get")
                // console.log(response);
                if(response.status === "success"){
                    setAllProjects(response?.data || []);
                }
            } catch (error) {
                // console.error("error from allProjects-Page! " , error);
                const errorMessage = error?.response?.data?.message || "server Error! ";
                console.error("error from allProjects-Page! " , errorMessage);
            }finally{
                setIsLoading(false);
            }
        }
        allProjectsOfUser();
    } , [userId]);
    return(
        <div className="min-h-screen px-6 py-8">
            <div className="mb-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">All Projects</h1>
                <button className="btn btn-neutral">
                    <Link to={`/newproject/${userId}`}>Add New Project</Link>
                </button>
            </div>
            <div className="mb-6 flex justify-center flex-wrap items-center gap-2.5">
                {
                    isLoading ? "Processing..." :
                    allProjects && allProjects.length > 0 ? allProjects.map((project)=>(
                        <div className="card bg-neutral text-neutral-content w-96" key={project._id}>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{project.title || "project-Title"}</h2>
                                <p>{project.description || "Project Description!"}</p>
                                <div className="card-actions justify-end">
                                <Link to={`/project/${project._id}`}><button className="btn btn-neutral shadow-lg">More</button></Link>
                                <Link to={`/alltasks/${project._id}`}><button className="btn btn-neutral shadow-lg">AllTasks</button></Link>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <p>Create NewProject!</p>
                    )
                }
                
            </div>
        </div>
    )
}