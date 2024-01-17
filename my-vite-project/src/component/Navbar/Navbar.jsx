import React, { useState } from 'react';
import {
  useColorMode,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Input,
  MenuDivider,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import LogoutButton from '../Login/LogoutButton';
import Profile from '../Login/Profile';
import './Navbar.css';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleToggleColorMode = () => {
    if (colorMode === 'light') {
      toggleColorMode('dark');
    } else {
      toggleColorMode('light');
    }
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleSearch = () => {
    if (searchText) {
      navigate(`/Carta?search=${searchText}`);
    }
  };

  return (
    <div className="navbar" style={{ backgroundColor: '#000000', color: colorMode === 'dark' ? '#ffffff' : '#1a1a1a' }}>
      <div className="logo">
        <img src={logo} alt="logo" width={'150px'} height={'150px'} />
      </div>
      <h1 className="title">Resto Bar</h1>
      <div className="rightSection" style={{ backgroundColor: '#000000' }}>
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
          <>
            <LogoutButton />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Profile size="sm" />
              </MenuButton>
              <MenuList alignItems={'center'} bg={colorMode === 'dark' ? '#1A202C' : '#000000'}>
                <br />
                <Center>
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
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
            <Link to="/dashboard">
              <Button
                variant="solid"
                bg="blue.500"
                color="white"
                _hover={{ bg: 'blue.600' }}
              >
                Dashboard
              </Button>
            </Link>
          </>
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
};
