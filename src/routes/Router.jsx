import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Home from "../pages/Home.jsx";
import Configuration from "../pages/Configuration.jsx";
import Queue from "../pages/Queue.jsx";
import NoPage from "../pages/NoPage.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="configuration" element={<Configuration />} />
                    <Route path="queue" element={<Queue />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}