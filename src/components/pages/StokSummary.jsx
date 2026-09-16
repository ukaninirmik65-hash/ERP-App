import { FaBoxes, FaOpencart } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { PiCurrencyInrBold, PiWarningFill } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import { SidebarContext } from "../context/SidebarContext";
import { useContext } from "react";

export const StokSummary = () => {
  const { data } = useContext(SidebarContext);
  const kpiIcons = [
    LuUsersRound,
    PiCurrencyInrBold,
    FaOpencart,
    FaBoxes,
    VscGraph,
    PiWarningFill,
    MdDoNotDisturbAlt,
  ];
  return (
    <>
      <div className="kpi-grid">
        {data.kpi?.map((val, index) => {
          const KpiIcon = kpiIcons[index];
          const { label, value, growth, id, color } = val;
          return (
            <div className="kpi-card" key={id}>
              <div className="kpi-left">
                <p className="kpi-label">{label}</p>
                <h2 className="kpi-value">{value}</h2>
                <span className="kpi-growth">{growth}</span>
              </div>

              <div className={`kpi-icon kpi-icon-${color}`}>
                <KpiIcon />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
