import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="registrarse" element={<RegisterPage />} />
      <Route path="/*" element={<Navigate to="login" />} />
    </Routes>
  );
};
