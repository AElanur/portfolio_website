import './LanguageWindow.css';
import MenuComponent from "../../components/menu/MenuComponent.tsx";

function LanguageWindow() {
    return (
        <div className={"w-screen h-screen block"}>
            <div className={"content h-full"}>
                <MenuComponent></MenuComponent>
            </div>
            test
        </div>
    )
}

export default LanguageWindow;
