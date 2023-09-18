import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home.tsx";
import PlainCssPage from "./pages/01_plain_css/PlainCssPage.tsx";
import CssBemPage from "./pages/02_css_bem/CssBemPage.tsx";
import CssModulesPage from "./pages/03_css_modules/CssModulesPage.tsx";
import ScssPage from "./pages/04_scss/ScssPage.tsx";
import TailwindPage from "./pages/05_tailwind/TailwindPage.tsx";
import CssInJsPage from "./pages/06_css_in_js/CssInJsPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: "/01plain",
        element: <PlainCssPage />,
    },
    {
        path: "/02cssbem",
        element: <CssBemPage />,
    },
    {
        path: "/03cssmodules",
        element: <CssModulesPage />,
    },
    {
        path: "/04scss",
        element: <ScssPage />,
    },
    {
        path: "/05tailwind",
        element: <TailwindPage />,
    },
    {
        path: "/06cssinjs",
        element: <CssInJsPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
