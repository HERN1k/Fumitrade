import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Constants from "../../constants.ts";
import AppWrapper from "./AppWrapper.tsx";
import Loading from "../general/Loading.tsx";
const NotFound        = lazy(() => import("../../pages/NotFound.tsx"));
const Main            = lazy(() => import("../../pages/Main.tsx"));
const Services        = lazy(() => import("../../pages/Services.tsx"));
const AboutUs         = lazy(() => import("../../pages/AboutUs.tsx"));
const KnowledgeBase   = lazy(() => import("../../pages/KnowledgeBase.tsx"));
const Contacts        = lazy(() => import("../../pages/Contacts.tsx"));

const AppRoutes = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppWrapper />,
        children: [ 
          {
            path: "/",
            element: <Main id={Constants.MAIN_PAGE_ID} />,
          },
          {
            path: "/services",
            element: <Services id={Constants.SERVICES_PAGE_ID} />,
          },
          {
            path: "/about-us",
            element: <AboutUs id={Constants.ABOUT_US_PAGE_ID} />,
          },
          {
            path: "/knowledge-base",
            element: <KnowledgeBase id={Constants.KNOWLEDGE_BASE_PAGE_ID} />,
          },
          {
            path: "/contacts",
            element: <Contacts id={Constants.CONTACTS_PAGE_ID} />,
          },
          {
            path: "*",
            element: <NotFound id={Constants.NOT_FOUND_PAGE_ID} />,
          },
        ],
      }
    ],
    {
      future: {
        v7_startTransition: true
      },
      basename: "/Fumitrade"
    }
  );

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>);
};

export default AppRoutes;