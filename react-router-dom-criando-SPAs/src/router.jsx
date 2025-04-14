import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/Layout";
import AdminHome from "./pages/admin/Admin";
import Home from "./pages/admin/Home";
import Products from "./pages/admin/Products";
import Cart from "./pages/admin/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />
    }, {
      path: "products",
      element: <Products />
    }, {
      path: "cart",
      element: <Cart />
    }]
  },
  {
    path: "/admin",
    element: <AdminHome />
  }
])

export default router;