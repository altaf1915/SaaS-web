# SaaSly Company Website

Production-ready React + Node/Express + MongoDB SaaS starter with public pages, authentication, protected dashboard, projects, analytics, team management, settings, and contact form.

## Requirements

- Node.js 20+ (Node 22/24 recommended)
- MongoDB Atlas or a local MongoDB instance

## 1. Configure environment variables

### Backend

Copy `server/.env.example` to `server/.env` and set:

- `MONGO_URI`
- `JWT_SECRET`

The other values can remain as the development defaults.

### Frontend

Copy `client/.env.example` to `client/.env`. The default API URL is:

`http://localhost:5000/api`

## 2. Install dependencies

Open terminal 1:

```bash
cd server
npm install
```

Open terminal 2:

```bash
cd client
npm install
```

## 3. Run the application

Backend:

```bash
cd server
npm run dev
```

Frontend:

```bash
cd client
npm run dev
```

Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

## 4. Production build

```bash
cd client
npm run build
```

## Authentication

Authentication uses an HttpOnly `saasly_token` cookie. The browser sends it automatically through Axios `withCredentials: true`; no JWT is stored in localStorage.

## API health check

With the backend running, open:

`http://localhost:5000/api/health`

Expected response:

```json
{
  "success": true,
  "message": "SaaS API is running"
}
```

## Notes

- Do not commit real `.env` values.
- The supplied project archive intentionally excludes installed `node_modules`; run `npm install` in both applications.
- Replace placeholder brand/contact/social/legal content before production launch.
