import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ContactPage from "./contact/page.jsx";
import PlacesPage from "./places/page.jsx";
import CommentsPage from "./comments/page.jsx";
import Loginpage from "./login/page.jsx";

// Crear las rutas
const router = createBrowserRouter([
  {
    path: "/", // ruta raíz
    element: <App />, // componente principal
  },
  {
    path: "/contact",
    element: <ContactPage />, // Página de contacto
  },
  {
    path: "/places",
    element: <PlacesPage />, // Página de lugares
  },
  {
    path: "/comments",
    element: <CommentsPage />, // Página de comentarios
  },
  {
    path: "/login",
    element: <Loginpage />, // Página de login
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
