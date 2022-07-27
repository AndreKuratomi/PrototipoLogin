import { Routes, Route } from "react-router-dom";

import ChangePassword from "../pages/ChangePassword";
import Login from "../pages/Login";
import DashboardInternals from "../pages/DashboardInternals";
import NotFound from "../components/NotFound";
import Email from "../pages/Email";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/dashboardinternals" element={<DashboardInternals />} />
      <Route path="/email" element={<Email />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
