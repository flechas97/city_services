import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/layout.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from './comps/layout/header';
import Footer from './comps/layout/footer';

// Crear el enrutador con rutas
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Puedes agregar más rutas aquí */}
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
    </Route>
  )
);

// Crear el contenedor principal (root) y renderizar el app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <main>
      {/* Aquí está el Header y Footer global */}
      <Header />
      {/* Aquí va el RouterProvider */}
      <RouterProvider router={router} />
      <Footer />
    </main>
  </React.StrictMode>
);

// Si deseas medir el rendimiento, puedes hacerlo aquí
reportWebVitals();
