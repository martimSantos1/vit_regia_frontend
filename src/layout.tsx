import { Outlet } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import AppMenu from "./components/menus/appMenu";
import AppFooter from "./components/footer/footer";

const Layout = () => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
    if (!isSidePanelOpen) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }
  };

  const closeSidePanel = () => {
    setSidePanelOpen(false);
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <AppMenu
        toggleSidePanel={toggleSidePanel}
        closeSidePanel={closeSidePanel}
        isSidePanelOpen={isSidePanelOpen}
      />
      <div className="content-container">
        <Outlet />
      </div>
      <AppFooter />
    </>
  );
};

export default Layout;