import Specialperson from "../SpecialPerson/Specialperson";

// eslint-disable-next-line react/prop-types
const Myself = ({assets}) => {
    return (
        <div>
            <h1 className="text-center">Myself:</h1>
            <section>
                <Specialperson assets={assets} ></Specialperson>
            </section>
        </div>
    );
};

export default Myself;