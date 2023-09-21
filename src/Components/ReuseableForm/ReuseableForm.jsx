
// eslint-disable-next-line react/prop-types
const ReuseableForm = ({formTitle, handleSubmit ,SubmitBtnText="Submit" , children}) => {
    
    const handleLocalSubmit=e=>{
        e.preventDefault();
        const data={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }

    return (
        <div className="relative">
            {children}
            <form onSubmit={handleLocalSubmit} className="text-center m-[30vh]">
                <input className="w-52 h-10 bg-white text-black font-medium mb-3
                 p-5" name="name" type="text" placeholder="Name" /> <br />
                <input className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" name="email" type="email" placeholder="xyz@gmail.com" />
                <br />
                <input className="w-52 h-10 mb-3 bg-white text-black font-medium p-5" type="password" placeholder="Password" name="password" /> <br />
                <input type="submit" className="btn btn-primary" value={SubmitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;