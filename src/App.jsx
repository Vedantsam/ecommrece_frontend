import "./App.css";
import HomePage from "./customer/pages/HomePage/HomePage";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Direct route for /login */}
      <Route path="/login" element={<HomePage />} />

      {/* Admin routes */}
      <Route path="/admin/*" element={<AdminRouters />} />

      {/* Customer routes */}
      <Route path="/*" element={<CustomerRouters />} />

      {/* Optional fallback: redirect unknown routes to /login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
