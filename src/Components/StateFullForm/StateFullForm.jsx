import { useState } from "react";

const StateFullForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [error, setError] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be 6 character or longer")
        }
        else {
            setError("")
            console.log(name, email, password)
        }
    }
    const handleNameChange = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center m-[30vh]">
                <input onChange={handleNameChange} className="w-52 h-10 bg-white text-black font-medium mb-3
                 p-5" name="name" type="text" placeholder="Name" /> <br />
                <input onChange={handleEmailChange} className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" name="email" type="email" placeholder="xyz@gmail.com" />
                <br />
                <input onChange={handlePasswordChange} className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" type="password" placeholder="Password" name="password" /> <br />
                <button className="btn btn-primary">Submit</button>

                {
                    error && <p className="text-red-700">{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;