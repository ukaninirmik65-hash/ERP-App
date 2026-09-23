import { useContext, useState } from "react";
import { SidebarContext } from "./context/SidebarContext";

const Profile = ({ isCollapsed }) => {
  const profileName = JSON.parse(localStorage.getItem("Uses"));
  console.log("profile name", profileName.username);

  const { setLogin } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };

  function handleLogoutBtn() {
    setLogin(false);
    localStorage.removeItem("isLoggedIn");
  }
  return (
    <div className="profile-wrapper">
      <div
        className={`user-profile ${isCollapsed ? "collapsed" : ""}`}
        onClick={handleProfileClick}
      >
        <div className="user-avatar">{profileName.username.slice(0, 2)}</div>
        <div
          className="user-info"
          style={{ display: isCollapsed ? "none" : "" }}
        >
          <span className="user-name">{profileName.username}</span>
          <span className="user-role">Admin</span>
        </div>
      </div>
      {isOpen && (
        <div className="profile-dropdown">
          <div className="profile-dropdown-header">
            <div className="dropdown-avatar">
              {profileName.username.slice(0, 2)}
            </div>
            <div>
              <h4>{profileName.username}</h4> <span>Admin</span>
            </div>
          </div>
          <div className="profile-divider"></div>
          <button className="profile-dropdown-item"> My Profile </button>
          <button className="profile-dropdown-item"> Account Settings </button>
          <button className="profile-dropdown-item" onClick={handleLogoutBtn}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
export default Profile;
