import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
// import NotFound from "../components/NotFound";

export const Rotas = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route element={<NotFound />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
