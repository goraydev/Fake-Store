import { Navigate, Route, Routes } from "react-router-dom";
import {
  CategoryPage,
  CheckoutPage,
  HomePage,
  PaymentCompleted,
  SearchPage,
  SettingsUser,
  UserPage,
} from "../pages";
import { OneProduct } from "../components";

export const StoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/productos/categorias/:category"
        element={<CategoryPage />}
      />
      <Route path="/productos/producto/:search" element={<SearchPage />} />
      <Route path="/producto/:id" element={<OneProduct />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/completed" element={<PaymentCompleted />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/settings" element={<SettingsUser />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
