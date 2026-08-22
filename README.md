# 📦 Wowk Digital Footer Library

A modern, responsive, and lightweight drop-in footer component designed for projects within the **Wowk Digital** ecosystem. The library automatically detects the page background color to adapt the theme (light/dark) and features smooth micro-animations (heartbeat) for a premium feel.

[![Live Demo](https://img.shields.io/badge/DEMO-Live_Preview-blueviolet?style=for-the-badge&logo=github)](https://WowkDigital.github.io/WowkDigitalFooter/)

## 🤖 AI Coding Agent Prompt (Cursor / ChatGPT / Claude / Antigravity)

Copy & paste this prompt directly into your AI Assistant to quickly install the footer into any project:

```text
Zadanie dla Agenta AI: Zintegruj oficjalną stopkę Wowk Digital Footer w tym projekcie.

1. Dołącz skrypt biblioteki z CDN:
   <script src="https://cdn.jsdelivr.net/gh/WowkDigital/WowkDigitalFooter@latest/wowk-digital-footer.js"></script>

2. Zainicjalizuj komponent w kodzie aplikacji po załadowaniu DOM:
   document.addEventListener('DOMContentLoaded', () => {
     if (window.WowkDigitalFooter) {
       WowkDigitalFooter.init({
         siteName: 'Your Site Name',       // e.g. 'Sivis Drive'
         container: 'body',                // target container selector
         brandName: 'Wowk Digital',        // brand label
         brandUrl: 'https://github.com/WowkDigital',
         showHubLink: true,                // 'see more WD apps' button
         hubUrl: 'https://wowkdigital.github.io/WD_HUB/',
         theme: 'auto'                     // 'auto' (smart contrast), 'dark' or 'light'
       });
     }
   });
```

---

## 🚀 Quick Start (CDN)

The fastest way to deploy the footer is using the CDN (jsDelivr). Simply add the script and the initialization code before the closing `</body>` tag in your HTML file.

```html
<!-- 1. Import library from CDN -->
<script src="https://cdn.jsdelivr.net/gh/WowkDigital/WowkDigitalFooter@latest/wowk-digital-footer.js"></script>

<!-- 2. Initialize with basic configuration -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    WowkDigitalFooter.init({
      siteName: 'Your Site Name', // e.g., 'Sivis Drive'
    });
  });
</script>
```

---

## 🛠️ Local Installation

If you prefer to host the footer files on your own server or project:

1. Download the `wowk-digital-footer.js` file from the repository.
2. Place it in your script directory (e.g., `assets/js/`).
3. Include it in your HTML file:
   ```html
   <script src="assets/js/wowk-digital-footer.js"></script>
   ```
4. Initialize the library by calling `WowkDigitalFooter.init({...})`.

---

## ⚙️ Full Configuration (API)

The `WowkDigitalFooter.init(options)` method accepts a configuration object. Below is a list of all available options:

| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `siteName` | `string` | `'Sivis Drive'` | Name of your site/application, displayed in the copyright section. |
| `container` | `string` | `'body'` | CSS selector of the element where the footer will be appended (e.g., `'#app'`, `'.wrapper'`). |
| `brandName` | `string` | `'Wowk Digital'` | Brand/company name displayed next to the logo. |
| `brandUrl` | `string` | `'https://github.com/WowkDigital'` | Target URL when clicking on the brand logo and name. |
| `showHubLink` | `boolean` | `true` | Whether to show the "see more WD apps" button pointing to the project hub. |
| `hubUrl` | `string` | `'https://wowkdigital.github.io/WD_HUB/'` | Target URL of the project hub button. |
| `theme` | `string` | `'auto'` | Footer color theme. Available values: `'auto'`, `'light'`, `'dark'`. |

### Advanced Deployment Example:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  WowkDigitalFooter.init({
    siteName: 'Admin Dashboard',
    container: '#main-content-layout',
    brandName: 'Wowk Digital Solutions',
    brandUrl: 'https://wowkdigital.com',
    showHubLink: true,
    hubUrl: 'https://wowkdigital.github.io/WD_HUB/',
    theme: 'dark' // Force dark theme regardless of the background
  });
});
```

---

## 🌓 Smart Theme Detection

When the `theme` parameter is set to `'auto'` (default), the library performs intelligent context analysis:
1. It checks the actual background color (`background-color`) of the target element specified in `container` (traversing up the DOM tree if the background is transparent).
2. It calculates the **relative luminance** of the background using the **ITU-R BT.709** standard:
   $$\text{Luminance} = 0.2126 \cdot R + 0.7152 \cdot G + 0.0722 \cdot B$$
3. If the container background is light (luminance $\ge 140$), the footer automatically applies the light theme style (`.wowk-footer--theme-light`).
4. If no background is detected, it falls back to the user's system preference (`prefers-color-scheme: light`).

---

## 🎨 Style Customization (CSS Variables)

The footer is designed to be fully customizable without modifying the JavaScript code. Simply override the appropriate custom properties in your website's CSS file:

```css
/* Add to your application's main CSS file */
.wowk-footer {
  --wf-bg: transparent;                      /* Footer background color (default: transparent) */
  --wf-text: #64748b;                        /* Default text and copyright color */
  --wf-brand: #0f172a;                       /* Main brand logo and name color */
  --wf-brand-hover: #6366f1;                 /* Brand logo/name hover color */
  --wf-accent: #ef4444;                      /* Animated heartbeat heart color */
  --wf-border: rgba(0, 0, 0, 0.08);          /* Divider border at the top of the footer */
}
```

> [!TIP]
> If you want to modify colors only for the light or dark theme versions, use the corresponding CSS class generated by the script:
> - Light theme: `.wowk-footer.wowk-footer--theme-light`
> - Dark theme: `.wowk-footer` (without the light class modifier)

---

## 📦 Framework Integration

### React / Next.js

In single-page applications (SPA) or SSR environments, ensure the footer is initialized after the DOM has rendered on the client.

```jsx
import { useEffect } from 'react';

export default function FooterComponent() {
  useEffect(() => {
    // Check if the script is loaded globally in the browser window
    if (typeof window !== 'undefined' && window.WowkDigitalFooter) {
      window.WowkDigitalFooter.init({
        siteName: 'My React Application',
        container: '#wf-container-root',
        theme: 'auto'
      });
    }
  }, []);

  return <div id="wf-container-root"></div>;
}
```

> [!IMPORTANT]
> Make sure the `wowk-digital-footer.js` script is loaded either in your page header or body (e.g., using a `<script>` tag in `index.html` or the Next.js `Script` component).

### Vue.js (Vue 3 / Composition API)

```html
<template>
  <!-- Mount container defined by CSS selector -->
  <div id="vue-footer-mount"></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.WowkDigitalFooter) {
    window.WowkDigitalFooter.init({
      siteName: 'Vue 3 Project',
      container: '#vue-footer-mount'
    });
  }
});
</script>
```

---

## 📜 License and Copyright

This project is licensed under the **MIT License**.
Copyright and intellectual property belong to **Wowk Digital**.
