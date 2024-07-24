import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Project from './components/Project/Project.jsx'
import GitHub, { githubInfo } from './components/GitHub/GitHub.jsx'
import User from './components/User/User.jsx'
import Resume from './components/Resume/Resume.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='project' element={<Project />} />
      <Route path='resume' element={<Resume />} />
      <Route
        loader={githubInfo}
        path='github'
        element={<GitHub />} />
      <Route path='user/:user' element={<User />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
