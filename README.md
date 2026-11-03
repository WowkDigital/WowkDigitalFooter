# 📦 Wowk Digital Footer

<div align="center">

[![Live Demo](https://img.shields.io/badge/DEMO-Live_Preview_%26_Configurator-6366f1?style=for-the-badge&logo=github&logoColor=white)](https://wowkdigital.github.io/WowkDigitalFooter/)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.1.0-blue?style=for-the-badge)](package.json)
[![CDN jsDelivr](https://img.shields.io/badge/CDN-jsDelivr-ff5627?style=for-the-badge&logo=jsdelivr&logoColor=white)](https://cdn.jsdelivr.net/gh/WowkDigital/WowkDigitalFooter@latest/wowk-digital-footer.js)
[![Contrast ITU-R BT.709](https://img.shields.io/badge/Contrast-ITU--R_BT.709-a855f7?style=for-the-badge)]()
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0_Dep_%2F_<3kB-success?style=for-the-badge)]()

<br>

**Nowoczesny, adaptacyjny komponent stopki z mikro-animacją i automatycznym doborem kontrastu dla całego ekosystemu Wowk Digital.**  
*A modern, ultra-lightweight, drop-in footer component with smart background luminance detection and smooth micro-animations.*

[🚀 Podgląd na żywo & Konfigurator](https://wowkdigital.github.io/WowkDigitalFooter/#preview-section) • [🤖 Prompt dla Agenta AI](#-ai-coding-agent-prompt) • [⚡ Szybki Start](#-quick-start-cdn) • [📦 Frameworki](#-integracje-z-frameworkami) • [⚙️ API](#️-pelna-konfiguracja-api) • [🎨 Style CSS](#-wlasna-stylizacja-zmienne-css)

</div>

---

## ✨ Kluczowe cechy (Key Features)

- 🌓 **Inteligentny kontrast (Smart Contrast Detection)**: Algorytm **ITU-R BT.709** bada luminancję tła kontenera w drzewie DOM i automatycznie dopasowuje motyw (`dark` / `light`), gwarantując idealną czytelność na dowolnym tle (w tym na gradientach i czystej bieli).
- 💓 **Mikro-animacja serca (Heartbeat Animation)**: Subtelna, sprzętowo akcelerowana animacja pulsu `Made with ❤️ by Wowk Digital` dodająca elegancji Twojej aplikacji.
- ⚡ **Zero Zależności (Zero Dependencies)**: Czysty Vanilla JS, poniżej 3 kB po kompresji. Zero bibliotek zewnętrznych, zero narzutu na czas ładowania (LCP/FID).
- 📱 **100% Responsywność**: Perfekcyjne dopasowanie od wąskich ekranów smartfonów (320px) po ultrawide 4K.
- 🔗 **Integracja z Hubem Ekosystemu (`WD_HUB`)**: Opcjonalny, estetyczny przycisk `see more WD apps` łączący wszystkie projekty Wowk Digital.
- 🎨 **Pełna kontrola CSS (CSS Variables)**: 6 zmiennych stylów umożliwiających natychmiastowe dostosowanie palety kolorów bez dotykania kodu JS.
- 🤖 **AI-Agent Ready**: Gotowe polecenia dla asystentów AI (Cursor, Claude 3.7, ChatGPT, Antigravity, GitHub Copilot).

---

## 👁️ Podgląd wizualny (Visual Preview)

```text
+--------------------------------------------------------------------------------------------------+
|                                        MADE WITH ❤️ BY                                           |
|                                     ▲ WOWK DIGITAL                                              |
|                                  [ ⊞ SEE MORE WD APPS ]                                         |
|                                   © 2026 Sivis Drive                                             |
+--------------------------------------------------------------------------------------------------+
```

| Motyw Ciemny (`dark`) | Motyw Jasny (`light`) |
| :--- | :--- |
| ![Dark Theme](https://img.shields.io/badge/Theme-Dark-090b10?style=flat-square&logo=github) Jasny tekst `#94a3b8`, białe logo `#f8fafc`, subtelny obrys | ![Light Theme](https://img.shields.io/badge/Theme-Light-f8fafc?style=flat-square&logo=github) Grafitowy tekst `#64748b`, ciemne logo `#0f172a`, wysoki kontrast |

> 💡 **Przetestuj na żywo:** Skorzystaj z [interaktywnego konfiguratora online](https://wowkdigital.github.io/WowkDigitalFooter/#preview-section), aby przetestować reakcję na różne kolory tła i symulować widoki Desktop / Laptop / Tablet / Mobile.

---

## 🤖 AI Coding Agent Prompt

Skopiuj poniższy prompt i wklej go bezpośrednio do **Cursor**, **ChatGPT**, **Claude**, **Antigravity** lub **GitHub Copilot**, aby asystent AI zintegrował stopkę w Twoim projekcie:

```text
Zadanie dla Agenta AI: Zintegruj oficjalną stopkę Wowk Digital Footer w tym projekcie.

1. Dołącz skrypt biblioteki z CDN:
   <script src="https://cdn.jsdelivr.net/gh/WowkDigital/WowkDigitalFooter@latest/wowk-digital-footer.js"></script>

2. Zainicjalizuj komponent w kodzie aplikacji po załadowaniu DOM:
   document.addEventListener('DOMContentLoaded', () => {
     if (window.WowkDigitalFooter) {
       WowkDigitalFooter.init({
         siteName: 'Twoja Nazwa Projektu', // np. 'Sivis Drive'
         container: 'body',                // selektor kontenera docelowego
         brandName: 'Wowk Digital',        // nazwa marki
         brandUrl: 'https://github.com/WowkDigital',
         showHubLink: true,                // przycisk 'see more WD apps'
         hubUrl: 'https://wowkdigital.github.io/WD_HUB/',
         theme: 'auto'                     // 'auto' (inteligentny kontrast BT.709), 'dark' lub 'light'
       });
     }
   });
```

---

## ⚡ Quick Start (CDN)

Najszybszy sposób wdrożenia stopki na dowolnej stronie HTML – wystarczy dodać skrypt z CDN jsDelivr:

```html
<!-- 1. Import biblioteki z CDN -->
<script src="https://cdn.jsdelivr.net/gh/WowkDigital/WowkDigitalFooter@latest/wowk-digital-footer.js"></script>

<!-- 2. Inicjalizacja z konfiguracją Twojego projektu -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    WowkDigitalFooter.init({
      siteName: 'Sivis Drive'
    });
  });
</script>
```

---

## 📦 Integracje z Frameworkami

### 1. React & Next.js (App Router / Pages Router)

Utwórz dedykowany komponent klienta (np. `components/WowkFooter.jsx`):

```jsx
'use client';

import { useEffect } from 'react';

export default function WowkFooter() {
  useEffect(() => {
    // Sprawdź czy skrypt jest załadowany w oknie przeglądarki
    if (typeof window !== 'undefined' && window.WowkDigitalFooter) {
      window.WowkDigitalFooter.init({
        siteName: 'Moja Aplikacja React',
        container: '#wowk-footer-mount',
        theme: 'auto',
        showHubLink: true
      });
    }
  }, []);

  return <div id="wowk-footer-mount" />;
}
```

> **Wskazówka:** W Next.js załaduj skrypt w `app/layout.jsx` przy użyciu komponentu `next/script`:
> ```jsx
> import Script from 'next/script';
> 
> export default function RootLayout({ children }) {
>   return (
>     <html lang="pl">
>       <body>
>         {children}
>         <Script 
>           src="https://cdn.jsdelivr.net/gh/WowkDigital/WowkDigitalFooter@latest/wowk-digital-footer.js" 
>           strategy="lazyOnload" 
>         />
>       </body>
>     </html>
>   );
> }
> ```

---

### 2. Vue 3 (Composition API / Nuxt 3)

Utwórz komponent `WowkFooter.vue`:

```html
<template>
  <div id="vue-footer-mount"></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (typeof window !== 'undefined' && window.WowkDigitalFooter) {
    window.WowkDigitalFooter.init({
      siteName: 'Panel Vue 3',
      container: '#vue-footer-mount',
      theme: 'auto'
    });
  }
});
</script>
```

---

### 3. Astro

Wstaw komponent bezpośrednio w układzie `Layout.astro`:

```astro
---
// Layout.astro
const { title } = Astro.props;
---
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
    
    <div id="astro-footer-mount"></div>

    <script is:inline src="https://cdn.jsdelivr.net/gh/WowkDigital/WowkDigitalFooter@latest/wowk-digital-footer.js"></script>
    <script is:inline>
      document.addEventListener('DOMContentLoaded', () => {
        if (window.WowkDigitalFooter) {
          window.WowkDigitalFooter.init({
            siteName: 'Astro Blog',
            container: '#astro-footer-mount',
            theme: 'auto'
          });
        }
      });
    </script>
  </body>
</html>
```

---

### 4. Svelte / SvelteKit

```html
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    if (typeof window !== 'undefined' && window.WowkDigitalFooter) {
      window.WowkDigitalFooter.init({
        siteName: 'Svelte Dashboard',
        container: '#svelte-footer-mount',
        theme: 'auto'
      });
    }
  });
</script>

<div id="svelte-footer-mount"></div>
```

---

## ⚙️ Pełna konfiguracja (API)

Metoda `WowkDigitalFooter.init(options)` przyjmuje obiekt konfiguracyjny z poniższymi parametrami:

| Parametr | Typ | Wartość domyślna | Opis |
| :--- | :--- | :--- | :--- |
| `siteName` | `string` | `'Sivis Drive'` | Nazwa witryny/aplikacji, wyświetlana w sekcji praw autorskich (Copyright). |
| `container` | `string` | `'body'` | Selektor CSS elementu, do którego stopka zostanie dołączona (np. `'#app'`, `'.wrapper'`). |
| `brandName` | `string` | `'Wowk Digital'` | Nazwa marki/firmy wyświetlana obok oficjalnego wektora logo. |
| `brandUrl` | `string` | `'https://github.com/WowkDigital'` | Adres URL otwierany po kliknięciu w logo i nazwę marki (`target="_blank"`). |
| `showHubLink` | `boolean` | `true` | Czy wyświetlać przycisk `see more WD apps` kierujący do centralnego katalogu aplikacji. |
| `hubUrl` | `string` | `'https://wowkdigital.github.io/WD_HUB/'` | Adres URL docelowy przycisku centralnego katalogu aplikacji. |
| `theme` | `string` | `'auto'` | Motyw kolorystyczny stopki: `'auto'` (inteligentny kontrast), `'dark'` lub `'light'`. |

### Przykład zaawansowany (Full Custom):

```javascript
WowkDigitalFooter.init({
  siteName: 'PulseMetrics Analytics',
  container: '#main-content-layout',
  brandName: 'Wowk Digital Solutions',
  brandUrl: 'https://github.com/WowkDigital',
  showHubLink: true,
  hubUrl: 'https://wowkdigital.github.io/WD_HUB/',
  theme: 'auto'
});
```

---

## 🌓 Inteligentny algorytm kontrastu (ITU-R BT.709)

Gdy parametr `theme` ma wartość `'auto'`, biblioteka wykonuje automatyczną analizę kontekstu renderowania:

1. **Przeszukiwanie drzewa DOM w górę**: Sprawdza rzeczywisty kolor tła (`backgroundColor`) oraz gradienty (`backgroundImage`) elementu wskazanego w `container`, wędrując w górę hierarchii DOM, aż do napotkania nieprzezroczystego tła.
2. **Obliczanie względnej luminancji według standardu ITU-R BT.709**:
   $$\text{Luminancja} = 0.2126 \cdot R + 0.7152 \cdot G + 0.0722 \cdot B$$
3. **Decyzja o motywie**:
   - Jeżeli tło jest jasne ($\text{Luminancja} \ge 140$), stopka aplikuje wariant jasny (`.wowk-footer--theme-light`) z ciemnym, czytelnym tekstem i logiem.
   - Jeżeli tło jest ciemne ($\text{Luminancja} < 140$), stopka zachowuje wariant ciemny z jasnym tekstem i subtelną poświatą loga.
4. **Odporność na brak tła (Fallback)**: Jeżeli całe drzewo jest przezroczyste, biblioteka bada kontrast koloru tekstu w kontenerze lub odczytuje preferencje systemowe użytkownika (`prefers-color-scheme`).

---

## 🎨 Własna stylizacja (Zmienne CSS)

Stopkę można w 100% dostosować do unikalnego wyglądu Twojej witryny za pomocą zmiennych CSS, bez ingerencji w kod biblioteki:

```css
/* Dodaj do głównego pliku stylów aplikacji */
.wowk-footer {
  --wf-bg: transparent;                     /* Kolor tła stopki (domyślnie: transparent) */
  --wf-text: #94a3b8;                       /* Kolor tekstu i copyright */
  --wf-brand: #f8fafc;                      /* Kolor wektora logo i nazwy marki */
  --wf-brand-hover: #6366f1;                /* Kolor logo/marki po najechaniu kursorem */
  --wf-accent: #ef4444;                     /* Kolor pulsującego serduszka (heartbeat) */
  --wf-border: rgba(255, 255, 255, 0.08);   /* Górna linia rozdzielająca stopki */
}
```

### Zmienne w zależności od motywu:

| Zmienna | Domyślnie w `dark` | Domyślnie w `light` | Opis |
| :--- | :--- | :--- | :--- |
| `--wf-bg` | `transparent` | `transparent` | Tło kontenera stopki |
| `--wf-text` | `#94a3b8` | `#64748b` | Tekst pomocniczy i copyright |
| `--wf-brand` | `#f8fafc` | `#0f172a` | Logo wektorowe i nazwa marki |
| `--wf-brand-hover` | `#ffffff` | `#000000` | Kolor marki w stanie `:hover` |
| `--wf-accent` | `#ef4444` | `#ef4444` | Akcent kolorystyczny pulsującego serca |
| `--wf-border` | `rgba(255, 255, 255, 0.08)` | `rgba(0, 0, 0, 0.08)` | Górna linia rozgraniczająca |

---

## 🖥️ Interaktywny konfigurator online

Odwiedź stronę [wowkdigital.github.io/WowkDigitalFooter](https://wowkdigital.github.io/WowkDigitalFooter/):

- 🎯 **Gotowe presety ekosystemu**: Sivis Drive, PulseMetrics, Wowk Studio, DocuMind AI, NovaStore.
- 📱 **Symulator responsywny (RWD)**: Przełączaj podgląd jednym kliknięciem: Desktop (100%), Laptop (1024px), Tablet (768px), Mobile (390px).
- 🎨 **Interaktywne testowanie kontrastu**: Paleta tła z próbnikiem HEX i gradientami weryfikująca live detekcję ITU-R BT.709.
- 📄 **Tryb atrap strony (Mock Page)**: Zobacz jak stopka wygląda zakotwiczona na dole kompletnej aplikacji SaaS.
- 📋 **Generator kodu**: Gotowe fragmenty dla CDN, React, Vue oraz zmiennych CSS.

---

## 📜 Licencja & Prawa autorskie

Projekt udostępniony jest na warunkach **Licencji MIT**.  
Wszelkie prawa autorskie i własność intelektualna należą do **[Wowk Digital](https://github.com/WowkDigital)**.
