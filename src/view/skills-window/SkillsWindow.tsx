import './SkillsWindow.css';
import MenuComponent from "../../components/menu/MenuComponent.tsx";

function SkillsWindow(){
    return (
        <div className={"w-screen h-screen block"}>
            <div className={"content h-full"}>
                <MenuComponent></MenuComponent>
            </div>
        </div>
    )
}


export default SkillsWindow;
