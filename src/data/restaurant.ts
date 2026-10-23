export const restaurant = {
  name: 'V. Arranz', phone: '91 261 25 03', phoneHref: 'tel:+34912612503',
  address: 'Paseo de María de Maeztu, 7', locality: 'San Sebastián de los Reyes',
  latitude: 40.5613653, longitude: -3.6224546,
  maps: 'https://www.google.com/maps/search/?api=1&query=V.+Arranz+Paseo+de+Mar%C3%ADa+de+Maeztu+7+San+Sebasti%C3%A1n+de+los+Reyes',
};
// Source: restaurant menu photographs supplied on 2026-10-23.
// Display the printed prices directly, without an additional VAT surcharge.
export const menu = [
  { id: 'raciones', name: 'Raciones', intro: 'Algo rico en el centro. Y que empiece la conversación.', dishes: [
    ['Jamón ibérico', 20], ['Lomo ibérico', 16], ['Chorizo de bellota', 14], ['Salchichón de bellota', 14], ['Lacón', 12], ['Queso curado', 14], ['Combinado de ibéricos', 18], ['Terrina casera de foie', 20], ['Pulpo a la gallega', 20], ['Croquetas de jamón ibérico', 13], ['Croquetas de bogavante', 14], ['Callos', 15], ['Patatas bravas', 8], ['Patatas alioli', 8], ['Oreja', 12], ['Chistorra', 12], ['Calamares', 13],
  ] },
  { id: 'entrantes', name: 'Entrantes', intro: 'El primer bocado también cuenta una historia.', dishes: [
    ['Ensalada mixta', 9], ['Jamón ibérico', 20], ['Salmón marinado a las tres pimientas', 16], ['Terrina casera de foie con gelé al oporto', 20], ['Ensalada de pulpo', 18], ['Ensalada de codorniz escabechada', 15], ['Ensalada de bogavante y vinagreta de almendras', 26], ['Ensalada de jamón de pato con foie y piñones', 18.5], ['Pimientos asados con ventresca', 15], ['Carpaccio de buey con nube de queso', 16], ['Pastel de puerros y boletus', 15],
  ] },
  { id: 'pescados', name: 'Pescados', intro: 'El mar, con el acento de nuestra cocina.', dishes: [
    ['Merluza a la parrilla con sofrito de ajetes', 22], ['Cocochas de bacalao al pil pil', 21], ['Bacalao al pil pil con olivada', 21], ['Tartar de salmón', 20], ['Tartar de atún', 21],
  ] },
  { id: 'carnes', name: 'Carnes', intro: 'Parrilla, guisos y recetas para disfrutar despacio.', dishes: [
    ['Callos a la madrileña', 15], ['Solomillo a la parrilla con guarnición', 24], ['Tartar de solomillo', 24], ['Manitas de cerdo rellenas de mollejas y boletus', 18], ['Lomo a la parrilla fileteado con escamas de sal', 22], ['Carrillada de ternera al vino de Ribera', 19], ['Magret de pato al vinagre de Jerez y miel', 18],
  ] },
  { id: 'postres', name: 'Postres', intro: 'Siempre hay sitio para un final hecho en casa.', dishes: [
    ['Hojaldre de fresón', 6.5], ['Helado de turrón y miel', 6], ['Leche frita', 6], ['Delicia de pera con enrejado de chocolate', 6], ['Coronel de limón', 7], ['Mousse de dos chocolates', 6],
  ] },
  { id: 'bodega', name: 'Bodega', intro: 'Una buena mesa merece una buena botella.', dishes: [
    ['Blanco de la casa', 15], ['Viña Costeira · Blanco', 20], ['Vionta · Blanco', 26], ['Cigales · Rosado', 15], ['Rioja de la casa', 15], ['Bordón Crianza · Rioja', 20], ['Marqués de Cáceres · Rioja', 20], ['La Planta · Ribera del Duero', 22], ['Condado de Haza Crianza · Ribera del Duero', 29.5], ['Arzuaga Crianza · Ribera del Duero', 35], ['Protos Crianza · Ribera del Duero', 35], ['Dehesa de los Canónigos · Ribera del Duero', 36], ['Matarromera Crianza · Ribera del Duero', 36], ['Pesquera Crianza · Ribera del Duero', 36], ['Remelluri · Reserva', 35], ['Protos Gran Reserva', 50], ['Pesquera · Reserva', 54],
  ] },
  { id: 'infusiones', name: 'Café e infusiones', intro: 'El último sorbo. La penúltima conversación.', dishes: [
    ['Café', 1.9], ['Té', 1.9], ['Té rojo', 1.9], ['Té verde', 1.9], ['Manzanilla', 1.9], ['Menta poleo', 1.9], ['Tila', 1.9],
  ] },
] satisfies { id: string; name: string; intro: string; dishes: [string, number][] }[];
export function formatPrice(price: number) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
}

export const sharingMenus = [
  {
    name: 'Menú nº 1', price: 44, starterCount: 3,
    starters: ['Embutidos ibéricos', 'Ensalada de codorniz escabechada', 'Pastel de puerros y boletus', 'Terrina de foie casera', 'Pastel de cabracho', 'Pulpo a la gallega', 'Jamón ibérico'],
  },
  {
    name: 'Menú nº 2', price: 48, starterCount: 4,
    starters: ['Embutidos ibéricos', 'Terrina de foie casera', 'Pulpo a la gallega', 'Jamón ibérico', 'Revuelto de boletus', 'Ensalada de bogavante', 'Pastel de cabracho', 'Revuelto de ajetes y gambas', 'Pastel de puerros y boletus'],
  },
];
export const sharingMenuMains = ['Merluza con sofrito de ajetes', 'Bacalao al pil pil', 'Solomillo de buey', 'Lomo de buey'];
