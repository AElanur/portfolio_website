import { createBrowserRouter } from "react-router"
import MainWindow from "./view/main-window/MainWindow.tsx";
import LanguageWindow from "./view/language-window/LanguageWindow.tsx";
import SkillsWindow from "./view/skills-window/SkillsWindow.tsx";
import ContactWindow from "./view/contact-window/ContactWindow.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainWindow
    },
    {
        path: "/language",
        Component: LanguageWindow
    },
    {
        path: "/skills",
        Component: SkillsWindow
    },
    {
        path: "/contact",
        Component: ContactWindow
    },
]);