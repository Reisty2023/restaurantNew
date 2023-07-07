import React from "react";
import { useRoutes } from "react-router-dom";
import Waitlist from "./Waitlist";
import Login from "./Waitlist/Pages/Auth/Login";
import Register from "./Waitlist/Pages/Auth/Register";
import Pricing from "./Waitlist/Pages/Pricing";
import GetStarted from "./Waitlist/Pages/GetStarted";
import {
  BasicInformation,
  Experience,
  Gallery,
  Menu,
  Offerings,
  ReservationHours,
  RestaurantProfile,
  GuestBook,
  Tables,
  SharedLayout,
} from "./Dashboard/Pages/Dashboard";
import Dashboard from "./Dashboard/Pages/Dashboard/Dashboard";
import QuickSetup from "./Dashboard/Components/RestaurantProfile/QuickSetup";
import FloorPlan from "./Dashboard/Components/RestaurantProfile/FloorPlan";

export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Waitlist />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/get-started",
      element: <GetStarted />,
    },
    {
      path: "/quick-setup",
      element: <QuickSetup />,
    },
    {
      path: "/floor-plan",
      element: <FloorPlan />,
    },
    {
path:'/dashboard',
element:<Dashboard/>
    },
    {
        element:<SharedLayout/>,
        children:[
      
            {
                path:'/dashboard/restaurantprofile',
                element:<RestaurantProfile/>
            },
            {
                path:'/dashboard/basic-information',
                element:<BasicInformation/>
            },
            {
                path:'/dashboard/offerings',
                element:<Offerings/>
            },
            {
                path:'/dashboard/experience',
                element:<Experience/>
            },
            {
                path:'/dashboard/gallery-photos',
                element:<Gallery/>
            },
            {
                path:'/dashboard/guest-book',
                element:<GuestBook/>
            },
            {
                path:'/dashboard/menu',
                element:<Menu/>
            },
            {
                path:'/dashboard/table-rooms',
                element:<Tables/>
            },
            {
                path:'/dashboard/reservation-hours',
                element:<ReservationHours/>
            },

        ]
    }
  ]);
  return element;
}
