# Keshya

### Ayurvedic Herbal Hair Oils: an animated, interactive e-commerce experience

*Rooted in nature, crafted for your crown.*

**Live Demo:** [hair-growth-oil.netlify.app](https://hair-growth-oil.netlify.app)

---

## Table of Contents

**Overview**

1. [About](#about): the concept and design inspiration
2. [Features](#features): everything the site can do
    - [Motion & Animation](#motion--animation)
    - [Shopping](#shopping)
    - [Live Search](#live-search)
    - [Engagement](#engagement)

**Build**

3. [Tech Stack](#tech-stack): languages, browser APIs and fonts
4. [Getting Started](#getting-started): run it locally in under a minute
5. [Project Structure](#project-structure): what each file does

**Design & Customise**

6. [Design System](#design-system): the look and feel
    - [Colour Palette](#colour-palette)
    - [Typography](#typography)
    - [Motion](#motion)
7. [Customisation](#customisation): make it your own
    - [Change the colours](#change-the-colours)
    - [Edit products & content](#edit-products-herbs-reviews-or-faqs)
    - [Connect the newsletter](#connect-the-newsletter-to-a-real-service)

**Use & Ship**

8. [Keyboard Shortcuts](#keyboard-shortcuts)
9. [Performance & Accessibility](#performance--accessibility)
10. [Deployment](#deployment)
11. [Roadmap](#roadmap)
12. [Notes](#notes)

---

## About

**Keshya** (from the Sanskrit *kesha*, meaning *hair*) is a concept brand website for a line of Ayurvedic herbal hair oils. The design takes cues from premium wellness and Ayurvedic beauty brands: warm earthy tones, elegant serif typography, ingredient-led storytelling and a calm, ritual-focused shopping experience.

Every visual on the site, from the bottles with their rippling oil to the herb illustrations and icons, is hand-built in **SVG and CSS**. There are no image files and no frameworks, and nothing needs to be installed.

---

## Features

### Motion & Animation
- **Preloader:** an oil drop fills with gold, then the page wipes open
- **Hero:** the headline reveals word by word, the bottle floats with live rippling oil and rising bubbles, and the leaves follow the mouse in parallax
- **Micro-interactions:** a custom trailing cursor, magnetic buttons and hover lifts on cards
- **Scroll effects:** sections reveal on scroll, counters animate and the ritual timeline fills as you scroll
- **Fly-to-cart:** a gold dot flies from the product to the cart icon when you add an item

### Shopping
- **Product filtering** by concern: hair fall, dandruff, growth, dry & frizzy
- **Size selector** (100ml / 200ml) with an animated price change
- **Wishlist** toggle on every product
- **Cart drawer** with quantity controls, item removal, the subtotal and a **free-shipping progress bar**
- **Saved cart:** the cart is still there after you refresh the page (localStorage)

### Live Search
- Instant results across **oils, ingredients and FAQs**
- **Smart matching**: searching a concern like *"itchy"* or *"hair fall"* finds the right oil
- Highlighted matches, popular-search suggestions and **quick add-to-cart** from the results
- Clicking a result jumps straight to it: a product glows, a herb opens in the wheel and an FAQ expands

### Engagement
- **Herb Wheel:** six Ayurvedic herbs orbit a bottle. Click one to learn its benefits. It auto-cycles and pauses on hover
- **Hair Quiz:** 3 questions, then a personalised product match with a usage tip
- **Testimonials:** an auto-rotating slider with dot navigation
- **FAQ accordion** with smooth height animation
- **Newsletter:** email validation, a loading state, a success card with a **copyable discount code** and duplicate-subscriber detection

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Structure** | Semantic HTML5 |
| **Styling** | CSS3: custom properties, Grid, Flexbox, keyframes, `backdrop-filter`, `clip-path` |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Browser APIs** | IntersectionObserver · Web Animations API · `requestAnimationFrame` · localStorage · Clipboard API · Fetch |
| **Graphics** | Inline SVG (bottles, icons, illustrations) |
| **Fonts** | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts |
| **Hosting** | Netlify |

---

## Getting Started

No installation is needed.

**Option 1: just open it**
```
Download the project → double-click index.html
```

**Option 2: run a local server** (recommended while editing)
```bash
# Python
python -m http.server 8000

# or Node.js
npx serve .
```
Then visit `http://localhost:8000`.

**Option 3: VS Code**
Install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.

---

## Project Structure

```
keshya/
├── index.html        # Page structure and content
├── style.css         # Design tokens, layout, animations, responsive rules
├── script.js         # Data, rendering and all interactivity
└── README.md
```

### What's inside script.js

| Section | Purpose |
|---|---|
| `I` / `icon()` | The custom SVG icon set |
| `PRODUCTS`, `HERBS`, `TESTIS`, `FAQS` | All site content as editable data |
| `bottleSVG()` | Generates the animated bottle illustration in any colour |
| Preloader & Hero | Word-split headline, parallax, cursor, magnetic buttons |
| Ingredient Orbit | Herb wheel rendering and auto-cycle |
| Products & Cart | Filtering, sizes, wishlist, cart drawer, localStorage |
| Quiz | Step flow and recommendation logic |
| Search | Matching, scoring, highlighting, keyboard navigation |
| Newsletter | Validation, submission, success state |
| Scroll | Reveal observer, counters, timeline progress |

---

## Design System

### Colour Palette

| Name | Hex | Used for |
|---|---|---|
| Forest | `#1E3A2B` | Primary text, buttons, dark sections |
| Cream | `#F6F0E4` | Page background |
| Gold | `#C8923A` | Accents, highlights, oil |
| Moss | `#5E7A4C` | Herb and success accents |
| Terracotta | `#B5562F` | Newsletter, badges |

### Typography
- **Headings:** *Cormorant Garamond*, an elegant serif with italic gold accents
- **Body & UI:** *Manrope*, a clean, modern sans-serif

### Motion
A single easing curve, `cubic-bezier(.22, .8, .24, 1)`, is used everywhere so the motion feels consistent.

---

## Customisation

### Change the colours
Edit the variables at the top of `style.css`:
```css
:root{
  --forest:#1E3A2B;
  --cream:#F6F0E4;
  --gold:#C8923A;
  --terra:#B5562F;
}
```

### Edit products, herbs, reviews or FAQs
All content lives in arrays at the top of `script.js`. When you change them, the shop, search, quiz and cart all update automatically.

```js
{
  id: 'rosemary',
  name: 'Rosemary & Onion Growth',
  concern: 'growth',
  oil: '#C9A24A',                // bottle oil colour
  kw: 'growth thick long ...',   // extra search keywords
  sizes: [{ s:'100ml', p:699, m:849 }, { s:'200ml', p:1199, m:1499 }]
}
```

### Connect the newsletter to a real service
By default, subscribers are saved only in the visitor's browser. To collect real emails, paste a form endpoint (for example from [Formspree](https://formspree.io)) into `script.js`:
```js
const NEWSLETTER_ENDPOINT = 'https://formspree.io/f/your-form-id';
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl` + `K` or `/` | Open search |
| `↑` `↓` | Navigate search results |
| `Enter` | Open the selected result |
| `Esc` | Close search, cart or menu |

---

## Performance & Accessibility

- **Zero dependencies:** three small files, about 85 KB in total
- **No image files:** all graphics are inline SVG
- Animations use `transform` and `opacity` to keep them smooth
- Respects **`prefers-reduced-motion`** for users sensitive to motion
- `aria-label`s on icon buttons, `role="status"` for live messages and full keyboard support for search
- The custom cursor is turned off on touch devices

---

## Deployment

The site is live on **Netlify**: **[hair-growth-oil.netlify.app](https://hair-growth-oil.netlify.app)**

To deploy your own copy:

| Platform | How |
|---|---|
| **Netlify** | Drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages** | Push to a repo, then go to *Settings → Pages* and choose the `main` branch |
| **Vercel** | Import the repo and deploy (no configuration needed) |

---

## Roadmap

- [ ] Individual product detail pages
- [ ] Real checkout with a payment gateway (e.g. Razorpay or Stripe)
- [ ] Product reviews submitted by customers
- [ ] Dark mode
- [ ] Hindi / regional language support
- [ ] Backend for orders and subscribers

---

## Notes

- This is a **concept design**. The brand, products, prices, reviews and statistics (e.g. *"94% felt less hair fall"*) are placeholder content.
- **Checkout is a demo**: it shows a message and doesn't process payments.
- Google Fonts need an internet connection. Offline, the site falls back to system fonts.

---

*Made with 🌿 and plain HTML, CSS and JavaScript*