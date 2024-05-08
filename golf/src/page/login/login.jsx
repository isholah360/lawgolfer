// Login.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { login } from "../../component/redux/authSlice";
// Import the login action from the slice

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login by checking localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      dispatch(login(storedUser)); // Dispatch the login action to set the Redux state
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="compl-form">
        <div className="form-logcover">
      <form onSubmit={handleLogin}>
        <h2 style={{textAlign:"center", color:"white"}}>Login</h2>
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
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="the-regbutton">
            <button type="submit">Login</button>
          </div>
          <div className="the-regbutton">
            <button type="submit">Continue with Google</button>
          </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
