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
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6} className="links">
          <a href={'/Carta'}>Carta</a>
          <a href={'/About'}>About</a>
          <a href={'/Horarios'}>Horarios</a>
          <a href={'/Direccion'}>Direccion</a>
          <a href={'/Eventos'}>Eventos</a>
          <a href={'/Reservas'}>Reservas</a>
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
