import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    // console.log(googleLogin)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const handleLogin = (login) => {
      console.log(login)
        login()
        
        .then(res => {
            console.log(res.user);
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
        })
        .catch(error => {
            console.log(error);
        })

    }
  return (
    <div className="p-8">
          <div className="divider"></div>
      <div>
        <button onClick={() => handleLogin(googleLogin)} className="btn">
          <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
