export const restaurant = {
  name: 'V. Arranz', phone: '91 261 25 03', phoneHref: 'tel:+34912612503',
  address: 'Paseo de María de Maeztu, 7', locality: 'San Sebastián de los Reyes',
  latitude: 40.5613653, longitude: -3.6224546,
  maps: 'https://www.google.com/maps/search/?api=1&query=V.+Arranz+Paseo+de+Mar%C3%ADa+de+Maeztu+7+San+Sebasti%C3%A1n+de+los+Reyes',
};
// Source: https://www.varranz.com/carta.html, checked 2026-10-19.
// Published prices exclude 10% VAT. Display final prices in the new menu.
export const menu = [
  { id: 'raciones', name: 'Raciones', intro: 'Algo rico en el centro. Y que empiece la conversación.', dishes: [
    ['Jamón ibérico', 16], ['Lomo ibérico', 12], ['Chorizo de bellota', 10], ['Salchichón de bellota', 10], ['Lacón', 8], ['Queso curado', 11], ['Combinado de ibéricos', 13], ['Terrina casera de foie', 16], ['Pulpo a la gallega', 16], ['Croquetas de jamón ibérico', 11], ['Croquetas de bogavante', 12], ['Callos', 10], ['Patatas bravas', 6], ['Patatas alioli', 6], ['Oreja', 7.5], ['Chistorra', 8.5], ['Calamares', 10],
  ] },
  { id: 'entrantes', name: 'Entrantes', intro: 'El primer bocado también cuenta una historia.', dishes: [
    ['Jamón ibérico', 16], ['Salmón marinado a las tres pimientas', 12], ['Terrina casera de foie con gelé al oporto', 16], ['Ensalada de pulpo', 13.5], ['Ensalada de codorniz escabechada', 12], ['Ensalada de bogavante y vinagreta de almendras', 23], ['Ensalada de jamón de pato con foie y piñones', 14.5], ['Pimientos asados con ventresca', 12], ['Carpaccio de buey con nube de queso', 12], ['Pastel de puerros y boletus', 11], ['Sopa de pescado', 11],
  ] },
  { id: 'pescados', name: 'Pescados', intro: 'El mar, con el acento de nuestra cocina.', dishes: [
    ['Merluza a la parrilla con sofrito de ajetes', 18.5], ['Cocochas de bacalao al pil pil', 17.5], ['Bacalao al pil pil con olivada', 17.5], ['Tartar de salmón', 18], ['Tartar de atún', 18],
  ] },
  { id: 'carnes', name: 'Carnes', intro: 'Parrilla, guisos y recetas para disfrutar despacio.', dishes: [
    ['Callos a la madrileña', 12.5], ['Solomillo a la parrilla con guarnición', 19.5], ['Tartar de solomillo', 19], ['Manitas de cerdo rellenas de mollejas y boletus', 15], ['Lomo a la parrilla fileteado con escamas de sal', 18], ['Carrillada de ternera al vino de Ribera', 15.5], ['Magret de pato al vinagre de Jerez y miel', 15],
  ] },
  { id: 'postres', name: 'Postres', intro: 'Siempre hay sitio para un final hecho en casa.', dishes: [
    ['Hojaldre de fresón', 5], ['Helado de turrón y miel', 5], ['Leche frita', 5], ['Delicia de pera con enrejado de chocolate', 4.5], ['Coronel de limón', 5], ['Mousse de dos chocolates', 5],
  ] },
  { id: 'bodega', name: 'Bodega', intro: 'Una buena mesa merece una buena botella.', dishes: [
    ['Blanco de la casa', 11], ['Cuatro Rayas · Blanco', 12], ['Viña Costeira · Blanco', 15], ['Vionta · Blanco', 18], ['Cigales · Rosado', 12], ['Rioja de la casa', 12], ['Bordón Crianza · Rioja', 14], ['Marqués de Cáceres · Rioja', 14.5], ['La Planta · Ribera del Duero', 16], ['Condado de Haza Crianza · Ribera del Duero', 23], ['Arzuaga Crianza · Ribera del Duero', 27], ['Protos Crianza · Ribera del Duero', 27.5], ['Dehesa de los Canónigos · Ribera del Duero', 28], ['Matarromera Crianza · Ribera del Duero', 28], ['Pesquera Crianza · Ribera del Duero', 28], ['Remelluri · Reserva', 27], ['Protos Gran Reserva', 41], ['Pesquera · Reserva', 42],
  ] },
  { id: 'infusiones', name: 'Café e infusiones', intro: 'El último sorbo. La penúltima conversación.', dishes: [
    ['Café', 1.45], ['Té', 1.45], ['Té rojo', 1.45], ['Té verde', 1.45], ['Manzanilla', 1.45], ['Menta poleo', 1.45], ['Tila', 1.45], ['Infusión Arranz · Poleo, manzanilla, hierba luisa y anís', 1.8],
  ] },
] satisfies { id: string; name: string; intro: string; dishes: [string, number][] }[];
export function priceWithVat(base: number) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(Math.round(base * 110) / 100);
}
