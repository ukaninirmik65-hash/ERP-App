import { useContext } from "react";
import { MdHome, MdChevronRight } from "react-icons/md";
import { SidebarContext } from "./context/SidebarContext";

const Breadcrumbs = () => {
  const { activePage } = useContext(SidebarContext);
  return (
    <div className="breadcrumbs">
      <div className="breadcrumb-item">
        <MdHome />
        <span>Home</span>
      </div>

      <MdChevronRight className="breadcrumb-arrow" />

      <div className="breadcrumb-item">
        <span>{activePage}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
