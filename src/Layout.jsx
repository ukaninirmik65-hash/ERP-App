import { useContext } from "react";
import Header from "./components/Header.jsx";
import LoginSignup from "./components/LoginSignup.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { SidebarContext } from "./components/context/SidebarContext.jsx";
export const Layout = ({ children }) => {
  const { login } = useContext(SidebarContext);
  return (
    <>
      {login === false ? (
        <LoginSignup />
      ) : (
        <>
          <Header />
          <div className="layout-body">
            <Sidebar />

            <main className="main-content">{children}</main>
          </div>
        </>
      )}
    </>
  );
};
