import UseInputState from "../UseInputState";

const HookForm = () => {

    // const [name, handleCameChange]= UseInputState("Alamin")
    const emailState= UseInputState("alamin@gmail.com")

    const handleSubmit=e=>{
        console.log("form data", emailState.value)
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center m-[30vh]">
                {/* <input value={name} onChange={handleCameChange} className="w-52 h-10 bg-white text-black font-medium mb-3
                 p-5" name="name" type="text" placeholder="Name" /> <br /> */}
                <input {...emailState} className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" name="email" type="email" placeholder="xyz@gmail.com" />
                <br />
                <input className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" type="password" placeholder="Password" name="password"/> <br />
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;