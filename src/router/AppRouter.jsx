import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HomePage } from "../AppStore/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/products" element={<HomePage />} />
    </Routes>
  );
};
