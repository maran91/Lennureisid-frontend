# ✈️ Flight Booking Frontend

This is the frontend application for a flight booking system built with **React**, **Vite**, and **PrimeReact**. It allows users to:

- View available flights
- See flight details
- View available seats

---

## 🛠️ Tech Stack

- ⚛️ **React** — UI library
- ⚡ **Vite** — Next-gen frontend build tool
- 💅 **PrimeReact** — Beautiful UI components
- 🔁 **React Router** — Client-side routing
- 🧠 **Custom Hooks** — `useFetch` for data loading

---
Entry point

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
cd flight-booking-frontend
```
2. Install dependencies
```bash
npm install
```
3. Run the app
```bash
npm run dev
```

🔗 API Setup
This frontend expects a backend running on http://localhost:8080.

Make sure your vite.config.js includes API proxy setup:

```bash
server: {
  proxy: {
    '/flight': 'http://localhost:8080',
    '/flight-seats': 'http://localhost:8080'
  }
}
```
