import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './layout/Routet/Router';

function App() {
  return (
    <div >
    <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
