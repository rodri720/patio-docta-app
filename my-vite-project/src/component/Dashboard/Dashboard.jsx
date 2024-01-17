// En tu componente Dashboard.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Bienvenido al Dashboard, {user.name}!</h1>
          {user['https://your-namespace/roles'] === 'admin' && (
            <div>
              {/* Funcionalidades adicionales para administradores */}
              <button onClick={() => {/* Acción para borrar productos */}}>Borrar Producto</button>
            </div>
          )}
          <button onClick={() => logout()}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <h1>Por favor, inicia sesión</h1>
          <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
