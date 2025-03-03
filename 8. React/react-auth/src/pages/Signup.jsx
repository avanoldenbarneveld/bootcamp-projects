import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../data/mockData";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Mock adding a new user (in a real app, send to backend)
    const newUser = { id: mockUsers.length + 1, username, role };
    mockUsers.push(newUser);
    
    alert(`User ${username} registered successfully!`);

    // Redirect back to login
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="user">User</option>
      </select>
      <button onClick={handleSignup}>Register</button>
    </div>
  );
}

export default Signup;
