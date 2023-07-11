import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Page";
import { lazy, Suspense } from "react";

const Detail = lazy(() => import('./Detail'));

const router = createBrowserRouter([{
  path: "",
  element: <Home></Home>
}, {
  path: "person/:id",
  element: <Suspense><Detail></Detail></Suspense>
}])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;

