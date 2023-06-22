import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckOut } from "../hooks/useCheckOut";
import { StoreRoutes } from "../AppStore/routes/StoreRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  const status = useCheckOut();

  if (status === "checking") {
    <p>Cargando...</p>;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<StoreRoutes />} />
      ) : (
        <Route path="/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="login" />} />
    </Routes>
  );
};
