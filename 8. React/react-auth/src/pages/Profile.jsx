import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>No user logged in</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Email:</strong> {user.email}</p> {/* ✅ Fix username → email */}
      <p><strong>Type:</strong> {user.type}</p>   {/* ✅ Fix role → type */}
    </div>
  );
}

export default Profile;
