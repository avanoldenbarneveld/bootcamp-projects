import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";
import { fetchWithAuth } from "../utils/fetchWithAuth"; // ✅ Import fetchWithAuth
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState(""); // ✅ Fix username → email
  const [type, setType] = useState("user"); // ✅ Fix role → type

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetchWithAuth(`${API_BASE_URL}/user`);
        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("❌ Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetchWithAuth(`${API_BASE_URL}/user/${id}`, { method: "DELETE" }); // ✅ Fixed /users → /user
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("❌ Error deleting user:", error);
    }
  };

  const handleAddUser = async () => {
    if (!email.trim()) {
      alert("Email cannot be empty");
      return;
    }

    try {
      const response = await fetchWithAuth(`${API_BASE_URL}/user`, { // ✅ Fixed /users → /user
        method: "POST",
        headers: { "Content-Type": "application/json" }, // ✅ Added missing headers
        body: JSON.stringify({ email, type }), // ✅ Fixed username → email & role → type
      });

      if (!response.ok) throw new Error("Failed to add user");

      const newUser = await response.json();
      setUsers([...users, newUser]);
      setEmail("");
    } catch (error) {
      console.error("❌ Error adding user:", error);
    }
  };

  return (
    <div>
      <h1>Users</h1>

      <div>
        <input 
          type="text" 
          placeholder="Enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} ({user.type})  {/* ✅ Fixed username → email & role → type */}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
