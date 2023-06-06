import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/pages";
import { HomePage } from "../AppStore/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registrarse" element={<RegisterPage />} />
      <Route path="/productos" element={<HomePage />} />
    </Routes>
  );
};
