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
        path:"Login",
        element:<Login/>
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
        path:"task/:taskId",
        element:<TaskDetail/>
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
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
