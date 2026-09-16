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

const menuItems = [
  {
    name: "Menu",
    icon: <MdMenu />,
  },
  {
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "CRM",
    icon: <MdPeople />,
  },
  {
    name: "Sales",
    icon: <MdShoppingCart />,
  },
  {
    name: "Purchase",
    icon: <MdShoppingBag />,
  },
  {
    name: "Inventory",
    icon: <MdInventory />,
  },
  {
    name: "Accounting",
    icon: <MdAccountBalance />,
  },
  {
    name: "Manufacturing",
    icon: <MdFactory />,
  },
  {
    name: "Reports",
    icon: <MdBarChart />,
  },
  {
    name: "Users",
    icon: <MdPerson />,
  },
  {
    name: "Settings",
    icon: <MdSettings />,
  },
];
const Sidebar = () => {
  const { isCollapsed, setIsCollapsed, activePage, setActivePage } =
    useContext(SidebarContext);
    
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <a
            href="#"
            key={item.name}
            onClick={() => {
              if (item.name === "Menu") {
                setIsCollapsed(!isCollapsed);
                return;
              }
              setActivePage(item.name);
            }}
            className={`sidebar-item ${activePage === item.name ? "active" : ""}
          ${item.name === "Menu" ? "menu-item" : ""}
          `}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.name}</span>
          </a>
        ))}
      </nav>
      <Profile isCollapsed={isCollapsed} />
    </aside>
  );
};

export default Sidebar;
