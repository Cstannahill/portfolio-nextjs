# Feature Parity Checklist

| Feature                              | Status | Notes                                                                      |
| ------------------------------------ | ------ | -------------------------------------------------------------------------- |
| Multilingual support (EN/ID)         | ☐      | Ensure i18n logic and middleware are compatible with new layout/components |
| Dynamic routing for projects         | ☐      | Validate dynamic routes after refactor, especially [slug] pages            |
| MDX content rendering                | ☐      | Confirm all MDX renderers use Tailwind for typography/code                 |
| Once UI design system                | ☐      | Replace with shadcn/ui and Tailwind; document any custom primitives        |
| Route guards                         | ☐      | Ensure logic is style-agnostic and works with new layouts                  |
| Hash scrolling                       | ☐      | Test smooth scroll after layout/component changes                          |
| Mailchimp integration                | ☐      | Refactor form/feedback UI to Tailwind/shadcn/ui                            |
| SEO (sitemap, robots.txt, OG images) | ☐      | Validate after migration, update meta/OG tags if needed                    |
| Responsive design                    | ☐      | Use Tailwind breakpoints, test all major layouts/components                |
| Accessibility                        | ☐      | Use shadcn/ui and Tailwind best practices, test with a11y tools            |

_Mark features as complete (☑) or incomplete (☐). Add notes for any deviations or improvements. Update notes as migration plan evolves._
