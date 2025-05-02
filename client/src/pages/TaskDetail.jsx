export default function TaskDetail(){
    return(
        <div className="min-h-screen flex justify-center items-center flex-col gap-2.5">
            <h1 className="text-lg font-bold">Task-Detail</h1>
            <div className="py-8 px-10 rounded-lg shadow-lg bg-gray-600 space-y-5">
                <h1 className="text-lg font-semibold text-white">Task-Title</h1>
                <p className="font-medium text-white">Task-Description</p>
                <div className="flex flex-wrap justify-around items-center gap-1.5">
                    <span className="font-light text-lg text-white">CreatedAt:Date</span>
                    <span className="font-light text-lg text-white">Status:Status</span>
                    <span className="font-light text-lg text-white">AssignedTo:AssignedTo</span>
                    <span className="font-light text-lg text-white">CompletedAt:CompletedAt</span>
                </div>
                <div className="flex flex-wrap justify-around items-center gap-1.5">
                    <button className="btn btn-neutral shadow-lg">AssignTo</button>
                    <button className="btn btn-neutral shadow-lg">Edit</button>
                    <button className="btn btn-neutral shadow-lg">Delete</button>
                </div>
            </div>
        </div>
    )
}