import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
export const Layout = ({ children}) => {
  return (
    <>
      <Header />
      <div className="layout-body">
        <Sidebar  />
      
        <main className="main-content">{children}</main>
      </div>
    </>
  );
};
