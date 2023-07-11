import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Page";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";

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
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;

