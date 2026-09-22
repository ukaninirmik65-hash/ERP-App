import { ToastContainer } from "react-toastify";
import {
  SidebarProvider,
} from "./components/context/SidebarContext.jsx";
import { Deshbord } from "./components/Deshbord.jsx";
import { Layout } from "./Layout.jsx";
export function App() {

  return (
    <>
      <SidebarProvider>
        {/* <LoginSignup /> */}
        <Layout>
          <Deshbord  />
        </Layout>
        <ToastContainer />
      </SidebarProvider>
    </>
  );
}
