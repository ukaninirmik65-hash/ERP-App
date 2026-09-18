import {
  MdDashboard,
  MdPeople,
  MdShoppingCart,
  MdShoppingBag,
  MdInventory,
  MdAccountBalance,
  MdFactory,
  MdBarChart,
  MdPerson,
  MdSettings,
  MdMenu,
} from "react-icons/md";
import Profile from "./Profile";
import { useContext } from "react";
import { SidebarContext } from "./context/SidebarContext";
import { NavLink } from "react-router";
const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "CRM",
    path: "/crm",
    icon: <MdPeople />,
  },
  {
    name: "Sales",
    path: "/sales",
    icon: <MdShoppingCart />,
  },
  {
    name: "Purchase",
    path: "/purchase",
    icon: <MdShoppingBag />,
  },
  {
    name: "Inventory",
    path: "/inventory",
    icon: <MdInventory />,
  },
  {
    name: "Accounting",
    path: "/accounting",
    icon: <MdAccountBalance />,
  },
  {
    name: "Manufacturing",
    path: "/manufacturing",
    icon: <MdFactory />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <MdBarChart />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <MdPerson />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <MdSettings />,
  },
];
const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(SidebarContext);

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <nav className="sidebar-menu">
        <button
          className="sidebar-item menu-item"
          style={{ border: "none" }}
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <MdMenu className="sidebar-icon" />
          <span className="sidebar-text"></span>
        </button>
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) => {
              return `sidebar-item ${isActive ? "active" : ""}`;
            }}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <Profile isCollapsed={isCollapsed} />
    </aside>
  );
};

export default Sidebar;
