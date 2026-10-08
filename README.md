# Iron Pulse — Landing de gimnasio

Landing page en React + Vite + Tailwind CSS v4, con formulario de contacto vía EmailJS y botón flotante de WhatsApp.

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist para producción
```

## Personalizar el contenido

Todo el texto, precios, horarios, servicios, dirección y redes están en [`src/config.js`](src/config.js).

- **WhatsApp:** cambiá `whatsapp.number` (formato internacional, solo números, ej. `5491112345678`) y `whatsapp.defaultMessage`.
- **Mapa:** reemplazá `gym.mapEmbedUrl` por la URL embed de Google Maps de tu local.
- **Colores y tipografías:** en el bloque `@theme` de [`src/index.css`](src/index.css).

## Configurar EmailJS (formulario de contacto)

1. Creá una cuenta gratis en <https://www.emailjs.com>.
2. **Email Services → Add New Service** y conectá tu casilla (Gmail, Outlook, etc.). Copiá el *Service ID*.
3. **Email Templates → Create New Template**. Usá estas variables en el cuerpo del mail:
   ```
   Nombre: {{name}}
   Email: {{email}}
   Teléfono: {{phone}}
   Nivel: {{level}}
   Mensaje: {{message}}
   ```
   En *Reply To* poné `{{email}}`. Copiá el *Template ID*.
4. **Account → General** y copiá tu *Public Key*.
5. Copiá `.env.example` como `.env` y completá:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxx
   ```
6. Reiniciá `npm run dev`.

Al deployar (Vercel, Netlify, etc.) cargá esas mismas tres variables en el panel del hosting.
