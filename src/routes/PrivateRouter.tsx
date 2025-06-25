import { Navigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { type PrivateRouteProps } from "./types";

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
