import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/pages/Home';
import Add from './components/pages/Add';
import Search from './components/pages/Search';
import Read from './components/pages/Read';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/add', element: <Add />},
  {path: 'search', element: <Search />},
  {path: '/read/:id', element: <Read />},
])


function App() {
  return (
   <RouterProvider router={router} />
 
  );
}

export default App;
