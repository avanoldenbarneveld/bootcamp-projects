import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");  // ✅ Change from username to email
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);  // ✅ Send email instead of username
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"  // ✅ Change label from Username to Email
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
}

export default LoginPage;
