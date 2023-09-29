import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error);
        })
    }



  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input className="mb-4 w-3/4 py-2 px-4 border-2 rounded-lg border-blue-500" type="email" name="email" id="" placeholder="Email Address"/>
          <br />
          <input className="mb-4 w-3/4 py-2 px-4 border-2 rounded-lg border-blue-500" type="password" name="password" id="" placeholder="Your Password"/>
          <br />
          <input className="btn btn-secondary mb-4 w-3/4" type="submit" name="Register" id="" />
        </form>
      </div>
    </div>
  );
};

export default Register;
