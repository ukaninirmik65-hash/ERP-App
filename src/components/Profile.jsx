import { useState } from "react";
const Profile = ({ isCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="profile-wrapper">
      
      <div
        className={`user-profile ${isCollapsed ? "collapsed" : ""}`}
        onClick={handleProfileClick}
      >
      
        <div className="user-avatar">JD</div>{" "}
        <div
          className="user-info"
          style={{ display: isCollapsed ? "none" : "" }}
        >
        
          <span className="user-name">John Doe</span>
          <span className="user-role">Admin</span>
        </div>
      </div>
      {isOpen && (
        <div className="profile-dropdown">
          
          <div className="profile-dropdown-header">
            
            <div className="dropdown-avatar">JD</div>{" "}
            <div>
              
              <h4>John Doe</h4> <span>Admin</span>{" "}
            </div>
          </div>
          <div className="profile-divider"></div>{" "}
          <button className="profile-dropdown-item"> My Profile </button>{" "}
          <button className="profile-dropdown-item"> Account Settings </button>{" "}
          <button className="profile-dropdown-item"> Logout </button>{" "}
        </div>
      )}
    </div>
  );
};
export default Profile;
