/**
 * WowkDigitalFooter JS Library
 * Created for the Wowk Digital Ecosystem
 * 
 * Usage:
 * <script src="wowk-digital-footer.js"></script>
 * <script>
 *   WowkDigitalFooter.init({
 *     siteName: 'Sivis Drive',
 *     container: 'body',
 *     brandUrl: 'https://github.com/WowkDigital'
 *   });
 * </script>
 */

const WowkDigitalFooter = (() => {
    /**
     * Parses a color string (HEX, RGB, RGBA) into numeric RGBA components.
     */
    const parseColor = (colorStr) => {
        if (!colorStr || colorStr === 'transparent' || colorStr === 'rgba(0, 0, 0, 0)') {
            return null;
        }

        // RGB or RGBA format
        const rgbaMatch = colorStr.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);
        if (rgbaMatch) {
            const alpha = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1;
            if (alpha > 0.08) {
                return {
                    r: parseInt(rgbaMatch[1], 10),
                    g: parseInt(rgbaMatch[2], 10),
                    b: parseInt(rgbaMatch[3], 10),
                    a: alpha
                };
            }
        }

        // HEX format (#fff or #ffffff)
        const hexMatch = colorStr.match(/#([0-9a-f]{3,8})/i);
        if (hexMatch) {
            let hex = hexMatch[1];
            if (hex.length === 3 || hex.length === 4) {
                hex = hex.split('').map(c => c + c).join('');
            }
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            return { r, g, b, a: 1 };
        }

        return null;
    };

    /**
     * Computes relative luminance based on ITU-R BT.709 standard.
     */
    const calculateLuminance = (r, g, b) => {
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    /**
     * Analyzes container hierarchy to detect background brightness and color.
     */
    const detectBackground = (element) => {
        if (!element) {
            return { isDark: true, luminance: 0, color: '#000000', source: 'default' };
        }

        let el = element;
        // 1. Traverse up DOM hierarchy checking background colors and gradient images
        while (el && el !== document) {
            const style = window.getComputedStyle(el);
            
            // Computed background color
            const bgParsed = parseColor(style.backgroundColor);
            if (bgParsed) {
                const lum = calculateLuminance(bgParsed.r, bgParsed.g, bgParsed.b);
                return {
                    isDark: lum < 140,
                    luminance: Math.round(lum),
                    color: `rgb(${bgParsed.r}, ${bgParsed.g}, ${bgParsed.b})`,
                    source: 'element-background'
                };
            }

            // Inline or computed gradient background
            const bgImage = style.backgroundImage || '';
            const inlineBg = el.style ? (el.style.background || el.style.backgroundImage || '') : '';
            const combinedBg = bgImage + ' ' + inlineBg;
            if (combinedBg.includes('gradient')) {
                const colorParsed = parseColor(combinedBg);
                if (colorParsed) {
                    const lum = calculateLuminance(colorParsed.r, colorParsed.g, colorParsed.b);
                    return {
                        isDark: lum < 140,
                        luminance: Math.round(lum),
                        color: `gradient (${colorParsed.r}, ${colorParsed.g}, ${colorParsed.b})`,
                        source: 'gradient'
                    };
                }
            }

            el = el.parentElement;
        }

        // 2. Check document body and root
        const bodyStyle = window.getComputedStyle(document.body || document.documentElement);
        const bodyParsed = parseColor(bodyStyle.backgroundColor);
        if (bodyParsed) {
            const lum = calculateLuminance(bodyParsed.r, bodyParsed.g, bodyParsed.b);
            return {
                isDark: lum < 140,
                luminance: Math.round(lum),
                color: `rgb(${bodyParsed.r}, ${bodyParsed.g}, ${bodyParsed.b})`,
                source: 'body-background'
            };
        }

        // 3. Fallback: Check text color contrast of target element
        const textColor = window.getComputedStyle(element).color;
        const textParsed = parseColor(textColor);
        if (textParsed) {
            const textLum = calculateLuminance(textParsed.r, textParsed.g, textParsed.b);
            const isDark = textLum > 130;
            return {
                isDark: isDark,
                luminance: isDark ? 20 : 230,
                color: textColor,
                source: 'text-contrast-fallback'
            };
        }

        // 4. Fallback: System color scheme preference
        const isSysLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        return {
            isDark: !isSysLight,
            luminance: isSysLight ? 255 : 15,
            color: isSysLight ? '#ffffff' : '#0a0a0a',
            source: 'system-preference'
        };
    };

    const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap');

    .wowk-footer {
        --wf-bg: transparent;
        --wf-text: #94a3b8;
        --wf-brand: #f8fafc;
        --wf-brand-hover: #ffffff;
        --wf-accent: #ef4444;
        --wf-border: rgba(255, 255, 255, 0.08);
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 20px 40px;
        text-align: center;
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        gap: 12px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 40px;
        background: var(--wf-bg);
        border-top: 1px solid var(--wf-border);
        transition: color 0.3s ease, border-color 0.3s ease;
    }

    .wowk-footer__made-with {
        font-size: 11px;
        color: var(--wf-text);
        text-transform: uppercase;
        letter-spacing: 0.25em;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        opacity: 0.85;
    }

    .wowk-footer__heart {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        animation: wf-heartbeat 1.5s ease-in-out infinite;
    }

    .wowk-footer__heart svg {
        width: 14px;
        height: 14px;
        fill: var(--wf-accent);
        filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.5));
    }

    .wowk-footer__brand {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        margin: 6px 0;
        color: var(--wf-brand);
        transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s ease;
    }
    
    .wowk-footer__brand svg {
        height: 28px;
        width: auto;
        fill: currentColor;
        transition: fill 0.3s ease, filter 0.3s ease;
        filter: drop-shadow(0 0 10px rgba(255,255,255,0.06));
    }

    .wowk-footer__brand-text {
        font-size: 20px;
        font-weight: 800;
        color: currentColor;
        letter-spacing: -0.04em;
        transition: color 0.3s ease;
    }

    .wowk-footer__brand:hover {
        color: var(--wf-brand-hover);
        transform: translateY(-2px) scale(1.02);
    }
    
    .wowk-footer__brand:hover svg {
        filter: drop-shadow(0 0 16px rgba(255,255,255,0.25));
    }

    .wowk-footer__copyright {
        font-size: 12px;
        color: var(--wf-text);
        opacity: 0.55;
        font-weight: 400;
        letter-spacing: 0.02em;
    }

    .wowk-footer__hub-link {
        font-size: 11px;
        color: var(--wf-text);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: all 0.3s ease;
        opacity: 0.7;
        padding: 6px 14px;
        border-radius: 20px;
        border: 1px solid var(--wf-border);
        background: rgba(255, 255, 255, 0.03);
        margin: 4px 0;
    }

    .wowk-footer__hub-link:hover {
        opacity: 1;
        color: var(--wf-brand);
        border-color: rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
    }

    .wowk-footer__hub-link svg {
        width: 12px;
        height: 12px;
        fill: currentColor;
        transition: transform 0.3s ease;
    }

    .wowk-footer__hub-link:hover svg {
        transform: scale(1.1);
    }

    @keyframes wf-heartbeat {
        0% { transform: scale(1); }
        14% { transform: scale(1.3); }
        28% { transform: scale(1); }
        42% { transform: scale(1.15); }
        70% { transform: scale(1); }
    }

    /* Light Theme Modifier */
    .wowk-footer--theme-light {
        --wf-text: #64748b;
        --wf-brand: #0f172a;
        --wf-brand-hover: #000000;
        --wf-border: rgba(0, 0, 0, 0.08);
    }
    .wowk-footer--theme-light .wowk-footer__brand svg {
        filter: drop-shadow(0 1px 2px rgba(0,0,0,0.06));
    }
    .wowk-footer--theme-light .wowk-footer__brand:hover svg {
        filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
    }
    .wowk-footer--theme-light .wowk-footer__hub-link {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.08);
    }
    .wowk-footer--theme-light .wowk-footer__hub-link:hover {
        color: var(--wf-brand);
        background: rgba(0, 0, 0, 0.06);
        border-color: rgba(0, 0, 0, 0.2);
    }
    `;

    const injectStyles = () => {
        if (document.getElementById('wowk-digital-footer-styles')) return;
        const styleSheet = document.createElement("style");
        styleSheet.id = 'wowk-digital-footer-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    };

    const init = (options = {}) => {
        const {
            siteName = 'Sivis Drive',
            container = 'body',
            brandName = 'Wowk Digital',
            brandUrl = 'https://github.com/WowkDigital',
            showHubLink = true,
            hubUrl = 'https://wowkdigital.github.io/WD_HUB/',
            theme = 'auto'
        } = options;

        injectStyles();

        const footerMarkup = `
            <div class="wowk-footer__made-with">
                Made with <span class="wowk-footer__heart">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </span> by
            </div>
            <a href="${brandUrl}" target="_blank" rel="noopener noreferrer" class="wowk-footer__brand">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110">
                    <path d="M0 0 64 110 80 83 96 110 120 69 143 110 159 110 127 55 159 0 143 0 96 83 88 69 127 0 32 0 64 55 80 28 64 28 56 14 104 14 64 83 16 0z"/>
                </svg>
                <span class="wowk-footer__brand-text">${brandName}</span>
            </a>
            ${showHubLink ? `
            <a href="${hubUrl}" target="_blank" rel="noopener noreferrer" class="wowk-footer__hub-link">
                <svg viewBox="0 0 24 24">
                    <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10-17v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zm0 14h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1z"/>
                </svg>
                <span>see more WD apps</span>
            </a>
            ` : ''}
            <div class="wowk-footer__copyright">
                &copy; ${new Date().getFullYear()} ${siteName}
            </div>
        `;

        const footer = document.createElement('footer');
        footer.className = 'wowk-footer';
        footer.innerHTML = footerMarkup;

        const target = document.querySelector(container);
        const bgInfo = detectBackground(target || document.body);

        let activeTheme = theme;
        if (activeTheme === 'auto') {
            activeTheme = bgInfo.isDark ? 'dark' : 'light';
        }

        if (activeTheme === 'light') {
            footer.classList.add('wowk-footer--theme-light');
        }

        // Expose metadata for inspection / debugging
        footer.dataset.theme = activeTheme;
        footer.dataset.detectedLuminance = bgInfo.luminance;
        footer.dataset.detectedColor = bgInfo.color;
        footer.dataset.themeMode = theme;

        if (target) {
            // Remove existing footer instance in target to avoid duplicates
            const existing = target.querySelector('.wowk-footer');
            if (existing) existing.remove();
            
            target.appendChild(footer);
        } else {
            // Fallback to body
            document.body.appendChild(footer);
        }

        return {
            element: footer,
            activeTheme,
            bgInfo
        };
    };

    return {
        init,
        detectBackground
    };
})();

// Support CommonJS & browser globals
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WowkDigitalFooter;
}
if (typeof window !== 'undefined') {
    window.WowkDigitalFooter = WowkDigitalFooter;
}
