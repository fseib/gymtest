// Todo el contenido de la landing está acá. Editá estos datos con los de tu gimnasio.

export const gym = {
  name: 'El Kaiser Gym',
  tagline: 'El Kaiser Gym',
  description:
    'Entrenamiento guiado en grupos reducidos. Aprendé a ejecutar bien cada técnica, ganá fuerza y movilidad, y entrená sin lesiones.',
  address: 'Bernardino Rivadavia 321, Temperley, Provincia de Buenos Aires',
  // Link de Google Maps para el botón "Cómo llegar" (el mapa embebido se genera solo a partir de `address`)
  mapsUrl: 'https://maps.app.goo.gl/raBGu3URu7kcd5hW7',
  phone: '+54 9 11 4186-1001',
  email: 'hola@ironpulse.com',
  instagram: 'https://instagram.com/neo.gym.temperley',
  facebook: 'https://www.facebook.com/neo.gym.5/',
}

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(gym.address)}&output=embed`

export const whatsapp = {
  // Formato internacional, solo números (sin +, espacios ni guiones). Ej. Argentina: 549 + área + número
  number: '5491141861001',
  defaultMessage: '¡Hola! Quiero más info sobre el gimnasio 💪',
}

export const whatsappLink = (message = whatsapp.defaultMessage) =>
  `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`

// Fotos de Unsplash: reemplazalas por fotos reales del gimnasio (podés ponerlas en /public y usar '/foto.jpg')
const unsplash = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const images = {
  hero: unsplash('1574680096145-d05b474e2155', 1920),
  about: unsplash('1571019614242-c5c5dee9f50b', 1200), // sección "Para quién"
  cta: unsplash('1581009146145-b5ef050c2e1e', 1920),
}

// Reseña destacada en la portada (poné una real de Google o Instagram)
export const review = {
  rating: '4.9',
  source: 'Google',
  quote: 'El mejor ambiente para entrenar de la zona. Los profes están en cada detalle.',
}

export const stats = [
  { value: '+800', label: 'Socios activos' },
  { value: '15', label: 'Coaches' },
  { value: '+3', label: 'Años trabajando' },
]

// Pilares del método. `image` opcional: sin imagen se muestra como tarjeta roja destacada.
export const pillars = [
  {
    title: 'Técnica',
    text: 'Aprendés a ejecutar cada movimiento correctamente antes de sumar peso. La base de todo.',
    image: unsplash('1517963879433-6ad2b056d712'),
  },
  {
    title: 'Fuerza',
    text: 'Entrenamientos con estructura y progresión para que te vuelvas más fuerte semana a semana.',
    image: unsplash('1583454110551-21f2fa2afe61'),
  },
  {
    title: 'Movilidad',
    text: 'Trabajo de movilidad en cada sesión para moverte mejor y evitar lesiones.',
    image: unsplash('1518611012118-696072aa579a'),
  },
  {
    title: 'Grupos reducidos',
    text: 'Pocas personas por turno para que el coach te vea, te corrija y te acompañe.',
  },
]

// Para quién es el gimnasio
export const audiences = [
  {
    title: 'Arrancás de cero',
    text: 'Nunca entrenaste o no sabés por dónde empezar. Te enseñamos desde lo básico, a tu ritmo y sin presión.',
    message: '¡Hola! Nunca entrené (o casi) y quiero arrancar. ¿Me pasan info?',
  },
  {
    title: 'Volvés a entrenar',
    text: 'Dejaste hace un tiempo. Retomás de forma progresiva, cuidando el cuerpo y recuperando la confianza.',
    message: '¡Hola! Hace un tiempo dejé de entrenar y quiero volver. ¿Me pasan info?',
  },
  {
    title: 'Querés entrenar mejor',
    text: 'Ya entrenás pero sentís que te estancaste. Pulimos tu técnica y le damos propósito a cada sesión.',
    message: '¡Hola! Ya entreno y quiero mejorar mi técnica. ¿Me pasan info?',
  },
]

// Opciones del formulario de contacto ("¿Desde dónde arrancás?")
export const levels = ['Arranco de cero', 'Vuelvo a entrenar', 'Ya entreno']

export const plans = [
  {
    name: '2 veces',
    price: '25.000',
    period: '/mes',
    description: '2 entrenamientos guiados por semana.',
    features: ['Grupo reducido', 'Corrección de técnica', 'Trabajo de movilidad'],
  },
  {
    name: '3 veces',
    price: '32.000',
    period: '/mes',
    description: 'La frecuencia ideal para progresar.',
    featured: true,
    features: ['Grupo reducido', 'Corrección de técnica', 'Trabajo de movilidad', 'Plan con progresión'],
  },
  {
    name: 'Libre',
    price: '40.000',
    period: '/mes',
    description: 'Todos los turnos que quieras.',
    features: ['Grupo reducido', 'Corrección de técnica', 'Trabajo de movilidad', 'Plan con progresión'],
  },
]

export const openingHours = [
  { days: 'Lunes a Viernes', hours: '07:00 – 13:00, 16:00 - 22:00' },
  { days: 'Sábados', hours: '09:00 – 13:30' },
  // { days: 'Domingos y feriados', hours: '09:00 – 14:00' },
]

export const navLinks = [
  { href: '#metodo', label: 'Método' },
  { href: '#para-quien', label: 'Para quién' },
  { href: '#planes', label: 'Planes' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#contacto', label: 'Contacto' },
]
