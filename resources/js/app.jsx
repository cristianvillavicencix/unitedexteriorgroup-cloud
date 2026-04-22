import "../css/app.css";
import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import ReactDOM from "react-dom/client";
import Layout from "./Layouts/Layout";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "United Exteriors";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx"),
        ),
    setup({ el, App, props }) {
        return ReactDOM.createRoot(el).render(
            <Layout>
                <App {...props} />
            </Layout>,
        );
    },
    progress: {
        color: "#ff6b35",
    },
});
