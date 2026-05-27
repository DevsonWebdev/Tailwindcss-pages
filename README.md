# Repository description
This repo contazins some of the projects I worked on designed with tailwind a uitilty based CSS framework.
The ciurrent projects are landing pages
## 🛠 Features
- **Utility-First Styling:** Built entirely with Tailwind CSS utility classes.
- **Fully Responsive:** Mobile-first design for all screen sizes.
## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) installed on your machine.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd your-project-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Initialize Tailwind (if starting from scratch):**
   ```bash
   npx tailwindcss init
   ```

## 💻 Development
To run the project in development mode with live reloading:
```bash
npm run dev
```

If using the Tailwind CLI directly to watch for changes:
```bash
npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch
```

## 🏗 Production Build
To generate a minified, production-ready CSS file:
```bash
npm run build
```

## ⚙ Configuration
The project uses `tailwind.config.js` to manage custom themes and plugins. 
- **Content:** Scans files in `./src/**/*.{html,js}` for class names.
- **Plugins:** Includes `@tailwindcss/typography` for styling Markdown.

## 📄 License
This project is licensed under the [MIT License](LICENSE).
