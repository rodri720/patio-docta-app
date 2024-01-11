import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Realizando acciones antes de hacer logout...");
    logout({ returnTo: window.location.origin });
    // No es necesario utilizar navigate después de logout ya que Auth0 manejará la redirección
  };

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
