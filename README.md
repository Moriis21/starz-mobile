# STARZ University Mobile Portal

Mobile friendly student portal for browsing programs, course guides, handbooks, university contacts, and student services.

Live application: [https://starz-mobile.vercel.app](https://starz-mobile.vercel.app)

## Status

Mobile focused web application

## Key capabilities

- Student login and signup
- Programs, course guides, and handbook access
- Student portal and contact views
- Responsive React interface

## Technology

- React
- Vite
- Tailwind CSS
- Framer Motion
- Recharts

## Local development

Requirements: Node.js and pnpm.

```bash
cd starz-university-app
pnpm install
pnpm run dev
```

### Available commands

| Command | Purpose |
| --- | --- |
| `pnpm run dev` | `vite` |
| `pnpm run build` | `vite build` |
| `pnpm run lint` | `eslint .` |
| `pnpm run preview` | `vite preview` |

## Configuration

External service credentials must be supplied through local or deployment environment variables. Add a sanitized `.env.example` before onboarding additional developers. Keep all real credentials outside version control.

## Project structure

| Path | Purpose |
| --- | --- |
| `starz-university-app/` | STARZ University application package |

## Security

- Keep credentials and production environment files out of version control.
- Review authentication, authorization, database policies, and input validation before production use.
- Run the available lint, type checking, test, and build commands before deployment.

## License

No license file is currently included. All rights are reserved unless the repository owner states otherwise.

## Maintainer

Morris L. Dorley Jr, [@Moriis21](https://github.com/Moriis21)

