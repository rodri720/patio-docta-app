import React from 'react';
import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react';
import './Inicio.css';

export default function Inicio() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
        className="container"
      >
        <h1 className="title">Bienvenidos a Patio Docta</h1>
        <Stack direction={'row'} spacing={6} className="links">
          <Box as="a" href={'/Carta'}>
            Carta
          </Box>
          <Box as="a" href={'/About'}>
            About
          </Box>
          <Box as="a" href={'/Horarios'}>
            Horarios
          </Box>
          <Box as="a" href={'/Direccion'}>
            Direccion
          </Box>
          <Box as="a" href={'/Eventos'}>
            Eventos
          </Box>
          <Box as="a" href={'/Reservas'}>
            Reservas
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      />
    </Box>
  );
}
