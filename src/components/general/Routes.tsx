import { createBrowserRouter, RouterProvider } from "react-router";
import Constants from "../../constants.ts";
import Main from "../../pages/Main.tsx";
import NotFound from "../../pages/NotFound.tsx";
import Services from "../../pages/Services.tsx";
import AppWrapper from "./AppWrapper.tsx";

const AppRoutes = () => {

    const router = createBrowserRouter(
        [
          {
            path: "/",
            element: <AppWrapper />,
            children: [
              { path: "/", element: <Main id={Constants.MAIN_PAGE_ID} /> },
              { path: "/services", element: <Services id={Constants.SERVICES_PAGE_ID} /> },
              { path: "*", element: <NotFound id={Constants.NOT_FOUND_PAGE_ID} /> },
            ],
          },
        ],
        {
          future: {
            v7_startTransition: true,
          },
          basename: "/Fumitrade"
        }
      );

    return <RouterProvider router={router} />;
};

export default AppRoutes;