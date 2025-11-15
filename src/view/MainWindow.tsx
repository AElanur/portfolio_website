import './MainWindow.css'

function MainWindow() {
    return (
        <div className={"w-screen h-screen block"}>
            <div className={"content h-full"}>
                <div className={"flex flex-row text-2xl"}>
                    <span>
                        Portfolio
                    </span>
                    <div className={"flex flex-row justify-end space-x-5 w-full"}>
                        <span>Languages</span>
                        <span>Skills</span>
                        <span>Contact</span>
                    </div>
                </div>

                <div className={"flex flex-row"}>
                    <div className={"flex flex-col h-full"}>
                        <span className={"bigHeader align-middle"}>
                            Talon
                        </span>
                        <span>
                            —— Fullstack developer, Netherlands
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainWindow
