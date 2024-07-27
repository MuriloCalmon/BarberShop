import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Barber } from './pages/barber';
import { Schedule } from './pages/schedule';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },

    {
      path: '/register',
      element: <Register />
    },

    {
      path: '/barber',
      element: <Barber />
    },

    {
      path: '/schedule',
      element: <Schedule />
    }

  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
