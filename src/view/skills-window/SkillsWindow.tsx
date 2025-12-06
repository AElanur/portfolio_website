import './SkillsWindow.css';
import MenuComponent from "../../components/menu/MenuComponent.tsx";
import {useEffect, useState} from "react";
import type {PortfolioData} from "../types/portfolio.tsx/Skill.Programming.tsx";

function SkillsWindow(){
    const [data, setData] = useState<PortfolioData | null>(null);
    useEffect(() => {
        fetch('/data/assets.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((fetchedData: PortfolioData) => {
                setData(fetchedData);
            })
            .catch(err => {
                console.error('Fetch error:', err);
            });
    }, []);

    let languages: string | null = data?.portfolio.skills['programming-languages'];

    return (
        <div className={"w-screen h-screen block"}>
            <div className={"content h-full"}>
                <MenuComponent></MenuComponent>
                <div className={"flex flex-row justify-between pt-5"}>
                    <div className={"flex flex-col space-y-2 w-full"}>
                        <span>
                            About me
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                    <div className={"flex flex-col w-full"}>
                        <span>
                            Skills
                        </span>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SkillsWindow;
