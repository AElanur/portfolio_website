import './MenuComponent.css';
import { Link } from "react-router-dom";

function MenuComponent() {
    return(
        <div className={"flex flex-row text-2xl justify-between"}>
            <div className={"w-full"}>
                <Link to={"/"}>
                    Portfolio
                </Link>
            </div>

            <div className={"flex flex-row space-x-8 w-full"}>
                <Link
                    to={"/language"}
                    className={"transform transition-transform duration-300 hover:scale-110"}>Languages</Link>
                <Link
                    to={"/skills"}
                    className={"transform transition-transform duration-300 hover:scale-110"}>Skills</Link>
                <Link
                    to={"/contact"}
                    className={"transform transition-transform duration-300 hover:scale-110"}>Contact</Link>
            </div>
        </div>
    )
}

export default MenuComponent