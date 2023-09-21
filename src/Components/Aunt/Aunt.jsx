import Cousin from "../Cousin/Cousin";

const Aunt = () => {
    return (
        <div>
            <h1 className="text-center">Aunt:</h1>
            <section className="flex">
                <Cousin name={"Millon"}></Cousin>
                <Cousin name={"Adib"}></Cousin>
            </section>
        </div>
    );
};

export default Aunt;