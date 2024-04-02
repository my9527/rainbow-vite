import { createBrowserRouter, RouterProvider, RouteObject, Navigate  } from "react-router-dom";
import React from "react";
import BaseLayout from "@/layouts";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        Component: React.lazy(() => import("@/pages/Index")),
      },
      {
        path: "/create",
        Component: React.lazy(() => import("@/pages/Create")),
        
      },
     
      {
        path: "*",
        element: <Navigate to="/" replace/>
      }
    ],
  },
  
];

const router = createBrowserRouter(routeConfig);

function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default Router;
