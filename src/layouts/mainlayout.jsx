import Navigation from "../components/navigation/navigation.component";
import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import "./mainlayout.styles.scss";

const MainLayout = () => {
  return (
    <Fragment>
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default MainLayout;
