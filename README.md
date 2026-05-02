# 💍 Wedding Invitation Template

Template de invitación de matrimonio construido con **React + Vite**. Diseñado para reutilizarse en distintos eventos: solo hay que editar un archivo de configuración, sin tocar el código.

---

## Personalizar el template

Todo el contenido del evento vive en un único archivo:

```
src/mocks/config.json
```

### Estructura del archivo

```jsonc
{
  "couple": {
    "husband": { "name": "Nombre del novio", "phone": "57XXXXXXXXXX" },
    "wife":    { "name": "Nombre de la novia", "phone": "57XXXXXXXXXX" }
  },
  "wedding": {
    "date": "YYYY-MM-DDTHH:mm:ss",   // Fecha ISO de la ceremonia
    "displayDate": "DD.MM.YYYY",      // Fecha visible en la invitación
    "countdown": {
      "days": "días", "hours": "hrs", "minutes": "min", "seconds": "seg"
    }
  },
  "places": [
    {
      "title": "Ceremonia",
      "date":    { "title": "Día",       "info": "..." },
      "hour":    { "title": "Hora",      "info": "..." },
      "place":   { "title": "Lugar",     "info": "..." },
      "address": { "title": "Dirección", "info": "..." },
      "coordinates": "lat, lng",          // Google Maps destino
      "parkinglot": { "title": "Parqueadero", "coordinates": "lat, lng" },
      "image": "/icon-church.svg"
    },
    {
      "title": "Recepción"
      // mismo esquema que Ceremonia
    }
  ],
  "dresscode": {
    "style": "Formal",
    "reservedColors": ["Blanco", "Verde"],
    "message": "Mensaje para adultos",
    "noKids": "Mensaje sobre niños"
  },
  "gifts": {
    "message": "Mensaje de regalos"
  },
  "texts": {
    "guestPresentation": {
      "announcement": "¡Nos casamos!",
      "guestFallback": "Estimado invitado"   // Se muestra en / sin nombre
    },
    "head": {
      "invitation": "Texto de la invitación"
    },
    "countdown": {
      "title": "¡Te esperamos!",
      "ended": "Gracias por acompañarnos"    // Se muestra cuando la fecha pasó
    },
    "ourLove": {
      "photos": ["/images/1.jpg", "/images/2.jpg"], // Rutas en /public
      "quote": "\"Cita bíblica...\"",
      "quoteReference": "Referencia"
    },
    "confirmAttendance": {
      "title": "Confirmar asistencia",
      "subtitle": "...",
      "hint": "Al presionar se abrirá WhatsApp",
      "whatsappMessage": "Mensaje preescrito"
    }
  }
}
```

### Imágenes

Coloca las fotos de la pareja en `public/images/` y actualiza el array `texts.ourLove.photos` con las rutas correspondientes (ej. `"/images/foto1.jpg"`).

Las imágenes decorativas del sitio (ramas, ondas, íconos) están en `public/` y no requieren cambios.

---

## URL por invitado

La ruta acepta un nombre como parámetro:

```
https://tu-dominio.com/Juan
```

Esto muestra **"Juan"** en la presentación. Sin nombre (`/`) se muestra el valor de `guestFallback`.

---

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

---

## Despliegue en Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com).
2. Configura **Root Directory** como `fe/`.
3. Vercel detecta Vite automáticamente — no se necesita configuración adicional.
4. El archivo `vercel.json` ya incluye la reescritura necesaria para que las rutas `/:name` funcionen en producción:

```json
{
  "rewrites": [{ "source": "/:name", "destination": "/" }]
}
```

---

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.3 | UI |
| Vite | 5.4 | Build tool |
| React Router DOM | 6.27 | Enrutamiento |
| AOS | 2.3 | Animaciones de scroll |
| CSS scroll-snap | nativo | Carrusel de fotos |
