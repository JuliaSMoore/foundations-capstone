import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/pages/Home';
import Add from './components/pages/Add';
import Search from './components/pages/Search';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/add', element: <Add />},
  {path: 'search', element: <Search />},
])


function App() {
  return (
   <RouterProvider router={router} />
 
  );
}

export default App;
