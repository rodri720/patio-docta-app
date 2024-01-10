import React, { useState } from 'react';
import {
  useColorMode,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
  Input,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

import Profile from '../Login/Profile';
import './Navbar.css';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleToggleColorMode = () => {
    console.log('Toggle color mode clicked');
    toggleColorMode();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleSearch = () => {
    if (searchText) {
      navigate(`/Menu?search=${searchText}`);
    }
  };

  return (
    <div className="navbar" style={{ backgroundColor: colorMode === 'dark' ? '#1A202C' : '#000000' }}>
      <div className="logo">
        <img src={logo} alt="logo" width={'150px'} height={'150px'} />
      </div>
      <h1 className="title" style={{ color: colorMode === 'dark' ? '#ffffff' : '#1a1a1a' }}>Resto Bar</h1>
      <div className="rightSection" style={{ backgroundColor: colorMode === 'dark' ? '#1A202C' : '#000000' }}>
        <Box>
          <Button
            onClick={handleToggleColorMode}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
          >
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon color="#ffffff" />}
          </Button>
        </Box>
        {isAuthenticated ? (
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              _hover={{ bg: 'transparent' }}
              _expanded={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
            >
              {/* Asegúrate de tener el componente Profile disponible y importado */}
              <Profile size="sm" />
            </MenuButton>
            <MenuList alignItems={'center'} bg={colorMode === 'dark' ? '#1A202C' : '#000000'}>
              <br />
              <Center>
                {/* Asegúrate de tener el componente Profile disponible y importado */}
                <Profile size="xl" />
              </Center>
              <br />
              <Center>
                <p>Patio De Docta</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem style={{ color: colorMode === 'dark' ? '#ffffff' : '#1a1a1a' }}>patiodedocta@gmail.com</MenuItem>
              <MenuItem></MenuItem>
              <MenuItem onClick={handleLogout} style={{ color: colorMode === 'dark' ? '#ffffff' : '#1a1a1a' }}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            variant="solid"
            bg="blue.500"
            color="white"
            _hover={{ bg: 'blue.600' }}
            onClick={loginWithRedirect}
          >
            Login
          </Button>
        )}
        <Input
          type="text"
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </div>
    </div>
  );
}
