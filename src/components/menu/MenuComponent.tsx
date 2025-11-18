import './MenuComponent.css';

function MenuComponent() {
    return(
        <div className={"flex flex-row text-2xl justify-between"}>
            <div className={"w-full"}>
                        <span>
                            Portfolio
                        </span>
            </div>
            <div className={"flex flex-row space-x-8 w-full"}>
                <a
                    href={"/language"}
                    className={"transform transition-transform duration-300 hover:scale-110"}>Languages</a>
                <a
                    href={"/skills"}
                    className={"transform transition-transform duration-300 hover:scale-110"}>Skills</a>
                <a
                    href={"/contact"}
                    className={"transform transition-transform duration-300 hover:scale-110"}>Contact</a>
            </div>
        </div>
    )
}

export default MenuComponent