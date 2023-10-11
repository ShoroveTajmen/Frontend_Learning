import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/StatefulForm/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulFrom from "./components/StatefulForm/StatefulFrom";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign UP", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("Updte profile data", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulFrom></StatefulFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>thi is sign up portion</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Updte Profile</h2>
          <p>this is updte up portion</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
