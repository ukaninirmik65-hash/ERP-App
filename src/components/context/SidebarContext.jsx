import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [search, setSearch] = useState("");
  const [notificationCount, setNotificationCount] = useState(0);
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [login, setLogin] = useState(false);
  const fetchData = "/Data/Data.json";
  const handleLogout = () => {
    setLogin(false);
  };
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
        search,
        HeandleSearch,
        notificationCount,
        setNotificationCount,
        data,
        setData,
        setLoding,
        GetData,
        loding,
        login,
        setLogin,
        handleLogout,
      }}
    >
      {children}
    </SidebarContext>
  );
};
