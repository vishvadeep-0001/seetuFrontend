import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Quiz from "./components/Quiz";

import AddStudent from "./components/AddStudent";
import AddCollege from "./components/AddCollege";
import CollegePage from "./components/CollegePage";
import Courses from "./components/Courses";
import CollegeCompare from "./components/CollegeCompare.jsx";
import Carrer from "./components/Career.jsx";
import Blog from "./components/Blog.jsx";
import Resources from "./components/Resources.jsx";
import Search from "./components/Search.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import AdminColleges from "./components/Admin/AdminColleges.jsx";
import AdminStudent from "./components/Admin/AdminStudent.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/colleges",
    element: <CollegePage />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/compare",
    element: <CollegeCompare />,
  },
  {
    path: "/carrers",
    element: <Carrer />,
  },
  { path: "/blog", element: <Blog /> },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/search",
    element: <Search />,
  },

  {
    path: "/newStudent",
    element: <AddStudent />,
  },

  // Admin Routes
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/adminStudent",
    element: <AdminStudent />,
  },
  {
    path: "/admin/colleges",
    element: <AdminColleges />,
  },
  {
    path: "/admin/addCollege",
    element: <AddCollege />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default App;
