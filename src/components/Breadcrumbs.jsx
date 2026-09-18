import { MdHome, MdChevronRight } from "react-icons/md";
import { useLocation } from "react-router";

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
 const fixe = currentPath.split("/").filter(Boolean).join(" ");
  return (
    <div className="breadcrumbs">
      <div className="breadcrumb-item">
        <MdHome />
        <span>Home</span>
      </div>

      <MdChevronRight className="breadcrumb-arrow" />

      <div className="breadcrumb-item">
        <span>{fixe.charAt(0).toUpperCase() + fixe.slice(1)}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
