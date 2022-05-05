import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import ChangePassword from "../pages/ChangePassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../components/NotFound";
import Email from "../pages/Email";

// import { keysBlock } from "../utils";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route
        path="/login"
        element={
          <Login
          // keysBlock={keysBlock}
          />
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/email" element={<Email />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
