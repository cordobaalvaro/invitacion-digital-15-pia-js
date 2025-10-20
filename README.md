# 💝 Invitación Digital de 15 Años

Una elegante invitación digital moderna para celebrar los 15 años, construida con Next.js 15, React y Supabase (stack en JavaScript/JSX).

## ✨ Características

- 🎨 **Diseño Moderno y Elegante**: Interfaz hermosa con animaciones suaves y transiciones
- 🌓 **Modo Claro/Oscuro**: Soporte completo para temas claro y oscuro
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- 🎵 **Música de Fondo**: Reproductor de música integrado
- ⏱️ **Cuenta Regresiva**: Contador en tiempo real hasta el día del evento
- 📸 **Galería de Fotos**: Carrusel interactivo de imágenes
- 📍 **Información del Evento**: Detalles de ceremonia y fiesta con integración de mapas
- 👗 **Código de Vestimenta**: Sección dedicada con recomendaciones
- 🎁 **Registro de Regalos**: Información sobre opciones de regalo
- ✅ **Sistema RSVP**: Confirmación de asistencia integrada con base de datos
- 👨‍💼 **Panel de Administración**: Vista administrativa para gestionar confirmaciones
- 👪 **Vista Familiar**: Página especial para invitaciones familiares

## 🚀 Tecnologías

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Lenguaje**: JavaScript (JS/JSX)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/)
- **Base de Datos**: [Supabase](https://supabase.com/)
- **Animaciones**: Framer Motion (via Radix UI)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Gestión de Paquetes**: pnpm
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 18.x o superior
- pnpm 8.x o superior (o npm)
- Una cuenta de Supabase (para la base de datos)

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd "Invitacion digital de 15 para Pia"
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   # o con npm
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. **Configura la base de datos**
   
   Ejecuta el script SQL en tu proyecto de Supabase:
   ```bash
   scripts/001_create_rsvps_table.sql
   ```

5. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   # o con npm
   npm run dev
   ```

6. **Abre tu navegador**
   
   Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
├── app/                      # Rutas de Next.js (App Router)
│   ├── page.jsx             # Página principal
│   ├── layout.jsx           # Layout principal
│   ├── globals.css          # Estilos globales
│   ├── admin/               # Panel de administración
│   └── family/              # Vista familiar
├── components/              # Componentes React
│   ├── ui/                  # Componentes UI reutilizables
│   ├── hero-section.jsx     # Sección de héroe
│   ├── countdown-section.jsx # Cuenta regresiva
│   ├── photo-gallery.jsx    # Galería de fotos
│   ├── rsvp-section.jsx     # Sección de confirmación
│   └── ...                  # Otros componentes
├── contexts/                # Context providers de React
├── hooks/                   # Custom React hooks
├── lib/                     # Utilidades y configuración
│   ├── actions/             # Server actions
│   ├── supabase/            # Cliente de Supabase
│   └── utils.js             # Funciones de utilidad
├── public/                  # Archivos estáticos
│   └── images/              # Imágenes del proyecto
├── scripts/                 # Scripts de base de datos
└── styles/                  # Estilos adicionales
```

## 🎯 Componentes Principales

### Pantalla de Introducción
Animación de bienvenida elegante al cargar la página.

### Hero Section
Presentación principal con el nombre y fecha del evento.

### Countdown
Contador regresivo dinámico hasta el día del evento.

### Galería de Fotos
Carrusel interactivo con imágenes de la quinceañera.

### Ceremonia y Fiesta
Información detallada de ubicaciones con mapas interactivos.

### Código de Vestimenta
Guía visual del dress code sugerido.

### RSVP
Sistema de confirmación con formulario y almacenamiento en base de datos.

## 🎨 Personalización

### Cambiar Colores
Edita el archivo `app/globals.css` para personalizar la paleta de colores:
```css
:root {
  --primary: ...;
  --secondary: ...;
  /* Más variables de color */
}
```

### Modificar Contenido
- **Información del evento**: Edita los componentes en `components/`
- **Imágenes**: Reemplaza los archivos en `public/images/`
- **Texto**: Actualiza el contenido directamente en cada componente

## 🚀 Despliegue

### Desplegar en Vercel (Recomendado)

1. Sube tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Configura las variables de entorno
4. ¡Despliega!

### Build para Producción

```bash
pnpm build
pnpm start
```

## 📊 Base de Datos

El proyecto utiliza Supabase con la siguiente estructura:

### Tabla: `rsvps`
- `id`: UUID (Primary Key)
- `name`: TEXT
- `email`: TEXT
- `phone`: TEXT
- `guests_count`: INTEGER
- `attending`: BOOLEAN
- `message`: TEXT
- `created_at`: TIMESTAMP

## 🔒 Seguridad

- Las claves de API están protegidas mediante variables de entorno
- Supabase maneja la autenticación y autorización
- Las políticas RLS (Row Level Security) protegen los datos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Scripts Disponibles

```bash
pnpm dev        # Inicia el servidor de desarrollo
pnpm build      # Construye la aplicación para producción
pnpm start      # Inicia el servidor de producción
pnpm lint       # Ejecuta el linter
```

## 🐛 Solución de Problemas

### Error al conectar con Supabase
Verifica que las variables de entorno estén correctamente configuradas en `.env.local`

### Imágenes no se cargan
Asegúrate de que las imágenes estén en la carpeta `public/images/` y los nombres coincidan



## 📄 Licencia

Este proyecto está disponible bajo la Licencia Creative Commons Reconocimiento-NoComercial 4.0 Internacional (CC BY-NC 4.0).

Puedes usar, modificar y compartir este proyecto para fines personales y no comerciales, siempre dando crédito al autor original.

No está permitido el uso comercial sin autorización expresa.

Más información: [https://creativecommons.org/licenses/by-nc/4.0/](https://creativecommons.org/licenses/by-nc/4.0/)

## 👨‍💻 Autor

Creado con 💜 para celebrar momentos especiales

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!
