import { NextServer } from 'next/dist/server/next';
import { NextServerOptions, ProxyConfig } from '@nrwl/next';

const express = require('express');
const path = require('path');
const chokidar = require('chokidar');

export default async function nextWatchServer(
  app: NextServer,
  settings: NextServerOptions & { [prop: string]: any },
  proxyConfig: ProxyConfig
) {
  const handle = app.getRequestHandler();
  await app.prepare();

  const markdownPath = process.env.MARKDOWN_PATH;

  // watch folder if it exists
  if (markdownPath) {
    chokidar
      .watch(markdownPath, {
        usePolling: false,
        ignoreItial: true,
      })
      .on('all', async (filePathContext, eventContext = 'change') => {
        // accessing private APIs
        app['server']['hotReloader'].send('building');
        app['server']['hotReloader'].send('reloadPage');
      });
  }

  const server = express();
  server.disable('x-powered-by');

  // serve shared assets in public folder
  server.use(
    express.static(path.resolve(settings.dir, settings.conf.outdir, 'public'))
  );

  // set up proxy
  if (proxyConfig) {
    const middleware = require('http-proxy-middleware');
    Object.keys(proxyConfig).forEach((context) => {
      server.use(middleware(context, proxyConfig[context]));
    });
  }

  // default catch-all handler to allow Next.js to handle other routes
  server.all('*', (req, res) => handle(req, res));

  server.listen(settings.port, settings.hostname);
}
