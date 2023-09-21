import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2 className="text-center">Uncle:</h2>
            <section className="flex">
                <Cousin name={"ALamin"}></Cousin>
                <Cousin name={"Fahim"}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;