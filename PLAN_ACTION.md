## Plan: Refactorización en Template Reutilizable

**TL;DR**: Convertir el sitio de matrimonio en un template limpio, configurable y de alta calidad. Toda la información del evento se centralizará en archivos JSON, se eliminarán bugs y código muerto, se mejorará la performance y la UX para que cualquier futuro matrimonio solo requiera editar los datos, no el código.

---

### Fase 1 — Corrección de Bugs Críticos
*Independiente, puede hacerse primero o en paralelo con Fase 2*

1. **Corregir `reducer.js`**: Eliminar el `case value:` inválido. Si no se va a usar el reducer, simplificar o eliminar el archivo.
2. **Reemplazar `<Link>` por `<a>`** en CardPlaces.jsx para los enlaces externos de Google Maps.
3. **Manejar URL sin nombre** (`/` sin parámetro): mostrar un mensaje de "invitación general" o redirigir al 404 si no hay nombre en la URL.

---

### Fase 2 — Centralización de Datos (núcleo del template)
*Depende de Fase 1 para evitar conflictos; el resto de fases dependen de esta*

4. **Crear un único archivo de configuración** `src/mocks/config.json` (o `wedding.config.json`) que centralice **todo** lo que cambia entre matrimonios:
   - Nombres de los novios
   - Fecha y hora de la ceremonia
   - Lugares (ceremonia y recepción) con coordenadas, dirección, horario
   - Números de WhatsApp (esposo / esposa)
   - Código de vestimenta
   - Información de regalos
   - Datos del parqueadero
5. **Mover coordenadas GPS** de CardPlaces.jsx al nuevo config — eliminar los strings hardcodeados del componente.
6. **Actualizar** `date.json`, `info.json` y `numContact.json` para que apunten al nuevo config, o consolidarlos directamente en él.

---

### Fase 3 — Limpieza de Código
*Paralela con Fase 2 en lo que no depende del config*

7. **Eliminar o implementar el Global Context**: si no hay estado global necesario, borrar `globalContext.jsx` y `reducer.js` por completo. Si se quiere guardar para futuros usos, al menos dejar el reducer con estructura válida.
8. **Usar `routes.js`** en `App.jsx` en lugar de strings hardcodeados, o eliminar `routes.js` si no agrega valor.
9. **Eliminar código comentado** en CardPlaces.jsx (botón parqueadero): implementarlo limpiamente si se quiere mantener la feature, o borrarlo.
10. **Habilitar el botón de Parqueadero**: si el dato viene del config, activarlo y conectarlo al mapa.

---

### Fase 4 — Performance
*Depende de Fase 2; independiente de Fase 3*

11. **Reemplazar Owl Carousel + jQuery** por una solución sin dependencias pesadas. Opciones:
    - `Swiper.js` (~40KB, React-native, moderno) ← recomendado
    - Carrusel CSS puro con `scroll-snap` (cero dependencias, ideal para un template simple)
12. **Agregar lazy loading** a las imágenes del carrusel y secciones inferiores (`loading="lazy"` en `<img>`).
13. **Revisar imports no usados** tras la limpieza de fases anteriores.

---

### Fase 5 — UX y Accesibilidad
*Paralela con Fase 4*

14. **Agregar `alt` text** a todas las imágenes decorativas y de contenido.
15. **Mejorar la cuenta regresiva**: cuando la fecha ya pasó (ej. template mostrado sin actualizar), mostrar un mensaje como "¡Ya nos casamos!" en lugar de números negativos.
16. **Feedback visual en confirmación de asistencia**: indicar claramente que se abrirá WhatsApp al presionar el botón.
17. **Fallback de nombre vacío**: si el usuario entra a `/` sin nombre, mostrar "Estimado invitado" en lugar de un espacio vacío.

---

### Fase 6 — Documentación del Template
*Depende de todas las fases anteriores*

18. **Actualizar `README.md`** con instrucciones claras de cómo personalizar el template para un nuevo matrimonio: qué archivos editar, qué datos cambiar, cómo desplegar en Vercel.

---

### Archivos Clave a Modificar

| Archivo | Cambios |
|---------|---------|
| mocks | Consolidar en un único `config.json` |
| reducer.js | Corregir o eliminar |
| globalContext.jsx | Eliminar o implementar |
| CardPlaces.jsx | Fix `<Link>` → `<a>`, mover coords a config, activar parqueadero |
| TimeRealize.jsx | Manejo de fecha pasada |
| OurLove.jsx | Reemplazar Owl Carousel |
| routes.js | Usar en App.jsx o eliminar |
| App.jsx | Usar routes.js, manejar ruta sin nombre |
| README.md | Guía de personalización |
| package.json | Remover `owl-carousel`, `react-owl-carousel`, `jquery` |

---

### Verificación

1. Ejecutar `npm run build` — debe completar sin warnings de dependencias no usadas
2. Probar en `/` (sin nombre) → debe mostrar fallback, no pantalla rota
3. Probar en `/Juan` → debe mostrar "Hola, Juan"
4. Verificar que los links de Google Maps abran correctamente
5. Verificar que la cuenta regresiva con fecha futura funcione y con fecha pasada muestre el fallback
6. Auditar con Lighthouse: apuntar a Performance >90, Accessibility >90
7. Comparar bundle size antes/después de eliminar jQuery+Owl Carousel

---

### Decisiones

- **Scope incluido**: todo lo listado arriba
- **Scope excluido**: backend/API real para confirmaciones (WhatsApp sigue siendo el canal), autenticación de invitados, analytics
- El config centralizado usará JSON estático — no se agrega un CMS ni panel de admin

---