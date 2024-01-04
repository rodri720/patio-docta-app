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

 export const photoData = [
     { id: 0, image: muzzaImage, text: 'Salsa muzzarela oregano y aceitunas $4600' },
     { id: 1, image: especialImage, text: 'Salsa muzzarela jamon huevo y aceitunas $5100' },
     { id: 2,image: napoImage, text: 'Salsa muzzarela tomate oregano y aceitunas $4900' },
     { id: 3,image: calabrezaImage, text: 'Salsa muzzarela salame oregano y aceitunas $5200' },
     { id: 4,image: delacasaImage, text: 'Salsa muzzarela cevolla morada beicom huevo y aceitunas negras $5100' },
     { id: 5,image: ruculaImage, text: 'Salsa muzzarela rucula jamon crudo queso y aceitunas negras $5400' },
     { id: 6,image: lomitoImage, text: 'Bife de lomo con pan de campo,lechuga,tomate,jamon,queso tybo,huevo y mayonesa casera con porcion de papas con cheddar y bacon $5900' },
     { id: 7,image: lomitodelacasaImage, text: 'Bife de lomo con pan de campo,cebolla morada,panceta,queso muzzarela y mayonesa casera con porcion de papas con cheddar y bacon $5900' },
     { id: 8,image: burguerclasicaImage, text: 'MEDALLÓN DE TERNERA DE150GR,JAMON,QUESO TYBO, HUEVO,LECHUGA,TOMATE,LACTONESA CASERA $4500' },
     { id: 9,image: burguerdelacasaImage, text: 'MEDALLÓN DE TERNERA DE150GR,MUZZA, HUEVO, BACON,CEBOLLA,MORADA,SALSA ESPECIAL,LACTONESA CASERA $4500' },
     { id: 10,image: burguerveggieImage, text: 'MEDALLÓN DE VEGETALES, MUZZA, HUEVO,LECHUGA,TOMATE,CEBOLLA,LACTONESA CASERA $4500' },
    ];


export const findPhotoById = (id) => {
    return photoData[id];
};