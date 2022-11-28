
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Phone from './Components/Home/Phones/Phone';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/phones')
        },
        {
          path: '/phones/:id',
          element:<Phone></Phone>
        }
      ]
    }
  ])
  return (
    <div className="App">
        <RouterProvider
          router={router}
        ></RouterProvider>
    </div>
  );
}

export default App;
