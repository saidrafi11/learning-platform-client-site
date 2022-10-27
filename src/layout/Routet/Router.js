import { createBrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog";
import CategoryCard from "./Components/CategoryCard";
import Checkout from "./Components/Checkout";
import CourseCard from "./Components/CourseCard";
import CourseDetails from "./Components/CourseDetails";
import Courses from "./Components/Courses";
import ErrorPage from "./Components/ErrorPage";
import FAQ from "./Components/FAQ";
import Login from "./Components/Login";
import PrivateRoute from "./Components/Privateroute";
import Register from "./Components/Register";
import Main from "./Pages/Main";



export const routes = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element: <Courses></Courses>,
            loader:()=> fetch('https://learning-platform-server-beta.vercel.app/courses'),
            children:[
                {
                    path:'/',
                    element:<CategoryCard></CategoryCard>,
                    loader: ()=>fetch('https://learning-platform-server-beta.vercel.app/course-categories')

                }
            

            ]
        },
        {
            path:'blog',
            element:<Blog></Blog>
            
        },
        {
            path:'FAQ',
            element:<FAQ></FAQ>
        },
        {
            path:'/course/:id',
            element: <CourseDetails></CourseDetails>,
            loader:({params})=>fetch(`https://learning-platform-server-beta.vercel.app/course/${params.id}`)
        },
        {
            path:'signup',
            element:<Register></Register>
        },
        {
            path:'signin',
            element:<Login></Login>
        },
        {
            
                path:'/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params})=>fetch(`https://learning-platform-server-beta.vercel.app/checkout/${params.id}`)
            
        
        }
    ]
}
])