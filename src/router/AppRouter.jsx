import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/pages";
import { HomePage, CategoryPage, SearchPage } from "../AppStore/pages";
import { useCheckOut } from "../hooks/useCheckOut";
import { OneProduct } from "../AppStore/components";

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
          <Route
            path="/productos/categorias/:category"
            element={<CategoryPage />}
          />
          <Route path="/productos/producto/:search" element={<SearchPage />} />
          <Route path="/producto/:id" element={<OneProduct />} />
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
