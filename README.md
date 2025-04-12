# 💼 Personal Developer Portfolio

![Preview](./public/og-image.jpg) <!-- Update with your actual OG image or preview path -->

This is my personal developer portfolio — a fully responsive, modern site built using `Next.js`, `TypeScript`, `MDX`, and a custom design system known as `Once UI`.

> ✅ Originally based on [Magic Portfolio by Once UI](https://github.com/once-ui-system/magic-portfolio), this project has been **heavily modified, curated, and extended** to fit my needs as a software developer and to showcase my actual work and code contributions.

---

## 📌 What This Is

- ✅ **Multilingual** (EN / ID) portfolio using `Next.js App Router`
- ✅ Blog and project content rendered from local `.mdx` files
- ✅ Reusable UI components built using the `Once UI` design system
- ✅ OG image generation, dynamic routing, sitemap, and SEO
- ✅ API integration for email collection and route authentication
- ✅ Clean, professional theme with custom routing, feature breakdowns, and structured project write-ups

---

## 🚧 What I Added or Built Myself

While this project began as a professional-grade template, I treated it as a real development project — modifying and extending it to match my vision and deepen my understanding of advanced frontend architecture.

### 🧠 Major Contributions

- **Custom Project Routing**
  - Implemented `[locale]/work/[slug]/page.tsx` for dynamically loading project pages
  - Designed project cards and extended the content schema to include feature lists, tech stack, ER diagrams, and API documentation per project

- **Content Architecture**
  - Replaced all template content with my **own authored `.mdx`** blog posts and case studies (e.g., Carte, HSK Management, Kanban Task Manager)
  - Refined About and Work pages for narrative and clarity
  - Localized MDX content across EN/ID using `content-i18n.js` and `getDictionary()` logic

- **Routing & Navigation**
  - Added route guards with `RouteGuard.tsx`
  - Implemented hash scrolling for smooth in-page navigation using `ScrollToHash.tsx`
  - Fine-tuned locale middleware behavior

- **Design & UX Enhancements**
  - Removed unused UI components and styles from the template (e.g., DatePickers, PasswordInputs, HoloFx, etc.)
  - Cleaned up unused token/theme entries
  - Enhanced UI clarity and consistency via subtle spacing and typography improvements

---

## 🧠 Why This Project Mattered

When I started working on this, I was still relatively new to TypeScript, SCSS-based design systems, and the App Router in Next.js. By extending and modifying this project:

- I learned to **understand and navigate a large-scale component system**
- I practiced **reading unfamiliar codebases and safely refactoring**
- I developed real comfort with **hybrid MDX/JSX rendering**
- I grew as a developer by **building features that didn’t exist and weren’t documented**

This wasn’t just "customizing a template" — it was an immersive frontend deep dive that sharpened my engineering judgment, tooling literacy, and architectural discipline.

---

## 📁 Tech Stack

| Tool | Purpose |
|------|---------|
| `Next.js` | Core React framework |
| `TypeScript` | Strong typing, safer code |
| `App Router` | File-system based routing and layouts |
| `MDX` | Blog and project content rendering |
| `SCSS Modules` | Component-level styling |
| `Once UI` | Design system with reusable UI primitives |
| `Middleware` | Localization and redirect handling |
| `Vercel` | Hosting and serverless deployment |
| `API Routes` | Mailchimp auth, toast messages |

---

## 🧪 Live Demo & Source Code

- 🔗 [Live Portfolio Site](https://cstannahill-software-dev.vercel.app/)
- 💻 [Source Code (GitHub)](https://github.com/Cstannahill/portfolio-nextjs)

---

## 📌 Acknowledgements

- This project was originally scaffolded from the amazing [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template.
- I extend my thanks to the Once UI team for their powerful foundation — it helped me explore, learn, and grow in ways I wouldn’t have otherwise.

---

## 🧑‍💻 About Me

I'm a full-stack developer focused on building usable, scalable, and purposeful applications — from feature-rich productivity tools to immersive developer experiences.

You can read more about my background and projects in the [About section](https://cstannahill-software-dev.vercel.app/about) of this portfolio.

---

## 📫 Contact

For collaborations, freelance inquiries, or opportunities, feel free to reach out:
- Email: `your@email.com`
- GitHub: [@Cstannahill](https://github.com/Cstannahill)
- LinkedIn: `linkedin.com/in/yourprofile`

---

