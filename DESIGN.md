# Jimmy-eng Portfolio Design System

## 1. Purpose and visual concept

The site presents Jyun-Ming Liao as a senior imaging engineer who connects camera physics, computer vision, machine learning, and production systems. The visual idea is **Optical Bench**: precise dark instrumentation in the hero, followed by bright editorial content that makes technical evidence easy to scan. A restrained aperture/grid motif may appear only as CSS geometry. No design, code, text, imagery, or branded assets are copied from the reference site.

## 2. Color tokens

| Token | Value | Use |
|---|---:|---|
| `--ink-950` | `#07111f` | Hero and footer |
| `--ink-900` | `#0d1b2a` | Dark surfaces |
| `--ink-700` | `#314158` | Secondary dark text |
| `--ink-500` | `#607087` | Muted text |
| `--paper` | `#f7f9fc` | Page background |
| `--surface` | `#ffffff` | Cards and content |
| `--line` | `#dce4ee` | Borders and rules |
| `--blue-600` | `#1769e0` | Links and primary action |
| `--blue-400` | `#52a7ff` | Dark-surface accents |
| `--cyan-300` | `#66e1e8` | Optical highlight, sparingly |
| `--success` | `#147d64` | Availability marker |

Text/background combinations must meet WCAG AA. Gradients are limited to the hero's subtle optical glow; content surfaces remain solid.

## 3. Typography

- Sans: `Inter`, `Aptos`, `Segoe UI`, system UI, sans-serif. No remote font requests.
- Mono accent: `SFMono-Regular`, `Cascadia Code`, `Consolas`, monospace.
- Scale: 12, 14, 16, 18, 22, 28, 40, 56px using `clamp()` for 40px and above.
- Body line height: 1.7; headings: 1.08–1.2.
- Labels use mono at 12–13px with moderate letter spacing. Body copy is never fully justified.

## 4. Spacing and layout

- Spacing tokens: 4, 8, 12, 16, 24, 32, 48, 72, 96px.
- Content width: 1120px maximum, 24px desktop gutters, 20px tablet, 18px mobile.
- Sections use 96px vertical spacing desktop, 72px tablet, 56px mobile.
- Breakpoints: mobile `< 640px`, tablet `640–959px`, desktop `>= 960px`.
- Hero: asymmetrical two-column layout on desktop; stacked on tablet/mobile.
- Impact metrics: four-column desktop, two-column tablet, one-column mobile.
- Experience: two-column role metadata/content desktop; stacked mobile.
- Selected work: two cards desktop, stacked mobile.

## 5. Components and information hierarchy

1. Sticky navigation: wordmark, About, Expertise, Experience, Work, Contact, compact menu on mobile.
2. Hero: role, concise positioning statement, contact/GitHub actions, optical diagnostic panel.
3. Impact strip: 6+ years, 75% cycle reduction, 84% accuracy improvement, 97.5% cost reduction.
4. Expertise: Imaging systems, Computer vision & ML, Systems & automation.
5. Experience: MediaTek role and outcome-led work streams.
6. Selected work: published research and intelligent delta robot.
7. Education and contact CTA.

Cards use 16px radius, one-pixel borders, and no decorative glass. Buttons have clear default, hover, active, and `:focus-visible` states. Icons are inline original SVG or simple CSS geometry only—never emoji. Company logos and profile photos are omitted. The public site omits the phone number; email, LinkedIn, GitHub, and publication URLs are allowed.

## 6. Motion and interaction

- Transitions: 160–220ms, standard ease-out.
- Animate only `transform`, `opacity`, and `filter`.
- Hover lift is at most 2px; no continuous motion.
- Navigation highlights the current section using IntersectionObserver.
- Mobile navigation supports Escape, outside click, and correct `aria-expanded` state.
- `prefers-reduced-motion: reduce` disables smooth scrolling and nonessential transitions.

## 7. Responsive, accessibility, and quality rules

- Semantic landmarks, one `h1`, sequential headings, descriptive links, and a skip link are required.
- Minimum interactive target is 44×44px; visible keyboard focus is mandatory.
- No horizontal overflow at 375, 768, or 1280px.
- Decorative graphics are hidden from assistive technology; meaningful SVGs receive labels.
- The site works without JavaScript; JavaScript only enhances mobile navigation and active-section state.
- Include SEO description, canonical URL, Open Graph metadata, and a theme color.
- No trackers, remote fonts, frameworks, or third-party scripts.
- Print styles remove navigation/decorations and preserve readable résumé content.
