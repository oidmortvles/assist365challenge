This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Decisiones Tomadas

Al ser una sección que esta destinada a un agente interno y no un consumidor final, opte por dejar los controles de filtros y paginación en la parte superior.
Limpié la ui de distracciones pensando en ese agente que puede tener en linea al Cliente y en una estetica de poco contraste para no cansar la vista en caso de que la busqueda sea extensa.

Priorice que sea Mobile First en caso de que un Usuario tenga acceso a ella y que los mensajes sean claros y breves.

Me asegure de proteger la ruta del backend usando un routeHandler. En caso de que el backend fallé, le llegue una respuesta al usuario con un error.tsx y de controlé las interacciones para no hacer peticiones innecesarios.

Pensé en usar Zustand para el manejo de estados globales pero me parecio un costo innecesario por el tamaño de la app actual.


## Mejoras
Al momento de hacer la prueba estaba un poco tenso y no logre terminarlo. La hora me pasó muy rápido.

Me base en una hoja de estilos que usé en otro proyecto, me gustaria haberle dado mejor una identidad.

Otra posible mejora que me retraso un poco fue pensar si habia una mejor manera de hacer esto más SSR. Pensé en que los primeros datos se carguen con una peticion async desde page.tsx pero lo descarté porque generaba una doble peticion innecesaria.
Aun asi creo que es un desarrollo muy aceptable para esta prueba.









