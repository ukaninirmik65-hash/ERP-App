import { useContext,} from "react";
import Inventory from "./Inventory";
import { ClockLoader } from "react-spinners";
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
