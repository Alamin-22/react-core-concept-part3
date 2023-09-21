
const Form = () => {


    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center m-[30vh]">
                <input className="w-52 h-10 bg-white text-black font-medium mb-3
                 p-5" name="name" type="text" placeholder="Name" /> <br />
                <input className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" name="email" type="email" placeholder="xyz@gmail.com" />
                <br />
                <input className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" type="password" placeholder="Password" name="password"/> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;