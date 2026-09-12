# PPP Union - Official Portal

This is the complete, full-stack Vite + React + TypeScript web application for the **Public-Private Partnership Union (PPP Union)**.

---

## Project Structure

```
├── public/                 # Static public assets, icons, logos, manifests
│   ├── logo.png            # Official PPP Union emblem
│   ├── favicon.ico         # Browser favicon
│   ├── pwa-192x192.png     # PWA mobile icon (192px)
│   ├── pwa-512x512.png     # PWA desktop icon (512px)
│   └── icon.svg            # Scalable vector emblem
├── src/                    # Full React + TypeScript source code
│   ├── components/         # Modular application components
│   ├── context/            # Language & Admin State contexts
│   ├── data/               # Official SDGs, Member, & Regulatory data
│   ├── App.tsx             # Root Application Component
│   ├── main.tsx            # Application DOM entry
│   └── index.css           # Tailwind CSS styles
├── firebase.json           # Pre-configured Firebase Hosting config (points to 'dist')
├── .firebaserc             # Firebase project configuration
├── index.html              # HTML5 template entry point
├── package.json            # Node.js dependencies and lifecycle scripts
├── tsconfig.json           # TypeScript compiler configuration
└── vite.config.ts          # Vite build, Tailwind v4, and PWA configuration
```

---

## Local Development (Quick Start)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Authentication & Access Control

1. **Default Mode (Signed-out Visitor View)**:
   - When deployed to Firebase or accessed by public visitors, the site opens strictly in non-editable client mode (`isAdmin = false`).
   - Content editing tools, inline editors, and the administrative dashboard are hidden and disabled.

2. **Secretariat Administrator Authentication**:
   - Authorized staff can unlock administrative controls by clicking **Secretariat Admin** in the footer or entering `#admin` in the URL.
   - Requires entering the Secretariat security passcode (`secretariat2026` or `ppp2026`).

3. **Member Portal Access**:
   - Visitors access the **Members Login** terminal to authenticate as a registered delegate or consultant.
   - Evaluators can test both the authenticated member terminal (via Member ID/password or 1-Click test credentials) and the signed-out state using the **Sign Out** button.

---

## Deploying to Firebase Hosting

Firebase Hosting serves compiled static assets, **not** the raw TypeScript code. The pre-configured `firebase.json` serves from the `dist/` directory.

### Quick Deploy (One Command)

1. Make sure Firebase CLI is installed:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Connect to your Firebase project:
   ```bash
   firebase use YOUR-FIREBASE-PROJECT-ID
   ```
   *(Or edit `.firebaserc` with your project ID)*

4. Build and deploy:
   ```bash
   npm run deploy:firebase
   ```
   *(This runs `npm run build` to create `dist/` and deploys it directly to Firebase Hosting)*

---

## Continuous Deployment via GitHub Actions (Optional)

To have Firebase automatically update whenever you push changes to GitHub:

1. Run:
   ```bash
   firebase init hosting:github
   ```
2. Set public directory to: `dist`
3. Single page app: `Yes`
4. Automatic builds with GitHub: `Yes`
