import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Page";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./i18n";
import {useTranslation} from 'react-i18next';

const Detail = lazy(() => import('./Detail'));

const router = createBrowserRouter([{
  path: "",
  element: <Home></Home>
}, {
  path: "person/:id",
  element: <Suspense><Detail></Detail></Suspense>
}])

const App = () => {
  const { i18n } = useTranslation()

  return (
    <Provider store={store}>
      
      <button className="btn" onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button className="btn" onClick={() => i18n.changeLanguage('fr')}>FR</button>


      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;

