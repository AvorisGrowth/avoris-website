AVORIS STATIC WEBSITE - UPLOAD GUIDE

This is a plain HTML website. It does not require Node.js, npm, a database, or
a server-side application runtime.

UPLOAD

1. Extract the delivery ZIP.
2. Upload every extracted file and the complete assets folder to the hosting
   web root. Common names are public_html, www, htdocs, or the web root chosen
   by your host.
3. Keep all filenames and folders unchanged.
4. Connect avorisgrowth.com, enable a valid HTTPS certificate, and confirm that
   HTTP redirects to HTTPS.
5. Open the home page, privacy page, and thank-you page on the public domain.

FILES TO UPLOAD

- index.html
- thank-you.html
- privacy.html
- robots.txt
- sitemap.xml
- _headers
- .htaccess
- assets (complete folder)

FORM CONNECTION

The Growth Check form uses FormSubmit and sends enquiries to
avorisgrowthsystems@gmail.com. The regular form endpoint, FormSubmit anti-bot
challenge, a honeypot field, length limits, and a dedicated thank-you page are
configured.

The first real submission normally triggers a one-time FormSubmit activation
email. Approve that message before promoting the website. Do not test with
sensitive information.

The destination email is visible in index.html because that is how the basic
FormSubmit endpoint works. After activation, request an invisible FormSubmit
email token and replace the email-based action URL if you want to hide the
address from page source.

SECURITY HEADERS

- _headers is intended for hosts such as Netlify and Cloudflare Pages.
- .htaccess is intended for Apache-compatible hosting.
- If the host uses another control panel or server, copy the same header values
  into its security-header settings.
- The policy restricts scripts, styles, images, framing, browser permissions,
  and form destinations. It does not replace HTTPS or secure hosting.
- Enable HTTP Strict Transport Security only after HTTPS and redirects work on
  the live domain. Enabling it too early can make a misconfigured site harder
  to reach.

SHORT MOTION ASSETS

The Local Visibility and Content System cards use two silent 3-second clips
generated with Higgsfield from the supplied references and restyled for the
Avoris brand. Together with their WebP posters, they add about 224 KB.

The MP4 sources load only when they approach the viewport, play once when at
least 55 percent visible, and pause and reset when they leave. Visitors who
prefer reduced motion see the static posters instead. If replacing a clip,
keep the current filename and use silent H.264 MP4 at 960 x 536 plus a matching
WebP poster to preserve the layout and loading behavior.

SCROLL-LINKED ARTWORK

The hero, engagement process, and connected-system comparison use three
Higgsfield Nano Banana Pro artworks created for the Avoris navy, ivory, and
copper system. The optimized WebP files add about 78 KB in total.

The hero artwork loads with the first viewport and moves subtly with page
scroll. The two supporting artworks lazy-load, and the process visual stays in
view while its three engagement options pass beside it. Browsers without CSS
scroll-animation support receive the same polished static composition. Reduced
motion preferences disable the artwork transforms.

SEO AND SOCIAL PREVIEW

The canonical domain, structured data, sitemap, and social image use:
https://avorisgrowth.com/

If the website is installed on another domain or in a subfolder, update those
absolute URLs in index.html, privacy.html, robots.txt, sitemap.xml, and the
form's _next and _url fields.

BEFORE ANNOUNCING THE WEBSITE

- Confirm the logo, photographs, and social preview image load over HTTPS.
- Confirm the security headers are present using the host's header checker or
  browser developer tools.
- Make one real, non-sensitive form submission, approve FormSubmit activation,
  and confirm the enquiry arrives at the correct inbox.
- Confirm the FormSubmit challenge and thank-you redirect work.
- Confirm the mobile menu, FAQ controls, form fields, and privacy link work.
- Arrange qualified legal review of the website data notice if the business,
  customers, or data practices require a fuller privacy policy.
- Do not upload .git, .agents, marketing-assets, or previous ZIP files.

EDITING

- Page content and metadata: index.html
- Colors, layout, and responsive styles: assets/styles.css
- Menu, FAQ, reveal, and scroll-video behavior: assets/site.js
- Official logos: assets/brand
- Photography, short-form motion, posters, and social preview: assets/media
