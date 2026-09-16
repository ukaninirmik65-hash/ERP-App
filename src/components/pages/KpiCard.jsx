import { useContext, useEffect, useState } from "react";
import Inventory from "./Inventory";
import { LuUsersRound } from "react-icons/lu";
import { PiCurrencyInrBold, PiWarningFill } from "react-icons/pi";
import { FaBoxes, FaOpencart } from "react-icons/fa";
import { ClockLoader } from "react-spinners";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { SidebarContext } from "../context/SidebarContext";
import { StokSummary } from "./StokSummary";

const Kpi = () => {
  const { loding, data } = useContext(SidebarContext);


  return (
    <>
      {loding ? <ClockLoader color="#000000" /> : <StokSummary />}
      <Inventory data={data} />
    </>
  );
};

export default Kpi;
