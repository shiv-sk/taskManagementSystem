import { useParams } from "react-router-dom"
import { baseUrl, getAndDeleteReq, postAndPatchReq } from "../apiCalls";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function EditTask(){
    const {taskId} = useParams();
    const [isLoading , setIsLoading] = useState(false);
    const [task , setTask] = useState({
        title:"",
        description:""
    });

    const handleOnChange = (e)=>{
        setTask({...task , [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        if(!taskId){
            return;
        }
        setIsLoading(true);
        const getTask = async()=>{
            try {
                const response = await getAndDeleteReq(`${baseUrl}/task/${taskId}`);
                console.log(response);
                if(response.status === "success"){
                    setTask(response?.data);
                }
            } catch (error) {
                const errorMessage = error.response?.data?.message || "server Error! ";
                toast.error(errorMessage)
            }finally{
                setIsLoading(false);
            }
        }
        getTask();
    } , [taskId]);

    const handleEditTask = async(e)=>{
        e.preventDefault();
        if(!taskId){
            return;
        }
        setIsLoading(true);
        try {
            const response = await postAndPatchReq(`${baseUrl}/task/${taskId}` , "patch" , {title:task.title , description:task.description});
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
                <h1 className="text-center font-bold text-2xl mb-1.5">EditTask</h1>
                <div className="">
                    <form className="flex flex-col gap-4" onSubmit={handleEditTask}>
                    <label htmlFor="title" className="text-sm font-medium mb-1">Title</label>    
                    <input
                    name="title" 
                    type="text"
                    id="title" 
                    placeholder="Project One" 
                    className="input w-full"
                    value={task.title}
                    onChange={handleOnChange} 
                    required
                    />
                    <label htmlFor="description" className="text-sm font-medium mb-1">Description</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    className="textarea w-full" 
                    value={task.description} 
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