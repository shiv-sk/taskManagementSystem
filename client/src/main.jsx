import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import AllPorojects from './pages/AllProject.jsx';
import NewTask from './pages/NewTask.jsx';
import AllTasks from './pages/AllTasks.jsx';
import TaskDetail from './pages/TaskDetail.jsx';
import ProjectDetail from './pages/Projectdetail.jsx';
import NewProject from './pages/NewProject.jsx';
import MyAssignedTask from './pages/MyAssignedTask.jsx';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext.jsx';
import EditProject from './pages/EditProject.jsx';
import AssignTask from './pages/AssignTask.jsx';
import EditTask from './pages/EditTask.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Homepage/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"assigntask/:taskId",
        element:<AssignTask/>
      },
      {
        path:"allprojects/:userId",
        element:<AllPorojects/>
      },
      {
        path:"mytasks/:userId",
        element:<MyAssignedTask/>
      },
      {
        path:"alltasks/:projectId",
        element:<AllTasks/>
      },
      {
        path:"editproject/:projectId",
        element:<EditProject/>
      },
      {
        path:"task/:taskId",
        element:<TaskDetail/>
      },
      {
        path:"edittask/:taskId",
        element:<EditTask/>
      },
      {
        path:"project/:projectId",
        element:<ProjectDetail/>
      },
      {
        path:"newtask/:projectId",
        element:<NewTask/>
      },
      {
        path:"newproject/:userId",
        element:<NewProject/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </AuthProvider>
  </StrictMode>,
)
