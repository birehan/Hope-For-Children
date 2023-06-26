import { setAuthUser } from "@/features/slices/authSlices";
import { useDispatch } from "react-redux";

const Login = () => {

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
      
      />
      <input
        type="password"
        placeholder="Password"
      />
      <button >Login</button>
    </div>
  );
};

export default Login;
