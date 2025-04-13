import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Packages from "./components/Packages";

const App = ()=>{
    return(
        <div className="Body_of_code">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    );
}

const Approuter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/components/Contact",
                element:<Contact/>
            },
            {
                path:"/components/packages",
                element:<Packages/>
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);