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
import ProtectedRoute from './utils/ProtectedRoute.jsx';

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
        element:(<ProtectedRoute><AssignTask/></ProtectedRoute>)
        
      },
      {
        path:"allprojects/:userId",
        element:(<ProtectedRoute><AllPorojects/></ProtectedRoute>)
      },
      {
        path:"mytasks/:userId",
        element:(<ProtectedRoute><MyAssignedTask/></ProtectedRoute>)
      },
      {
        path:"alltasks/:projectId",
        element:(<ProtectedRoute><AllTasks/></ProtectedRoute>)
      },
      {
        path:"editproject/:projectId",
        element:(<ProtectedRoute><EditProject/></ProtectedRoute>)
      },
      {
        path:"task/:taskId",
        element:(<ProtectedRoute><TaskDetail/></ProtectedRoute>)
      },
      {
        path:"edittask/:taskId",
        element:(<ProtectedRoute><EditTask/></ProtectedRoute>)
      },
      {
        path:"project/:projectId",
        element:(<ProtectedRoute><ProjectDetail/></ProtectedRoute>)
      },
      {
        path:"newtask/:projectId",
        element:(<ProtectedRoute><NewTask/></ProtectedRoute>)
      },
      {
        path:"newproject/:userId",
        element:(<ProtectedRoute><NewProject/></ProtectedRoute>)
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
