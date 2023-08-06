import "./styles.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./Components/Home";
import Galerija from "./Components/Galerija";
import AboutUs from "./Components/AboutUs";
import Kontakt from "./Components/Kontakt";

const router = createBrowserRouter([
  { path: '/', element: <Home></Home> },
  { path: '/galerija', element: <Galerija></Galerija> },
  { path: '/about', element: <AboutUs></AboutUs> },
  { path: '/contact', element: <Kontakt></Kontakt> }
])

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
