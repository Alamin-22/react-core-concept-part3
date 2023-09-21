import { useContext } from "react";
import { AssetContext } from "../GrandPa/Grandpa";


// eslint-disable-next-line react/prop-types
const Specialperson = ({assets}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h1 className="text-center">special person has: <br /> {assets}</h1>
            <h1 className="text-center">has Also : <br /> {gift}</h1>
        </div>
    );
};

export default Specialperson;