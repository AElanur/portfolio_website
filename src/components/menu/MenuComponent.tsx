function MenuComponent() {
    return(
        <div className={"flex flex-row text-2xl justify-between"}>
            <div className={"w-full"}>
                        <span>
                            Portfolio
                        </span>
            </div>
            <div className={"flex flex-row space-x-8 w-full"}>
                <span className={"transform transition-transform duration-300 hover:scale-110"}>Languages</span>
                <span className={"transform transition-transform duration-300 hover:scale-110"}>Skills</span>
                <span className={"transform transition-transform duration-300 hover:scale-110"}>Contact</span>
            </div>
        </div>
    )
}

export default MenuComponent