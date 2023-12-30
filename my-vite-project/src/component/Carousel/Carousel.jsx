import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import especialImage from '../images/especial.png';
import delacasaImage from '../images/delacasa.png';
import ruculaImage from '../images/rucula.png';
import muzzaImage from '../images/muzza.png';

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const cards = [
  {
    title: 'Pizza Especial',
    text: 'Salsa muzzarela jamon huevo y aceitunas',
    image:  especialImage, // Usa la importación en lugar de require
  },
  {
    title: 'Pizza De La Casa',
    text: 'Salsa muzzarela cevolla morada beicom huevo y aceitunas negras',
    image: delacasaImage,
  },
  {
    title: 'Pizza Rucula',
    text: 'Salsa muzzarela rucula jamon crudo queso y aceitunas negras',
    image: ruculaImage,
  },
  {
    title: 'Pizza Muzzarella',
    text: 'Salsa muzzarela oregano y aceitunas',
    image: muzzaImage,
  },
];

export default function CaptionCarousel() {
  const [slider, setSlider] = useState();

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'}>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'600px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image.default})`}
          >
            <Container size="container.lg" height="500px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`} // or provide a meaningful description
                  style={{ maxWidth: '100%', height: 'auto' }}
                />

                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white" fontWeight="bold">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}