import { Route, Routes } from "react-router-dom";

import MainLayout from "./layout/mainLayout/mainlayout.jsx";
import AdminLayout from "./layout/adminLayout/adminLayout.jsx";
import Dashboard from "./routes/admin/dashboard.component.jsx";
import HomePage from "./routes/home/homepage.component.jsx";
import Roulette from "./routes/projects/roulette/roulette.component.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="roulette" element={<Roulette />} />
          <Route path="payment-reminder" element={<Roulette />} />
          <Route path="simple-kitchen" element={<Roulette />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
