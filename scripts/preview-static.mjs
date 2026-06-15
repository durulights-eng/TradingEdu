import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';

const root = path.resolve('dist');
const port = Number(process.env.PORT || 4180);
const host = process.env.HOST || '127.0.0.1';

const mime = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.svg', 'image/svg+xml'],
  ['.ico', 'image/x-icon'],
]);

createServer((request, response) => {
  const requestUrl = new URL(request.url || '/', `http://${host}:${port}`);
  const requestedPath = requestUrl.pathname === '/' ? '/index.html' : decodeURIComponent(requestUrl.pathname);
  let filePath = path.resolve(path.join(root, requestedPath));

  if (!filePath.startsWith(root + path.sep)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = path.join(root, 'index.html');
  }

  response.writeHead(200, {
    'Content-Type': mime.get(path.extname(filePath).toLowerCase()) || 'application/octet-stream',
  });
  createReadStream(filePath).pipe(response);
}).listen(port, host, () => {
  console.log(`ChartMon preview listening at http://${host}:${port}/`);
});
