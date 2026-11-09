# Moletrix — Virtual Molecular Lab

Moletrix is an educational React + TypeScript application for exploring curated small molecules and protein structures. It includes interactive 3D viewers, sequence and property panels, spectroscopy references, comparison tools, and printable learning reports.

This edition uses a curated local library. AI compound generation, synthesis planning, and drug-development workflows are not provided. Calculated or sample values are educational estimates, not medical or laboratory instructions.

## Requirements

- Node.js 20.19+ (Node.js 22 LTS recommended)
- npm 10+

## Run locally

1. Extract the ZIP archive.
2. Open a terminal in the extracted `moletrix-project` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000). The API health check is available at [http://localhost:3000/api/health](http://localhost:3000/api/health).

No API key or `.env` file is required for the educational library. You may set `PORT=3000` in your environment to change the port.

## Production build

```bash
npm install
npm run build
npm start
```

The production server serves the generated `dist/` folder. Set `PORT` if your hosting provider assigns a port automatically. The `npm start` command selects production mode on Windows, macOS, and Linux.

## Useful scripts

- `npm run dev` — run Express with the Vite development middleware
- `npm run build` — build the frontend into `dist/`
- `npm run check` — run TypeScript checking
- `npm start` — serve the production build

## Deploying as a website

Deploy the repository to a Node.js hosting provider that supports persistent Express servers. Configure the build command as `npm install && npm run build` and the start command as `npm start`. The host must provide a writable process environment and set `PORT` automatically or allow you to configure it.

## Notes

- Keep `.env` files and secrets out of source control.
- The 3D viewers require WebGL support in the browser.
- Molecule/protein records are curated sample data; verify scientific values against authoritative references before using them in formal work.
