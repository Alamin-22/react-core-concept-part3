import { useContext } from "react";
import { AssetContext } from "../GrandPa/Grandpa";

// eslint-disable-next-line react/prop-types
const Cousin = ({name}) => {
    const gift= useContext(AssetContext)
    return (
        <div>
            {name}
            <p>has: {gift}</p>
        </div>
    );
};

export default Cousin;