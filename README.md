# Dev Portfolio

Portafolio digital desarrollado con **Angular 19** para presentar cinco proyectos del curso de Arquitectura de Software (UCEVA).

**Demo:** https://valentina19-07.github.io/Project-Dev-Portfolio/

## Funcionalidades

- Perfil profesional de Juan Fernando Vargas con habilidades, lenguajes y tecnologías.
- Catálogo de cinco proyectos con descripción, tecnologías y características.
- Enlaces al repositorio y a la demo cuando están disponibles.
- Los datos y enlaces de los proyectos 2–5 están pendientes de confirmación.

## Estructura

```text
src/app/
├── components/
│   ├── header/
│   ├── profile/
│   ├── project-card/
│   ├── project-catalog/
│   └── footer/
├── data/         portfolio.data.ts (perfil y proyectos)
└── models/       portfolio.model.ts (interfaces)
```

## Ejecutar en local

```bash
npm install
npm start        # http://localhost:4200
npm test         # pruebas unitarias
npm run build    # build de producción
```

## CI/CD

El workflow `.github/workflows/deploy.yml` se ejecuta en cada push a `main`:

1. **build**: instala dependencias, ejecuta las pruebas y compila la aplicación.
2. **deploy**: publica el resultado en GitHub Pages.
3. **verify**: comprueba que la aplicación desplegada responde con HTTP 200.

## Convenciones

Se usan [Conventional Commits](https://www.conventionalcommits.org/): `feat`, `fix`, `docs`, `style`, `test`, `ci` y `chore`.

## Autores

- Valentina Gonzales Mejia (@valentina19-07)
- Juan Fernando Vargas (juan.vargas03@uceva.edu.co)
