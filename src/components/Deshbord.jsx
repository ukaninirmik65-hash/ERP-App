import { useContext } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Crm from "./pages/Crm";
import { SidebarContext } from "./context/SidebarContext";
import Sales from "./pages/Sales";
import Kpi from "./pages/KpiCard";
import Reports from "./pages/Report";
import { StokSummary } from "./pages/StokSummary";
import Inventory from "./pages/Inventory";
import Purchase from "./pages/Purchase";
import { Manufacturing } from "./pages/Manufacturing";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";

export const Deshbord = () => {
  const { activePage, data } = useContext(SidebarContext);
  return (
    <>
      <Breadcrumbs />

      <div className="dashboard-header">
        <h1>{activePage}</h1>
      </div>

      <div className="dashboard-content">
        {activePage === "Dashboard" && <StokSummary data={data} />}
        {activePage === "Dashboard" && <Reports />}
        {activePage === "CRM" && <Crm />}
        {activePage === "Sales" && <Sales />}
        {activePage === "Inventory" && <Kpi />}
        {activePage === "Reports" && <Reports />}
        {activePage === "Accounting" && <Inventory data={data} />}
        {activePage === "Purchase" && <Purchase />}
        {activePage === "Manufacturing" && <Manufacturing />}
        {activePage === "Users" && <Users />}
        {activePage === "Settings" && <Settings />}
        {/* Tables */}
      </div>
    </>
  );
};
