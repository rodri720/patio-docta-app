// Dashboard.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import BulkCreateForm from '../BulkCreateForm/BulkCreateForm'; // Asegúrate de tener el import correcto

const Dashboard = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const handleBulkCreate = (formData) => {
    // Lógica para realizar el bulk create con los datos del formulario
    console.log('Datos del formulario para bulk create:', formData);
    // Puedes llamar a la función de bulk create aquí
    // bulkCreate(formData);
  };

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
          {/* Agrega el formulario de "Bulk Create" */}
          <BulkCreateForm onBulkCreate={handleBulkCreate} />
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
