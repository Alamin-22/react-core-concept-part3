import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./grandpa.css"


export const AssetContext = createContext("Gold")


const Grandpa = () => {

    const assets = "Diamond Ring";

    return (
        <div className="flex grandpa flex-col text-3xl  text-white gap-5 items-center justify-center h-screen">
            <h1 className="text-7xl text-center">Grandpa</h1>
            <AssetContext.Provider value="gold">
                <div className="flex">
                    <Dad assets={assets}></Dad>
                    <Uncle></Uncle>
                    <Aunt></Aunt>
                </div>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;



/* 
1. create a context and export it
2. Add provider for the context with a value
3. usecontext to access value in the context API

*/