import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext"
import React, { ReactNode } from "react";

interface UserStorageProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: UserStorageProps) => {
  const { login } = React.useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
}

export default ProtectedRoute
