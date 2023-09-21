import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef= useRef(null);
    const emailRef= useRef(null);
    const passwordRef= useRef(null);


    useEffect(()=>{
        nameRef.current.focus();
    },[])


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center m-[30vh]">
                <input ref={nameRef} className="w-52 h-10 bg-white text-black font-medium mb-3
                 p-5" name="name" type="text" placeholder="Name" /> <br />
                <input ref={emailRef} className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" name="email" type="email" placeholder="xyz@gmail.com" />
                <br />
                <input ref={passwordRef} className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" type="password" placeholder="Password" name="number" /> <br />
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default RefForm;