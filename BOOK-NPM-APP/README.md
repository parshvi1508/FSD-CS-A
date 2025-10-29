# Book NPM App

Lightweight React app using Parcel bundler.

Changes made:
- Added `index.html` entry file with root div.
- Updated `index.jsx` to import React, import `App.css`, and use a placeholder image.
- Updated `package.json` scripts: `start` uses Parcel (`parcel index.html --open`) and `build` added.
- Removed `main` field from `package.json` to avoid Parcel build warning.

How to run (PowerShell):

```powershell
cd "G:\BTech\BTech III\sem5\FSD\FSD-CS-A\BOOK-NPM-APP"
npm install
npm start
```

Build for production:

```powershell
npm run build
```

Notes:
- Parcel v2 is used as bundler. If you don't have it installed, `npm install` (it is listed in dependencies) will prepare the environment.
- The app uses an external placeholder image; replace `src` in `index.jsx` with a local `book.jpg` if you want a custom cover.
