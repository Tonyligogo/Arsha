import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
