import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { baseUrl, postAndPatchReq } from "../apiCalls";
import { toast } from "react-toastify";

export default function NewTask(){
    const {projectId} = useParams();
    const navigate = useNavigate();

    const [taskData , setTaskData] = useState({
        title:"",
        description:"",
    })
    const [isLoading , setIsLoading] = useState(false);

    const handleOnChange = (e)=>{
        setTaskData({...taskData , [e.target.name]:e.target.value})
    }

    const handleNewTask = async(e)=>{
        e.preventDefault();
        if(!projectId){
            return;
        }
        setIsLoading(true);
        try {
            const response = await postAndPatchReq(`${baseUrl}/task/new/${projectId}` , "post" , taskData);
            // console.log(response);
            if(response.status === "success"){
                navigate(`/alltasks/${projectId}`);
            }
        } catch (error) {
            // console.log(error);
            const errorMessage = error.response?.data?.message || "server Error! ";
            toast.error(errorMessage)
        }finally{
            setIsLoading(false);
        }
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4 py-5">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-center font-bold text-2xl mb-1.5">NewTask</h1>
                <div className="">
                    <form className="flex flex-col gap-4" onSubmit={handleNewTask}>
                    <label htmlFor="title" className="text-sm font-medium mb-1">Title</label>    
                    <input
                    name="title" 
                    type="text"
                    id="title" 
                    placeholder="TaskA" 
                    className="input w-full"
                    value={taskData.title}
                    onChange={handleOnChange} 
                    required
                    />
                    <label htmlFor="description" className="text-sm font-medium mb-1">Description</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    className="textarea w-full" 
                    value={taskData.description} 
                    onChange={handleOnChange} 
                    placeholder="Description" 
                    required></textarea>
                    <button 
                    type="submit" 
                    className="btn-neutral btn w-full text-white text-lg font-semibold"
                    disabled={isLoading}>{isLoading ? "Processing..." : "NewTask"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}