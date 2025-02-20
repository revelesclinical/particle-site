# Clinical Engagement Platform

A Next.js-based clinical engagement platform with Docker support.

## Features

- Next.js App Router architecture
- ESM module support
- Multi-architecture Docker builds (amd64, arm64)
- Standalone mode for optimized production builds
- shadcn/ui components
- TypeScript support

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## Docker Build

The project includes multi-architecture Docker support. To build and run:

```bash
# Build and run using the build script
./up_build.sh

# Or manually with docker-compose
BUILD_TAG=$(date '+%Y%m%d-%H%M%S') docker-compose up --build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Required environment variables
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

## Architecture

- `app/` - Next.js App Router pages and layouts
- `components/` - React components using shadcn/ui
- `lib/` - Shared utilities and configurations
- `public/` - Static assets
- `styles/` - Global styles and Tailwind CSS configuration

## Docker Configuration

- `Dockerfile` - Multi-stage build process
- `docker-compose.yml` - Service configuration
- `up_build.sh` - Build script with multi-arch support

## Build Output

The project uses Next.js standalone output mode, which:
- Creates a minimal production build
- Includes only necessary dependencies
- Optimizes for containerized deployment
- Supports ESM modules
