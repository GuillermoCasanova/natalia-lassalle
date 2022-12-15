
// my-server.js
import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from '../build/middlewares.js';
import express from 'express';

const app = express();

app.get('/no-svelte', (req, res) => {
    res.end('This is not Svelte!');
  });
  

// let SvelteKit handle everything else, including serving prerendered pages and static assets

app.use(assetsMiddleware);
app.use(prerenderedMiddleware);
app.use(kitMiddleware);

// listen to ngnix socket
app.listen('/tmp/nginx.socket'); 