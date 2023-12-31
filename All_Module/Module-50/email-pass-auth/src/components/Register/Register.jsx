import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    const name = e.target.name.value;
    console.log(email, password, accepted, name);

    //reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError(
        "Password should be at least 6 characters (auth/weak-password)."
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    }else if(!accepted){
        setRegisterError('Please accept our terms and conditions');
        return
    }

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created successfully");

        //update proffile
        updateProfile(result.user, {
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"

        })
        .then(() => console.log('PROFFILE UPDATEDED'))
        .catch()

        //send verification email:
        sendEmailVerification(result.user)
        .then(()=> {
            alert('Please check your email and verify your account')
        })
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
        <input
            className="mb-4 w-full py-2 px-4 border-2 rounded-lg border-blue-500"
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            required
          />
          <br />
          <input
            className="mb-4 w-full py-2 px-4 border-2 rounded-lg border-blue-500"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <br />
          <div className="mb-4 relative">
            <input
              className=" w-full py-2 px-4 border-2 rounded-lg border-blue-500"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="Your Password"
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <div className="mb-4">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>
          <br />
          <input
            className="btn btn-secondary mb-4 w-full"
            type="submit"
            name="Register"
            id=""
          />
        </form>
        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
