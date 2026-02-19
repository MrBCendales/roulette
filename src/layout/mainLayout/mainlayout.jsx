import Header from "./components/header/header.component";
import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Footer from "./components/footer/footer.component";

import "./mainlayout.styles.scss";

const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
