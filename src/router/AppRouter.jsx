import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/pages";
import { HomePage } from "../AppStore/pages";
import { useSelector } from "react-redux";
import { useCheckOut } from "../hooks/useCheckOut";

export const AppRouter = () => {
  const status = useCheckOut();

  if (status === "checking") {
    <p>Cargando...</p>;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <>
          <Route path="/productos" element={<HomePage />} />
          <Route path="/*" element={<Navigate to={"/productos"} />} />
        </>
      ) : (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registrarse" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </>
      )}
    </Routes>
  );
};
