import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import "./index.scss";
import ErrorPage from "./pages/common/error/ErrorPage";
import News from "./pages/news/News";
import App from "./App";
import About from "./pages/about/About";
import Academic from "./pages/academic/Academic";
import Admission from "./pages/admission/Admission";
import Auth from "./pages/auth/Auth";
import Course from "./pages/courses/Course";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <About /> },
      { path: "/about", element: <About /> },
      { path: "/news-events", element: <News /> },
      { path: "/academic", element: <Academic /> },
      { path: "/admission", element: <Admission /> },
      { path: "/login", element: <Auth activeTab="login" /> },
      { path: "/register", element: <Auth activeTab="register" /> },
      {
        path: "/course-registration",
        element: (
          <ProtectedRoute>
            <Course activeTab="course-registration" />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-courses",
        element: (
          <ProtectedRoute>
            <Course activeTab="my-courses" />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);