// En tu componente Profile.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Center, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

const Profile = () => {
  console.log('Rendering Profile component');
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Menu>
      {/* ... (resto del código) */}
      <MenuList bg="black">
        {/* ... (resto del código) */}
        {user['https://your-namespace/roles'] === 'admin' && (
          <MenuItem onClick={() => {/* Acción para agregar productos */}}>
            <div>Agregar Producto</div>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default Profile;
