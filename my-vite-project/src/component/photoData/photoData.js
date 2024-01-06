 import muzzaImage from '../images/muzza.png';
 import especialImage from '../images/especial.png';
 import napoImage from '../images/napo.png';
 import calabrezaImage from '../images/calabreza.png';
 import delacasaImage from '../images/delacasa.png';
 import ruculaImage from '../images/rucula.png';
 import lomitoImage from '../images/lomito.png';
 import lomitodelacasaImage from '../images/lomitodelacasa.png';
 import burguerclasicaImage from '../images/burguerclasica.png';
 import burguerdelacasaImage from '../images/burguerdelacasa.png';
 import burguerveggieImage from '../images/burguerveggie.png';
 import superpanchoamericanoImage from '../images/superpanchoamericano.png';
 import superpanchotirolesImage from '../images/superpanchotiroles.png';
 import tostadoImage from '../images/tostado.png';
 import picadacalienteImage from '../images/picadacaliente.png';
 import picadadefiambreImage from '../images/picadadefiambre.png';
 import bastonesdemuzzaImage from '../images/bastonesdemuzza.png';
 // Import your images here...
// ...

export const photoData = [
    { id: 0, image: muzzaImage, text: 'Salsa muzzarela oregano y aceitunas $4600', category: 'pizzas' },
    { id: 1, image: especialImage, text: 'Salsa muzzarela jamon huevo y aceitunas $5100', category: 'pizzas' },
    { id: 2, image: napoImage, text: 'Salsa muzzarela tomate oregano y aceitunas $4900', category: 'pizzas' },
    { id: 3, image: calabrezaImage, text: 'Salsa muzzarela salame oregano y aceitunas $5200', category: 'pizzas' },
    { id: 4, image: delacasaImage, text: 'Salsa muzzarela cevolla morada beicom huevo y aceitunas negras $5100', category: 'pizzas' },
    { id: 5, image: ruculaImage, text: 'Salsa muzzarela rucula jamon crudo queso y aceitunas negras $5400', category: 'pizzas' },
    { id: 6, image: lomitoImage, text: 'Bife de lomo con pan de campo, lechuga, tomate, jamon, queso tybo, huevo y mayonesa casera con porcion de papas con cheddar y bacon $5900', category: 'lomohamburguesa' },
    { id: 7, image: lomitodelacasaImage, text: 'Bife de lomo con pan de campo, cebolla morada, panceta, queso muzzarela y mayonesa casera con porcion de papas con cheddar y bacon $5900', category: 'lomohamburguesa' },
    { id: 8, image: burguerclasicaImage, text: 'MEDALLÓN DE TERNERA DE150GR, JAMON, QUESO TYBO, HUEVO, LECHUGA, TOMATE, LACTONESA CASERA $4500', category: 'lomohamburguesa' },
    { id: 9, image: burguerdelacasaImage, text: 'MEDALLÓN DE TERNERA DE150GR, MUZZA, HUEVO, BACON, CEBOLLA, MORADA, SALSA ESPECIAL, LACTONESA CASERA $4500', category: 'lomohamburguesa' },
    { id: 10, image: burguerveggieImage, text: 'MEDALLÓN DE VEGETALES, MUZZA, HUEVO, LECHUGA, TOMATE, CEBOLLA, LACTONESA CASERA $4500', category: 'lomohamburguesa' },
    { id: 11, image: superpanchoamericanoImage, text: 'SALCHICHA ALEMANA, HUEVO, bacon Y MUZZARELLA, ACOMPAÑADO DEPAPAS FRITASCON CHEDDAR Y BACON $4500', category: 'lomohamburguesa' },
    { id: 12, image: superpanchotirolesImage, text: 'SALCHICHA ALEMANA,CHUCRUT y bacon, ACOMPAÑADO DE PAPAS FRITAS CON CHEDDAR Y BACON $4700', category: 'lomohamburguesa' },
    { id: 13, image: tostadoImage, text: 'PAN CASERO JAMON,QUESO Y MAYONESA CASERA $2400', category: 'lomohamburguesa' },
    { id: 14, image: picadacalienteImage, text: 'EMPANADAScriollas y chinas, BASTONES DE MUZZA,milanesitas depollo y ternera , ALBONDIGUITAS,ACEITUNAS Y PAPASfritasCON CHEDDAR Y BACON $9700', category: 'bastonesypicadas' },
    { id: 15, image: picadadefiambreImage, text: 'Jamón Crudo, Bondiola,Salame, Jamón Cocido,, Queso Pategras,Tybo y Roquefort, Aceitunas,Tomatitos Cherry,todo acompañado por una salsita y pan Casero $7800', category: 'bastonesypicadas' },
    { id: 16, image: bastonesdemuzzaImage, text: 'BASTONES DE MUZZARELA CON PORCION DE PAPAS CON CHEDDAR Y BACON $4500', category: 'bastonesypicadas' },
  ];
  


export const findPhotoById = (id) => {
    return photoData[id];
};