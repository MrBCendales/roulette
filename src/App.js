import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/mainlayout";
import SecondPage from "./routes/second-page/second-page.component";
import AdminLayout from "./layouts/adminLayout.jsx";
import Dashboard from "./routes/admin/dashboard.component";
import Settings from "./routes/admin/settings.component";
import HomePage from "./routes/home/homepage.component";
import Roulette from "./routes/roulette/roulette.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="roulette" element={<Roulette />} />
          <Route path="dice" element={<SecondPage />} />
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
