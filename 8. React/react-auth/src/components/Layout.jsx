import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* ✅ This correctly renders Dashboard, Users, etc. */}
      </div>
    </div>
  );
}

export default Layout;
