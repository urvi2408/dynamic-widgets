# Dynamic Dashboard Widget

A customizable dashboard application built with React, TypeScript, and Vite featuring drag-and-drop widgets for a personalized user experience.

## 🚀 Live Demo

**Vercel Deployment:** [https://dynamic-widgets-7ynp-seven.vercel.app/](https://dynamic-widgets-7ynp-seven.vercel.app/)

## ✨ Features

- **Drag-and-Drop Interface**: Rearrange widgets with intuitive drag-and-drop functionality
- **Multiple Widget Types**: Calendar, Weather, News, Google Maps, Stock Market, Quotes, and more
- **Customizable Layout**: Add, remove, and resize widgets to create your perfect dashboard
- **Responsive Design**: Works seamlessly across different screen sizes
- **Real-time Updates**: Dynamic content updates for weather, news, and market data

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Grid Layout** - Drag-and-drop grid system

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dynamic-dashboard-widget
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Build for production:
```bash
npm run build
# or
yarn build
```

## 📱 Available Widgets

- **Calendar Widget**: View and manage your schedule
- **Weather Widget**: Real-time weather information
- **News Widget**: Latest news updates
- **Google Maps Widget**: Interactive map integration
- **Stock Market Widget**: Track stock prices and market trends
- **Quotes Widget**: Inspirational quotes

## 🎨 Customization

The dashboard layout is fully customizable. Use the toolbox to:
- Add new widgets to your dashboard
- Drag and drop to rearrange widgets
- Resize widgets to your preferred size
- Remove widgets you don't need

## 📄 Project Structure

```
src/
├── common/
│   ├── customGridLayout/   # Grid layout component
│   └── toolbox/             # Widget toolbox
├── components/
│   ├── calendar/            # Calendar widget
│   ├── dashboard/           # Main dashboard component
│   ├── weather/             # Weather widget
│   ├── news/                # News widget
│   ├── googleMaps/          # Google Maps widget
│   ├── stockMarket/         # Stock market widget
│   └── quotes/              # Quotes widget
└── types/                   # TypeScript type definitions
```

## 🔧 Expanding the ESLint configuration

For production applications, update the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using React, TypeScript, and Vite**
