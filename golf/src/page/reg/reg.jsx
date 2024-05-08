import "../login/login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../component/redux/authSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = { username, password };
    dispatch(login(user));
  };

  return (
    <div className="compl-form">
      <div className="form-logcover">
        <form onSubmit={handleRegister}>
          <h2 style={{textAlign:"center", color:"white"}}>Register</h2>
          <div>
            <label>Username</label>
            <br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
    
          <div>
            <label >Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="the-regbutton">
            <button type="submit">Register</button>
          </div>
          <div className="the-regbutton">
            <button type="submit">Continue with Google</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
