# personal-finance-tracker-pwa
Academic project for the Web Applications course: a Progressive Web App (PWA) tracking personal expenses with dynamic charts and real-time Firebase integration.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Copy `.env.example` to `.env` and fill in your Firebase configuration keys.
   ```bash
   cp .env.example .env
   ```

3. **Run the application:**
   * **Production mode** (compiles TypeScript to `dist/` and starts the server):
     ```bash
     npm start
     ```
   * **Development mode** (runs the server with hot-reload via `tsx`):
     ```bash
     npm run dev
     ```
   * **Build only** (compiles TypeScript files):
     ```bash
     npm run build
     ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`.