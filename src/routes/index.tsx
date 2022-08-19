import { Routes, Route } from "react-router-dom";

import ChangePassword from "../pages/ChangePassword";
import DashboardExternals from "../pages/DashboardExternals";
import DashboardInternals from "../pages/DashboardInternals";
import DashboardSingles from "../pages/DashboardSingles";
import Email from "../pages/Email";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";
import Single from "../pages/Single";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/dashboardinternals" element={<DashboardInternals />} />
      <Route path="/dashboardexternals" element={<DashboardExternals />} />
      <Route path="/dashboardsingle" element={<DashboardSingles />}>
        <Route path=":singleId" element={<Single />} />
      </Route>
      <Route path="/email" element={<Email />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
