# Component Mapping Table

This table provides a detailed mapping of all components in the current portfolio, their migration status, new implementation approach (TailwindCSS/shadcn/ui), and notes for dashboard integration or refactoring.

| Old Component/File              | Type/Role        | Migration Status | New Approach (Tailwind/shadcn/ui) | Dashboard Shared? | Notes                                                           |
| ------------------------------- | ---------------- | ---------------- | --------------------------------- | ----------------- | --------------------------------------------------------------- |
| Footer.tsx + Footer.module.scss | Layout/UI        | ☐                | Tailwind (custom)                 | Yes               | Remove SCSS, use Tailwind for layout, spacing, and colors       |
| Header.tsx + Header.module.scss | Layout/UI        | ☐                | Tailwind (custom)                 | Yes               | Rebuild with Tailwind flex/grid, accessibility improvements     |
| ProjectCard.tsx + .module.scss  | Content/UI       | ☐                | Tailwind + shadcn/ui Card         | Yes               | Use shadcn/ui Card, Tailwind for custom states                  |
| MDXComponents.tsx               | Content Renderer | ☐                | Tailwind (typography, code)       | Yes               | Ensure all MDX elements use Tailwind classes                    |
| Mailchimp.tsx                   | Integration/Form | ☐                | Tailwind + shadcn/ui Form         | Maybe             | Refactor form, feedback, and validation UI                      |
| RouteGuard.tsx                  | Navigation/Auth  | ☐                | Logic only, minimal styling       | Maybe             | Ensure logic is style-agnostic                                  |
| ScrollToHash.tsx                | Navigation/UX    | ☐                | Logic only, minimal styling       | Maybe             | Ensure smooth scroll works with new layout                      |
| ProjectCarousel.tsx             | Content/Showcase | ☐                | Tailwind (custom)                 | Maybe             | Refactor for Tailwind, consider shadcn/ui Carousel if available |
| ProjectGallery.tsx              | Content/Showcase | ☐                | Tailwind (custom)                 | Maybe             | Refactor for Tailwind, accessibility check                      |
| ComponentShowcase.tsx           | Demo/Showcase    | ☐                | Tailwind (custom)                 | Maybe             | Use for dashboard/portfolio shared demos                        |
| HeadingLink.tsx + .module.scss  | Content/UX       | ☐                | Tailwind (custom)                 | Yes               | Use Tailwind for anchor styling                                 |
| ClientImage.tsx                 | Media/Utility    | ☐                | Tailwind (custom)                 | Yes               | Ensure responsive images, alt text                              |
| MDXContent.tsx                  | Content Renderer | ☐                | Tailwind (typography, code)       | Yes               | Consistent with MDXComponents                                   |
| not-found.tsx                   | Error/UX         | ☐                | Tailwind (custom)                 | Yes               | Use Tailwind for error page styling                             |
| FeaturedProjects.tsx            | Content/Showcase | ☐                | Tailwind (custom)                 | Yes               | Refactor for Tailwind, dashboard integration                    |
| ImageFromMap.tsx                | Media/Utility    | ☐                | Tailwind (custom)                 | Yes               | Refactor for Tailwind, ensure responsive images                 |
| about/                          | Page/Content     | ☐                | Tailwind (custom)                 | Maybe             | Refactor About page and sections for Tailwind                   |
| blocks/                         | UI Blocks        | ☐                | Tailwind/shadcn/ui                | Maybe             | Audit and refactor reusable blocks for Tailwind                 |
| blog/                           | Page/Content     | ☐                | Tailwind (custom)                 | Maybe             | Refactor Blog index and post layouts                            |
| gallery/                        | Page/Content     | ☐                | Tailwind (custom)                 | Maybe             | Refactor Gallery page and components                            |
| media/                          | Media/Utility    | ☐                | Tailwind (custom)                 | Maybe             | Refactor media utilities and components                         |
| ui/                             | UI Primitives    | ☐                | shadcn/ui + Tailwind              | Yes               | Centralize primitives for dashboard/portfolio                   |
| work/                           | Page/Content     | ☐                | Tailwind (custom)                 | Maybe             | Refactor Work/Projects index and detail pages                   |
| ...                             | ...              | ...              | ...                               | ...               | ...                                                             |

**Legend:**

- Migration Status: ☐ = Not started, ☐ = In progress, ☑ = Complete
- Dashboard Shared?: Yes = Should be shared with dashboard, Maybe = Consider sharing, No = Portfolio only

---

**Instructions:**

- Update this table as you migrate each component.
- Add new rows for any additional components discovered during migration.
- Use the Notes column for any special refactoring, accessibility, or integration considerations.
