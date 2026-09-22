import { useContext } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Crm from "./pages/Crm";
import { SidebarContext } from "./context/SidebarContext";
import Sales from "./pages/Sales";
import Kpi from "./pages/KpiCard";
import Reports from "./pages/Report";
import { StokSummary } from "./pages/StokSummary";
import Purchase from "./pages/Purchase";
import { Manufacturing } from "./pages/Manufacturing";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";
import { Route, Routes } from "react-router";
import { Account } from "./pages/Account";
import { Navigate } from "react-router";
import LoginSignup from "./LoginSignup";

export const Deshbord = () => {
  const { data } = useContext(SidebarContext);

  return (
    <>
      <Breadcrumbs />

      <div className="dashboard-content">
        <Routes>
          {/* Default Dashboard */}
          <Route
            path="/dashboard"
            element={
              <>
                <StokSummary data={data} />
                <Reports />
              </>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="inventory" element={<Kpi />} />
          <Route path="reports" element={<Reports />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="accounting" element={<Account />} />
        </Routes>
      </div>
    </>
  );
};
