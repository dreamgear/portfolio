# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment

This portfolio is deployed as a static site served by Nginx in a Docker container behind Traefik.

### Quick Deploy

Run the following commands locally to deploy updates:

`ash
# 1. Generate static site
npm run generate

# 2. Copy static files to the server
scp -r .output/public jeff@one.dreamgearweb.com:/home/jeff/portfolio/

# 3. Rebuild and restart the container
ssh jeff@one.dreamgearweb.com "cd /home/jeff/portfolio && docker compose up -d --build"
``n
### Server Configuration
- **Location**: /home/jeff/portfolio
- **URL**: [https://www.dreamgearweb.com](https://www.dreamgearweb.com)
- **Files**:
  - docker-compose.yml: Defines the web service and Traefik labels.
  - 
ginx.conf: Nginx configuration for serving static assets.
  - Dockerfile: Builds the Nginx image with the static content.
