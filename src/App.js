import React from "react"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditProfile from "./pages/EditProfile/EditProfile";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const page = [
  {
    path: '/',
    element: <Dashboard/>
  },
  {
    path: '/edit-profile',
    element: <EditProfile/>
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: page
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
