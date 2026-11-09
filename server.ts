import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 3000);

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Moletrix Educational Molecular Lab', mode: 'local-library' });
});

// AI compound generation, synthesis planning, and drug-development endpoints are
// intentionally not provided. The app works with its curated local learning data.
app.all(['/api/predict-protein', '/api/molecules/generate', '/api/compare-analysis'], (_req, res) => {
  res.status(410).json({
    error: 'This endpoint is not available in the educational edition.',
    message: 'Use the curated molecule and protein library for structure exploration.',
  });
});

async function startServer() {
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be a valid TCP port between 1 and 65535.');
  }

  const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--production');
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist'), { index: false }));
    app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Moletrix is running at http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error('Unable to start Moletrix:', error);
  process.exitCode = 1;
});
