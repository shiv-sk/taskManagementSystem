import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl, getAndDeleteReq } from "../apiCalls";

export default function AllTasks(){
    const {projectId} = useParams();
    const [isLoading , setIsLoading] = useState(false);
    const [allTasks , setAllTasks] = useState([]);

    useEffect(()=>{
        if(!projectId){
            return;
        }
        const allTasksOfUser = async()=>{
            setIsLoading(true);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/task/get/alltasks/${projectId}` , "get");
                // console.log(response);
                if(response.status === "success"){
                    setAllTasks(response.data ||  []);
                }
            } catch (error) {
                // console.error("error from getAllTasks! " , error);
                const errorMessage = error?.response?.data?.message || "server Error! ";
                console.error("error from getAllTasks! " , errorMessage);
            }finally{
                setIsLoading(false);
            }
        }
        allTasksOfUser();
    } , [projectId]);

    return(
        <div className="min-h-screen px-6 py-8">
            <div className="mb-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">All Tasks</h1>
                <button className="btn btn-neutral">
                    <Link to={`/newtask/${projectId}`}>Add New Task</Link>
                </button>
            </div>
            <div className="mb-6 flex justify-center flex-wrap items-center gap-2.5">
                {
                    isLoading ? "Processing..." :
                    allTasks && allTasks.length > 0 ? allTasks.map((task)=>(
                        <div className="card bg-neutral text-neutral-content w-96" key={task._id}>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{task.title || "Task-Title!"}</h2>
                                <p>{task.description || "Task Description!"}</p>
                                <div className="card-actions justify-end">
                                <Link to={`/task/${task._id}`}><button className="btn btn-neutral shadow-lg">More</button></Link>
                                <button className="btn btn-neutral shadow-lg">Assign</button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <p className="text-lg">No Tasks for Project!</p>
                    )
                }
                
            </div>
        </div>
    )
}