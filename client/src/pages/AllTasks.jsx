import { Link, useParams } from "react-router-dom";

export default function AllTasks(){
    const {projectId} = useParams();
    return(
        <div className="min-h-screen px-6 py-8">
            <div className="mb-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">All Tasks</h1>
                <button className="btn btn-neutral">
                    <Link to={`/newtask/${projectId}`}>Add New Task</Link>
                </button>
            </div>
            <div className="mb-6 flex justify-center flex-wrap items-center gap-2.5">
                <div className="card bg-neutral text-neutral-content w-96">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Task-Title!</h2>
                        <p>Task Description!</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-neutral shadow-lg">More</button>
                        <button className="btn btn-neutral shadow-lg">AssignTo</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content w-96">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Task-Title!</h2>
                        <p>Task Description!</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-neutral shadow-lg">More</button>
                        <button className="btn btn-neutral shadow-lg">AssignTo</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content w-96">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Task-Title!</h2>
                        <p>Task Description!</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-neutral shadow-lg">More</button>
                        <button className="btn btn-neutral shadow-lg">AssignTo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}