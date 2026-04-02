# WowkDigitalFooter Library

A premium, drop-in footer component for Wowk Digital projects. Features a heartbeat animation, responsive design, and automatic dark mode support.

[![Live Demo](https://img.shields.io/badge/DEMO-Live_Preview-blueviolet?style=for-the-badge&logo=github)](https://WowkDigital.github.io/WowkDigitalFooter/)

## 🚀 Quick Usage (via jsDelivr CDN)

Add the script to your project:

```html
<script src="https://cdn.jsdelivr.net/gh/WowkDigital/WowkDigitalFooter@latest/wowk-digital-footer.js"></script>
```

Initialize the footer:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    WowkDigitalFooter.init({
        siteName: 'Twoja Nazwa Strony', // np: 'Sivis Drive'
        container: 'body',           // Opcjonalnie: gdzie osadzić footer (domyślnie body)
        brandName: 'Wowk Digital'    // Opcjonalnie
    });
});
```

## ✨ Live Demo

Zobacz stopkę w akcji: [Wowk Digital Footer Demo](https://WowkDigital.github.io/WowkDigitalFooter/)

Lub otwórz lokalnie plik `index.html` w swojej przeglądarce.

## 🛠️ Features

- **Responsive Design**: Adapts seamlessly to mobile and desktop.
- **Dark Mode Support**: Automatically switches colors based on system preferences.
- **Micro-animations**: Heartbeat animation for a premium feel.
- **Customizable**: Customize the brand name and site name with ease.

## 👤 Author

**Wowk Digital**
- GitHub: [@WowkDigital](https://github.com/WowkDigital)

## 📦 Local Installation

If you prefer to include it locally:

1. Copy `wowk-digital-footer.js` to your project.
2. Link it in your HTML.
3. Call `WowkDigitalFooter.init()`.

## 📜 License

MIT &copy; Wowk Digital
