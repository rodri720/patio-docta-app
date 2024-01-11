import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Center, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
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
        <Box>
          <Image
            boxSize="40px"
            borderRadius="full"
            src={user.picture}
            alt={user.name}
          />
        </Box>
      </MenuButton>
      <MenuList bg="black">
        <Center>
          <Image
            boxSize="80px"
            borderRadius="full"
            src={user.picture}
            alt={user.name}
          />
        </Center>
        <MenuItem>{user.name}</MenuItem>
        <MenuItem>{user.email}</MenuItem>
        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
          <FiLogOut style={{ marginRight: '0.5rem' }} />
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
