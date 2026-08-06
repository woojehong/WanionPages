# WANION Brand Asset Manifest

## Web

| Asset | Use |
|---|---|
| `logo-mark.svg` | Canonical standalone mark at 32 px and above |
| `logo-mark-reversed.svg` | White mark on dark or purple fields |
| `logo-lockup.svg` | Header, footer, and editorial lockup |
| `favicon.svg` | Modern browser favicon; micro geometry |
| `favicon.ico` | Legacy/multi-resolution favicon: 16, 32, 48 px |
| `apple-touch-icon.png` | 180×180 Apple touch icon |
| `icon-192.png` | 192×192 PWA icon |
| `icon-512.png` | 512×512 PWA/store icon |
| `maskable-512.png` | 512×512 maskable PWA icon; mark stays within central 50% safe zone |
| `og-wanion.png` | 1200×630 social sharing image |

`icon-source.svg`, `maskable-source.svg`, and `og-source.svg` are production masters for raster regeneration.

## Addon

| Asset | Use |
|---|---|
| `addon/WanionAssist/Media/icon-64.tga` | WoW addon 64 px icon, uncompressed 32-bit BGRA |
| `addon/WanionAssist/Media/icon-32.tga` | WoW addon 32 px icon, uncompressed 32-bit BGRA |
| `addon/WanionAssist/Media/icon-64.png` | Transparent source/preview |
| `addon/WanionAssist/Media/icon-32.png` | Transparent source/preview |
| `addon/WanionAssist/Media/icon-source.svg` | Micro-geometry vector source |

## Geometry routing

- Canonical mark: 32 px and above.
- Micro mark: 16–24 px, favicon, and addon icons.
- Do not add gradients, glows, outlines, shadows, or close the internal gaps.
- The raster icon background is dark ink (`#111218`); standalone addon PNG/TGA files remain transparent.

## Verification

Pixel dimensions, alpha channels, ICO frame sizes, and TGA header fields are recorded in `ASSET_QA.txt`. `contact-sheet.jpg` is the rendered visual check.
