import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRouter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
