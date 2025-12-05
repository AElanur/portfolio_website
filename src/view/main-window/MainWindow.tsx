import './MainWindow.css'
import MenuComponent from "../../components/menu/MenuComponent.tsx";

function MainWindow() {
    return (
        <div className={"w-screen h-screen block"}>
            <div className={"content h-full"}>
                <MenuComponent></MenuComponent>
                <div className={"flex flex-row h-full justify-between"}>
                                <div className={"flex flex-col justify-around w-full"}>
                                    <div className={"flex flex-col"}>
                                                <span className={"bigHeader align-middle title-placement"}>
                                                    Talon
                                                </span>
                                        <span>
                                                    —— Fullstack developer, Netherlands
                                                </span>
                                    </div>
                                </div>
                                <div className={"flex flex-col justify-around text-left w-full"}>
                                    <div className={"flex flex-col"}>
                                            <span className={"text-sm"}>
                                                — Introduction
                                            </span>
                                        <span className={"introductionText"}>
                                                Focused on quality designed websites, and applications that you can count on.
                                            </span>
                                    </div>

                                </div>
                            </div>
            </div>
        </div>
    );
}

export default MainWindow
