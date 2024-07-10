import Main from "pages/main/Main";
import App from "App";
import { createBrowserRouter } from "react-router-dom";
import Plan from "pages/plan/Plan";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Main/>,
        },
        {
          path: "map",
          element: <Plan/>,
        },
      ],
    },
  ]);