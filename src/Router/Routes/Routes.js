import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import OrderReview from "../../pages/OrderReview/OrderReview";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
    {
  path:'/',
  element:<Main></Main>,
  children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/checkout/:id',
      element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
    },
    {
      path:'/orderreview',
      element:<PrivateRoute><OrderReview></OrderReview></PrivateRoute>
    }
  ]
    }
  ])
  export default router;