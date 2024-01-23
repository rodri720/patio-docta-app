import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import BulkCreateForm from '../BulkCreateForm/BulkCreateForm';
import { useForm } from 'react-hook-form';
import './Dashboard.css';

const Dashboard = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { register, handleSubmit, setValue, getValues } = useForm(); // Moved inside the component body

  const handleBulkCreate = (formData) => {
    console.log('Datos del formulario para bulk create:', formData);
    // Puedes llamar a la función de bulk create aquí
    // bulkCreate(formData);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setValue('image', file.name);
  };

  return (
    <Box p={5}>
      {isAuthenticated ? (
        <Box>
          <Heading>Bienvenido al Dashboard, {user.name}!</Heading>
          {user['https://your-namespace/roles'] === 'admin' && (
            <Box mt={4}>
              <Button colorScheme="red" onClick={() => {/* Acción para borrar productos */}}>
                Borrar Producto
              </Button>
            </Box>
          )}
          <BulkCreateForm onBulkCreate={handleBulkCreate} />
          <Box mt={4}>
            <label htmlFor="image">Subir Imagen:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <Text mt={2}>{getValues('image')}</Text>
          </Box>
          <Button mt={4} colorScheme="blue" onClick={() => logout()}>
            Cerrar sesión
          </Button>
        </Box>
      ) : (
        <Box>
          <Heading>Por favor, inicia sesión</Heading>
          <Button mt={4} colorScheme="teal" onClick={() => loginWithRedirect()}>
            Iniciar sesión
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
