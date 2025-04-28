import { createBrowserRouter } from "react-router-dom";
import StockItems from "./pages/StockItems/stockItems.jsx";
import NewItems from "./pages/NewItems/newItems.jsx";
import EditItems from "./pages/EditItems/EditItems.jsx"
import ItemProfile from "./pages/ItemProfile/ItemProfile.jsx"
import Home from "./pages/Home/Home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/stockItems",
        element: <StockItems />
    },
    {
        path: "/newItems",
        element: <NewItems/>
    },
    {
        path: "/EditItems",
        element: <EditItems/>
    },
    {
        path: "/ItemProfile",
        element: <ItemProfile/>
    }
])

export default router;
