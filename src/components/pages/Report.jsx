import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SidebarContext } from "../context/SidebarContext";

const Reports = () => {
  const { data } = useContext(SidebarContext);
  const chartData = data.kpi?.map((item) => ({
    label: item.label,
    value: Number(item.value.replace(/[₹,]/g, "")),
  }));
  return (
    <div
      style={{
        width: "100%",
        height: 500,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="label" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey="value" name="Sales" radius={[10, 10, 0, 0]} />

          <Bar dataKey="purchase" name="Purchase" radius={[10, 10, 0, 0]} />
          <Bar dataKey="purchase" name="stock" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Reports;
