import Navigation from "../routes/navigation/navigation.component";
import { Outlet } from "react-router-dom";

import "./mainlayout.styles.scss";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
