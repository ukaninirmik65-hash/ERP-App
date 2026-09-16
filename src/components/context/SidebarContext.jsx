import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [notificationCount, setNotificationCount] = useState(0);
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const fetchData = "/Data.json";

  async function GetData(api) {
    try {
      setLoding(true);
      let respons = await fetch(api);
      if (!respons.ok) {
        setLoding(true);
        throw new Error("data note found");
      }
      const data = await respons.json();
      setData(data);
      setLoding(false);
    } catch (error) {
      setLoding(true);
      throw new Error(`${error}`);
    }
  }

  useEffect(() => {
    GetData(fetchData);
  }, []);

  function HeandleSearch(value) {
    setSearch(value);
  }
  return (
    <SidebarContext
      value={{
        isCollapsed,
        setIsCollapsed,
        activePage,
        setActivePage,
        search,
        HeandleSearch,
        notificationCount,
        setNotificationCount,
        data,
        setData,
        setLoding,
        GetData,
        loding,
      }}
    >
      {children}
    </SidebarContext>
  );
};
