import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ContactPage from "./contact/Contacto.jsx";
import PlacesPage from "./places/page.jsx";
import CommentsPage from "./comments/page.jsx";
import Loginpage from "./login/page.jsx";
import PagLogueados from "./pagLogueados.jsx";
import Comments2Page from "./comments2/page.jsx";

// NUEVAS PÁGINAS
import ParaisosAcuaticos from "./places2/paraisosAcuaticos/Page.jsx";
import LugaresMontanosos from "./places2/lugaresMontanosos/page.jsx";
import TerritoriosDelCafe from "./places2/territoriosDelCafe/Page.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/contact2",
    element: <ContactPage />,
  },
  {
    path: "/places",
    element: <PlacesPage />,
  },
  {
    path: "/comments",
    element: <CommentsPage />,
  },
  {
    path: "/comments2",
    element: <Comments2Page />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/pagLogueados",
    element: <PagLogueados />,
  },

  // 🌿 NUEVAS RUTAS DEL MENÚ LUGARES
  {
    path: "/paraisosAcuaticos",
    element: <ParaisosAcuaticos />,
  },
  {
    path: "/lugaresMontanosos",
    element: <lugaresMontanosos />,
  },
  {
    path: "/territoriosDelCafe",
    element: <TerritoriosDelCafe />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
