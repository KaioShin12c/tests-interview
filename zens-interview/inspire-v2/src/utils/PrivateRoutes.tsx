import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
