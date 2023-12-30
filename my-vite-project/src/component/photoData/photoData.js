 import muzzaImage from '../images/muzza.png';
 import especialImage from '../images/especial.png';
 import napoImage from '../images/napo.png';
 import calabrezaImage from '../images/calabreza.png';
 import delacasaImage from '../images/delacasa.png';
 import ruculaImage from '../images/rucula.png';
// import Ipad1Amd3020EImage from '../images/Ipad-1-Amd-3020E.png';
// import LenovoE41_25A4Image from '../images/LenovoE41-25A4.png';

 export const photoData = [
     { image: muzzaImage, text: 'Salsa muzzarela oregano y aceitunas $4600' },
     { image: especialImage, text: 'Salsa muzzarela jamon huevo y aceitunas $5100' },
     { image: napoImage, text: 'Salsa muzzarela tomate oregano y aceitunas $4900' },
     { image: calabrezaImage, text: 'Salsa muzzarela salame oregano y aceitunas $5200' },
     { image: delacasaImage, text: 'Salsa muzzarela cevolla morada beicom huevo y aceitunas negras $5100' },
     { image: ruculaImage, text: 'Salsa muzzarela rucula jamon crudo queso y aceitunas negras $5400' },
//     { image: Ipad1Amd3020EImage, text: 'Equipada con la plataforma Intel® Evo™ y los procesadores Intel® Core™ de 13va generación La flexibilidad multimodo de 360 grados' },
//     { image: LenovoE41_25A4Image, text: 'NOTEBOOK LENOVO 14" E41-25 A4-4350B 4GB 500GB Características del producto Memoria RAM: 4 GBTamaño de la pantalla: 14 "Duración de la batería: 6 hTipo de resolución: HDCon pantalla táctil: NoCon lector de huella digital ...' },
//     // Puedes agregar más fotos aquí
 ];

export const findPhotoById = (id) => {
    return photoData[id];
};