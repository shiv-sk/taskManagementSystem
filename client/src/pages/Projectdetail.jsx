export default function ProjectDetail(){
    return(
        <div className="min-h-screen flex justify-center items-center flex-col gap-2.5">
            <h1 className="text-lg font-bold">Project-Detail</h1>
            <div className="py-8 px-10 rounded-lg shadow-lg bg-gray-600 space-y-5">
                <h1 className="text-lg font-semibold text-white">Project-Title</h1>
                <p className="font-medium text-white">Project-Description</p>
                <div className="flex flex-wrap justify-around items-center gap-1.5">
                    <span className="font-light text-lg text-white">Owner:username</span>
                    <span className="font-light text-lg text-white">CreatedAt:Date</span>
                </div>
                <div className="flex flex-wrap justify-around items-center gap-1.5">
                    <button className="btn btn-neutral shadow-lg">AllTasks</button>
                    <button className="btn btn-neutral shadow-lg">Edit</button>
                    <button className="btn btn-neutral shadow-lg">Delete</button>
                </div>
            </div>
        </div>
    )
}