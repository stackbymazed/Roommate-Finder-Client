import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Root from "../Layouts/Root/Root";
import FindRoommate from "../Components/FindRoommate/FindRoommate";
import BrowseListing from "../Components/BrowseListing/BrowseListing";
import MyListings from "../Components/MyListings/MyListings";
import SignUp from "../Layouts/SignUp/SignUp";
import LogIn from "../Layouts/LogIn/LogIn";
import Error from "../Components/Error/Error";
import PrivateRoute from "../Contexts/PrivateRoute";
import PostDetails from "../Components/PostDetails/PostDetails";
import Update from "../Components/Update/Update";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch("http://localhost:3000/roommates"),
                Component: Home,
            },
            {
                path: "/findRoommate",
                element: <PrivateRoute>
                    <FindRoommate></FindRoommate>
                </PrivateRoute>
            },
            {
                path: "/browseListing",
                Component: BrowseListing
            },
            {
                path: "/myListings",
                element: <PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>
            },
            {
                path: "/signup",
                Component: SignUp
            },
            {
                path: "/login",
                Component: LogIn
            },
            {
                path: "/update/:id",
                loader: ({params}) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <PrivateRoute>
                    <Update></Update>
                </PrivateRoute>
            },
            {
                path: "/roommates/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <PrivateRoute>
                    <PostDetails></PostDetails>
                </PrivateRoute>
            }
        ]
    },
]);