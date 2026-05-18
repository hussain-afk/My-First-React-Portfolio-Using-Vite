import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Education from "../pages/EducationPage.jsx";
import RootLayout from "./RootLayout.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ProjectPage from "../pages/ProjectPage.jsx";
import AchievementsPage from "../pages/AchivementsPage.jsx";
import Skills from "../pages/Skills.jsx";
import ContactPage from "../pages/ContactPage.jsx";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/achievements" element={<AchievementsPage />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;