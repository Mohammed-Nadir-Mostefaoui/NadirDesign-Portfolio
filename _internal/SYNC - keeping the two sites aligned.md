# Keeping the jobs site and nadirdesign.com aligned

The jobs site is a copy of nadirdesign.com with a different landing page.
It was copied on **6 October 2026**.
This page says what is shared, what is not, and what to do when something changes.

---

## The rule in one line

Case-study text is the same on both sites, **except nine lines** that are reworded here for a hiring reader.
Everything a hiring manager reads differently lives in **two files only**.

### The nine reworded lines

They sit at the end of `js/i18n.jobs.js`, under "Case-study lines reworded".
If you edit one of these lines on the main site, edit it there too.

- Task Master and B2B: the label "Client" reads "Company".
- Task Master, B2B and Iksir: the NDA note says "ongoing product work", not "client work".
- Iksir, My role: "stakeholder relationship", not "client relationship" (two lines).
- Iksir: "the second designer", not "my design partner" (three lines).
- Iksir: the line pointing to nawat.studio is removed from the page.

Kept on purpose: Iksir's "Client: Datamaster Analytics · via Nawat Studio". It is a fact and matches the CV.

---

## The two files that make this site different

| File | What it holds |
|---|---|
| `js/i18n.jobs.js` | Every sentence that differs from the main site, in English, Arabic and French |
| `css/jobs.css` | Every style that does not exist on the main site |

## Files that are plain copies of the main site

You can copy these over from `Personal Brand` at any time, with no merging:

- `css/style.css`, `css/case-study.css`, `css/reset.css`, `css/tokens.css`
- `js/theme.js`, `js/experience.js`, `js/work.js`, `js/skills.js`, `js/footer.js`, `js/cv.js`, `js/case-study.js`
- everything in `assets/images/` and `assets/icons/`

## One file that is a copy with two small edits

`js/i18n.js` is the main site's file with:

1. `DEFAULT_LANG` set to `'en'` (the main site uses `'ar'`).
2. One block added right after the big `LOCALES` list, marked `JOBS SITE override hook`.

To refresh it: copy the main site's `js/i18n.js` over, then put those two edits back.
Both are marked with a comment that starts with `JOBS SITE`.

## Files that are NOT copies

Never copy these over from the main site:

- `index.html` (different sections)
- the three files in `case-studies/` (different menu, closing block and footer)
- `assets/Nadir Mostefaoui - Product Designer - CV.pdf` (links to this site)
- `CNAME`, `.gitignore`

---

## What to do when…

**…a case study's text changes on the main site.**
Copy `js/i18n.js` across and re-apply the two edits. Done.
If the change was made in a case-study `.html` file, make the same edit in the same file here.

**…a case-study image changes.**
Copy the image file across.

**…your Master CV changes.**
The Experience section here mirrors the CV. Update `experience` in `js/i18n.jobs.js`.
Then rebuild the CV copy: see `_internal/cv/cvgen.py` (its first lines explain how).

**…you change the address.**
`portfolio.nadirdesign.com` appears in: `CNAME`, the `<head>` of all four `.html` files, the contact form's hidden `source` field, and `_internal/cv/cvgen.py`.
Ask Claude to change all of them together.

**…you get a job and want to pause this site.**
Change the availability line and the footer badge in `js/i18n.jobs.js` (`hero.bio`, `footer.badge`, `glance.v1`), or unpublish the repository.

---

## Guardrails written into this site

- Title is "Product Designer" everywhere.
- "2+ years", never more.
- No claim of a team. "A second designer" on Iksir only.
- Accessibility: "designed to WCAG 2.1 AA". No testing claims.
- Nawat starts January 2026. Earlier work is Datamaster or Five Angles.
- No testimonials, no prices, no services.
- The site is hidden from Google (`noindex`) so it never competes with nadirdesign.com.
