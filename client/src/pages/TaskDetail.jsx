import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { baseUrl, getAndDeleteReq } from "../apiCalls";
import { toast } from "react-toastify";

export default function TaskDetail(){
    const {taskId} = useParams();
    const [isLoading , setIsLoading] = useState(false);
    const [task , setTask] = useState(null);

    useEffect(()=>{
        const getTask = async()=>{
            if(!taskId){
                return;
            }
            setIsLoading(true);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/task/${taskId}`);
                // console.log(response);
                if(response.status === "success"){
                    setTask(response.data || null)
                }
            } catch (error) {
                // console.log(error);
                const errorMessage = error.response?.data?.message || "server Error! ";
                toast.error(errorMessage)
            }finally{
                setIsLoading(false);
            }
        }
        getTask();
    } , [taskId]);

    return(
        <div className="min-h-screen flex justify-center items-center flex-col gap-2.5">
            <h1 className="text-lg font-bold">Task-Detail</h1>
            <div className="py-8 px-10 rounded-lg shadow-lg bg-gray-600 space-y-5">
                {
                    isLoading ? "Processing..." :
                    task ? (
                        <>
                            <h1 className="text-lg font-semibold text-white">{task.title || "Task-Title"}</h1>
                            <p className="font-medium text-white">{task.description || "Task-Description"}</p>
                            <div className="flex flex-wrap justify-around items-center gap-1.5">
                                <span className="font-light text-lg text-white">
                                    CreatedAt:{new Date(task.createdAt).toLocaleDateString()}
                                </span>
                                <span className="font-light text-lg text-white">Status:{task.status}</span>
                                <span className="font-light text-lg text-white">AssignedTo:
                                    {task?.assignedTo ? task.assignedTo : "N/A"}
                                </span>
                                <span className="font-light text-lg text-white">completedAt:
                                    {task?.completedAt ? new Date(task.completedAt).toLocaleDateString() : "N/A"}
                                </span>
                            </div>
                            <div className="flex flex-wrap justify-around items-center gap-1.5">
                                <button className="btn btn-neutral shadow-lg">Assign</button>
                                <button className="btn btn-neutral shadow-lg">Edit</button>
                                <button className="btn btn-neutral shadow-lg">Delete</button>
                            </div>
                        </>
                    ) : (<p>Task Not Found!</p>)
                }
                
            </div>
        </div>
    )
}