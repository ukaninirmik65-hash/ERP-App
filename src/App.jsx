import { ToastContainer } from "react-toastify";
import { SidebarProvider } from "./components/context/SidebarContext";
import { Deshbord } from "./components/Deshbord";
import { Layout } from "./Layout.jsx";
export function App() {
  return (
    <>
      <SidebarProvider>
        <Layout>
          <Deshbord />
        </Layout>
        <ToastContainer />
      </SidebarProvider>
    </>
  );
}
