import Main from "pages/main/Main";
import App from "App";
import { createBrowserRouter } from "react-router-dom";
import KaKaoMap from "pages/Map/KaKaoMap";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "",
          element: <Main/>,
        },
        {
          path: "map",
          element: <KaKaoMap/>,
        },
      ],
    },
  ]);