import { IoNotifications } from "react-icons/io5";
import Profile from "./Profile";
import Search from "./Search";
import { SidebarContext } from "./context/SidebarContext";
import { useContext } from "react";

const Header = () => {
  const { notificationCount } = useContext(SidebarContext);
  return (
    <header className="top-header">
      {/* Logo */}
      <div className="header-logo">
        <div className="logo-icon">
          <img src="/erp.png" alt="" />
        </div>
        <span>ERP</span>
      </div>

      <Search />
      {/* Right Side */}
      <div className="header-actions">
        {/* Notification */}
        <button className="notification-btn">
          <span>
            <IoNotifications />
          </span>
          <span className="notification-badge">{notificationCount}</span>
        </button>

        {/* User Profile */}
        <Profile />
      </div>
    </header>
  );
};

export default Header;
