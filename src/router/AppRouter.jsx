import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckOut } from "../hook";
import { CheckingAuth } from "../ui";
import { StoreRoutes } from "../AppStore/routes/StoreRoutes";

export const AppRouter = () => {
  const status = useCheckOut();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<StoreRoutes />} />
      ) : (
        <Route path="/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
