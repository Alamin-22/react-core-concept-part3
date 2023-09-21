import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

// eslint-disable-next-line react/prop-types
const Dad = ({assets}) => {
    return (
        <div>
            <h1 className="text-center">Dady:</h1>
            <section className="flex">
                <Myself assets={assets}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;