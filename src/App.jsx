import './App.css'
import Grandpa from './Components/GrandPa/Grandpa'
// import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/Hooks/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFullForm from './Components/StateFullForm/StatefullForm'

// import Form from './Components/Form/Form'

function App() {


  // const handleSingUpSubmit = data => {
  //   console.log("sing up Data",data)
  // }
  // const handleUpdateProfileSubmit = data => {
  //   console.log("Update Profile data", data)
  // }


  return (
    <>



      <Grandpa></Grandpa>


      {/* <Form></Form> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sing Up For Free"} handleSubmit={handleSingUpSubmit}>
        <div className='w-52 text-center mx-auto'>
          <h1 className='text-3xl'>Sing Up</h1>
          <p>Please Sing Up right Now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={"Profile Update"} handleSubmit={handleUpdateProfileSubmit} SubmitBtnText='Update'>
        <div className='w-72 text-center mx-auto'>
          <h2 className='text-3xl'>Update Your Profile</h2>
          <p>Always Keep Updating your profile</p>
        </div>
      </ReuseableForm> */}
    </>
  )
}

export default App
