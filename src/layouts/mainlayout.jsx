import Navigation from "../routes/navigation/navigation.component";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet /> {/* Pages render here */}
    </>
  );
};

export default MainLayout;
