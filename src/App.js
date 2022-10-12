import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home';
import QuizPage from './Components/QuizPage';
import Blog from './Components/Blog';
import Stat from './Components/Stat';
import ErrorPage from './Components/ErrorPage';
import Discription from './Components/Discription';

const router = createBrowserRouter([
{
  path:'/',
  element:<Root></Root>,
  errorElement: <ErrorPage></ErrorPage>,
  loader:()=> fetch ('https://openapi.programming-hero.com/api/quiz'),
  children:
  [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'home',
      element:<Home></Home>
    },
    {
      path:'quiz',
      element:<Home></Home>
    },
    {
      path:'quiz/:id',
      element:<QuizPage></QuizPage>,
      loader:({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    },
    {
      path:'blog',
      element:<Blog></Blog>
    },
    {
      path:'statistics',
      element:<Stat></Stat>
    },
    {
      path:'description',
      element:<Discription></Discription>
    }

    

  ]
}



])

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
