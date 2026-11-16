import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import favicon from 'serve-favicon';
import { createApp, APP_SECTIONS, type AppSection } from './src/app.js';
import { html_, _html, html1, html2, html3 } from './src/componentHtml.js';
import { RenderApp, corsOption } from './src/utils/serverUtils.js';

const server = express();
const PORT: number = 3000; //Number(process.env.PORT) || 3000;

server.use(cors(corsOption));
server.use(favicon("./src/icons/favicon.ico"));

server.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const entries = await Promise.all(
      APP_SECTIONS.map(async (section): Promise<[AppSection, string]> => {
        const html = await RenderApp(createApp(section));
        return [section, html];
      })
    );

    const rendered = Object.fromEntries(entries) as Record<AppSection, string>;

    const fullHtml = [
      html_,
      rendered.menu,
      html1,
      rendered.notes,
      html2,
      rendered.auth,
      html3,
      rendered.expenses,
      _html,
    ].join('');

    res.send(fullHtml);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Errore sconosciuto';
    console.error('Errore durante il rendering SSR:', errorMessage);
    res.status(500).send('Errore interno del server durante il rendering della pagina.');
  }
});

server.use(express.static('dist'))
server.use(express.static('.'));

server.listen(PORT, () => {
  console.log('ready http://localhost:3000');
});
