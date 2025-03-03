import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";  // ✅ Use jwtDecode instead of useJwt
import { API_BASE_URL } from "../config";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Restore session if a token is in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token)?.user;  // ✅ Use jwtDecode
        if (decodedUser) {
          setUser(decodedUser);
        } else {
          throw new Error("Invalid token structure");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);

  // Authenticate user & store token
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL.replace('/api', '')}/token`, {  // ✅ Correct
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        alert("Invalid credentials");
        return;
      }

      const { token } = await response.json();
      localStorage.setItem("token", token);

      // Decode the token and extract user data
      const decodedUser = jwtDecode(token)?.user;  // ✅ Use jwtDecode instead of useJwt

      if (decodedUser) {
        setUser(decodedUser);
        navigate("/dashboard");
      } else {
        throw new Error("Invalid token structure");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Try again.");
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
