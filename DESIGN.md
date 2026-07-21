# Jimmy-eng Portfolio Design System

## 1. Purpose and visual concept

The site presents Jyun-Ming Liao as an engineer-researcher who connects camera physics, computer vision, machine learning, and production systems. The visual idea is **Academic Field Notes**: a white editorial canvas, narrow reading measure, restrained blue accent, typographic hierarchy, and thin rules. Research interests, publications, experience, and education lead the narrative. No design, code, text, imagery, measurements, or branded assets are copied from the reference site.

## 2. Color tokens

| Token | Value | Use |
|---|---:|---|
| `--ink-950` | `#142033` | Primary text |
| `--ink-900` | `#23344d` | Secondary headings |
| `--ink-700` | `#314158` | Secondary dark text |
| `--ink-500` | `#607087` | Muted text |
| `--paper` | `#fafbfc` | Page background |
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
- Hero: single editorial column with name, appointment, and concise research biography.
- Navigation: LinkedIn and GitHub are grouped at the upper left; academic sections and printable CV are at the right.
- Experience: two-column role metadata/content desktop; stacked mobile.
- Selected work: two cards desktop, stacked mobile.

## 5. Components and information hierarchy

1. Sticky navigation: wordmark plus LinkedIn/GitHub at left; About, Research, Experience, Publications, Contact, and CV at right.
2. Hero: name, current appointment, concise research biography, and contact actions.
3. Research interests: Imaging systems, Computer vision & ML, Systems & automation.
5. Experience: MediaTek role and outcome-led work streams.
6. Selected work: published research and intelligent delta robot.
7. Education and contact CTA.

Sections use typographic hierarchy and one-pixel rules before cards. Cards use small radii, no shadows, and no decorative glass. Buttons have clear default, hover, active, and `:focus-visible` states. Social icons are accessible inline SVGs—never emoji or icon fonts. Company logos and profile photos are omitted. The public site omits the phone number; email, LinkedIn, GitHub, and publication URLs are allowed.

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
