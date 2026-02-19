import { Route, Routes } from "react-router-dom";

import MainLayout from "./layout/mainlayout.jsx";
import SecondPage from "../../src/routes/second-page/second-page.component.jsx";
import AdminLayout from "./layout/adminLayout.jsx";
import Dashboard from "./routes/admin/dashboard.component.jsx";
import Settings from "./routes/admin/settings.component.jsx";
import HomePage from "./components/home/homepage.component.jsx";
import Roulette from "./routes/roulette/roulette.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="roulette" element={<Roulette />} />
          <Route path="payment-reminder" element={<SecondPage />} />
          <Route path="simple-kitchen" element={<SecondPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
