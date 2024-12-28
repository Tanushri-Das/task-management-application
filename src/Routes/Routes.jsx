import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import TaskForm from "../Pages/TaskForm/TaskForm";
import TaskList from "../Pages/TaskList/TaskList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/task-form",
        element: <TaskForm />,
      },
      {
        path: "/task-lists",
        element: <TaskList />,
      },
    ],
  },
]);
export default routes;
