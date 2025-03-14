//import HomePage from "./Pages/HomePage";
//import CartPage from "./Pages/CartPage";
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClientProvider} from "@tanstack/react-query"
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import SearchPage from './Pages/SearchPage';
import { MemoizedCartContext } from './Store/CartContext';
import PageLayout from './Pages/PageLayout';
import {query} from "./Store/fetchData";




function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<PageLayout/>,
    children:[
      {path:"/",element:<HomePage/>},
      {path:"/cart",element:<CartPage/>},
      {path:"/categories", element:<SearchPage/>}
    ]
    }   
])


  return (
    <div className="App">   
    <MemoizedCartContext> 
      <QueryClientProvider client={query}>
      <RouterProvider router={router}/>
      </QueryClientProvider>
    </MemoizedCartContext>
    </div>
   
)};

export default App;
