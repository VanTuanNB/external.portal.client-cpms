import { createBrowserRouter } from "react-router-dom";
import App from '@src/App.jsx';

import About from "../pages/about/About";
import News from "../pages/news/News";
import ErrorPage from "../pages/common/error/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
              children: [
              { path: "/", element: <About /> },
              { path: "/news-events", element: <News /> },
          ],
    },
  ]);

export default router;
