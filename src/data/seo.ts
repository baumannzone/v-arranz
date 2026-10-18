export const socialImages = {
  '/': {
    file: '/og/inicio.jpg',
    alt: 'V. Arranz · El gusto de volver. Cocina de siempre desde 2008 en San Sebastián de los Reyes.',
  },
  '/restaurante/': {
    file: '/og/restaurante.jpg',
    alt: 'Nuestra casa · V. Arranz. Una cocina con raíces, una casa con alma.',
  },
  '/carta/': {
    file: '/og/carta.jpg',
    alt: 'La carta de V. Arranz · Sabores que se quedan. Cocina vasco-francesa hecha en casa.',
  },
  '/contacto/': {
    file: '/og/contacto.jpg',
    alt: 'Contacto y reservas en V. Arranz · Tu mesa te espera. Teléfono 91 261 25 03.',
  },
} as const;

export function getSocialImage(pathname: string) {
  const path = pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
  return socialImages[path as keyof typeof socialImages] ?? socialImages['/'];
}
