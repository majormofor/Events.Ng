# JUNE EVENTS.NG

**Deploying on Render?** Follow [RENDER-DEPLOYMENT.md](RENDER-DEPLOYMENT.md). The included `render.yaml` configures the site and its routes.

A responsive black, gold and cream website for event staffing, planning, coordination, nail technician and semi-permanent tattoo enquiries. The site uses the business’s supplied photographs and flyers. Creative portfolio illustrations are explicitly labelled placeholders. There are no fabricated customer reviews, prices, qualifications or founder credentials.

## Getting started

Install Node.js 24 LTS. Open a terminal **inside this `june-events-ng` folder**, then run:

```sh
npm ci
npm run dev
```

Open the Local URL printed in the terminal. Stop development with Ctrl+C.

```sh
npm run lint     # ESLint
npm test         # booking validation and WhatsApp encoding tests
npm run build   # TypeScript, production bundle, prerendered pages, metadata and sitemap
npm run preview # inspect the production build locally
```

This is an independent project inside the Lensfleet workspace. It has its own package.json and deployment configuration. Do not run these commands from the Lensfleet parent directory. Do not deploy the parent Lensfleet project as June Events.

## Technology and structure

React, Vite, TypeScript, Tailwind CSS, React Router, Motion for React, Lucide React, React Hook Form and Zod. Exact installed versions are recorded in package-lock.json; use `npm ci` for reproducible installs.

```
public/images/       supplied assets and labelled creative illustrations
public/fonts/        self-hosted fonts and their open licences
src/data/            editable business content
src/components/      shared booking form and gallery/lightbox
src/lib/             WhatsApp messages and validation
src/App.tsx          pages, navigation and shared layout
src/styles.css       design system and responsive styles
src/render.tsx       static server rendering entry
scripts/prerender.mjs  route HTML, SEO metadata and sitemap generation
scripts/booking.test.ts  meaningful enquiry validation tests
```

Routes: `/`, `/about`, `/founder`, `/services`, `/tattoo`, `/nails`, `/gallery`, `/testimonials`, `/contact`, `/privacy`, plus the custom not-found page. Each known route has prerendered HTML so its content and metadata are available before JavaScript runs. The React app hydrates those pages for interactive navigation and forms.

## Updating content

- **Colours:** edit `--gold`, `--champagne`, `--cream`, and the Tailwind theme values in `src/styles.css`. Preview both light and dark sections after changes.
- **Contacts and social account:** edit `src/data/contact.ts`. The WhatsApp number uses international digits-only format. Forms, links and SEO organization metadata share those details.
- **Founder:** edit `founder` in `src/data/business.ts`. June’s name, brand introduction and message are already included; edit these whenever needed. The supplied owner portrait is already used; replace `public/images/founder.jpeg` or change `photo`. 
- **Services:** edit `src/data/services.ts`. Change descriptions and responsibilities without changing page logic. Review the nail technician and semi-permanent tattoo categories when changing the service menu. No service prices or packages are assumed.
- **Gallery:** copy photographs you have permission to publish into `public/images/`. Add entries to `gallery` in `src/data/gallery.ts`: `src`, `title`, `category`, and `note`. Use descriptive titles as image alt text. Add authentic nail technician and semi-permanent tattoo items through `creativePortfolio`; remove the placeholder flag and update the page’s placeholder notices when replacing illustrations with real work.
- **Testimonials:** add only approved, genuine feedback to `testimonials` in `src/data/business.ts`, using the documented `Testimonial` type. Fields are name, review, event and date; photo and rating are optional. With no entries, the website shows a feedback invitation. Obtain permission before publishing names or photographs.
- **Logo:** the header uses an editable typographic wordmark in `Logo()` in `src/App.tsx`. The supplied full logo is retained at `public/images/logo.jpeg` and used in organization metadata. Replace the wordmark with an image if desired; keep it readable at mobile sizes. The favicon is `public/favicon.svg`.
- **WhatsApp wording:** edit `serviceEnquiry`, `bookingMessage` and `whatsappUrl` in `src/lib/whatsapp.ts`. The form prepares an enquiry; the customer must review and send it in WhatsApp. No booking is automatically confirmed, and no file is attached automatically.
- **Page copy:** edit the corresponding component in `src/App.tsx`. Metadata is set by `pageInfo` there and by the page map in `scripts/prerender.mjs`; keep both descriptions consistent.

## Enquiries and privacy

The initial version has no backend, payment collection, analytics or customer database. Form input stays in memory until used to prepare the WhatsApp link. It is not written to localStorage. Once a customer sends an enquiry, WhatsApp and the business handle it separately. Confirm the business’s privacy and retention practices before public launch and update `/privacy` accordingly.

Forms validate contact details, dates and relevant fields. Tattoo enquiries do not require event details or staffing numbers. Nail care enquiries do not require staff or guest counts. If WhatsApp is blocked, the prepared message remains visible with a copy button and a retry link.

## Deploy to Vercel

1. Upload this project to its own Git repository, or select `june-events-ng` as the root directory if using the parent repository.
2. Import into Vercel. Choose Vite, build command `npm run build`, output directory `dist`.
3. Add `VITE_SITE_URL` with your final HTTPS origin, such as `https://your-confirmed-domain.example`. Do not add a trailing slash.
4. Deploy. `vercel.json` supplies React Router fallbacks. Check `/contact` and `/tattoo` by opening their URLs directly and refreshing.

## Deploy to Netlify

1. Import this project and select its folder as the base directory.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add `VITE_SITE_URL` with your actual HTTPS origin and deploy. The included `netlify.toml` and `_redirects` configure routing fallback.

## Domain and HTTPS

Add a domain you own in the host’s domain settings. Follow that host’s current DNS instructions at your domain registrar. Do not guess DNS values. Choose a primary hostname and redirect alternatives to it. Enable the host’s managed HTTPS certificate, set `VITE_SITE_URL` to the primary HTTPS origin, and rebuild to regenerate canonical URLs, sitemap and Open Graph links. No domain ownership has been assumed by this project.

The Sites-hosted version uses `.openai/hosting.json` with its own project identity; preserve that file when updating the same Site.

## Before public launch

Review creative-service availability and categories; tattoo artist practices and credentials; publication rights for supplied photos and flyer artwork; enquiry retention arrangements; and the final domain. Replace the labelled creative portfolio illustrations with real work when available. Verified testimonials are optional.

## Troubleshooting

- **Wrong website appears:** check that the terminal and hosting root point to `june-events-ng`, not Lensfleet.
- **Blank page or missing package:** run `npm ci`, then `npm run build`; read the first error. Use Node 24 LTS.
- **Nested route returns 404:** ensure the host uses the included routing configuration and publishes `dist`, not source files.
- **Images missing:** paths start with `/images/`; filenames are case-sensitive on hosting. Add the asset before rebuilding.
- **Wrong WhatsApp number:** update digits-only contact number and rebuild; test a service CTA before sharing.
- **WhatsApp fails to open:** use the retry link or copy the prepared enquiry manually. The customer still needs to send it.
- **Old page or sitemap:** rebuild and redeploy; canonical URLs are generated at build time.
- **Copy button unavailable:** use HTTPS or manually select the prepared message. Browsers may restrict clipboard access.

Run all commands above and inspect mobile and desktop layouts after content changes. Never commit private keys or customer enquiry information.

