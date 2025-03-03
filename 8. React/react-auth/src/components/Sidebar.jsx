import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Sidebar.css";

function Sidebar() {
  const { user, logout } = useContext(AuthContext);

  console.log("Current user:", user);

  if (!user) return null; // Don't show sidebar if not logged in

  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        {user?.type === "admin" && <li><Link to="/users">Users</Link></li>}
        {user?.type === "teacher" && <li><Link to="/students">Students</Link></li>}
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
