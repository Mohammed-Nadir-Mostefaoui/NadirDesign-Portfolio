# Jobs portfolio: launch steps

This folder is the job-application version of your site.
It is ready. Three things need your own logins, so they are yours to do.
Total time: about 15 minutes, plus waiting for the address to go live.

Address it is built for: **portfolio.nadirdesign.com**

---

## Before you start: one check

Open `index.html` from this folder in Chrome and click around.
If you want anything changed, tell Claude first. It is easier before launch.

---

## Step 1. Create the repository (GitHub Desktop)

1. Open **GitHub Desktop**.
2. Menu **File → Add Local Repository…**
3. Click **Choose…** and pick this folder, `JobsPortfolio`.
4. It will say the folder is not a Git repository. Click the blue link **create a repository**.
5. In the window that opens:
   - **Name:** `NadirDesign-Portfolio`
   - **Initialize this repository with a README:** leave it **unticked**
   - **Git ignore:** leave it on **None** (the folder already has one)
   - **License:** None
6. Click **Create Repository**.

### Check before you publish (30 seconds, important)

Click the **History** tab and click the first commit.
Look down the file list.

- You should see `index.html`, `CNAME`, `css`, `js`, `case-studies`, `assets`.
- You must **not** see anything starting with `_internal`.

If `_internal` is there, stop and tell Claude. Do not publish.

## Step 2. Publish it

1. Click **Publish repository** (top bar).
2. **Untick** "Keep this code private". GitHub Pages needs a public repository on the free plan.
3. Click **Publish Repository**.

## Step 3. Turn on GitHub Pages (github.com)

1. Open the new repository on github.com.
2. Click **Settings** (top row), then **Pages** (left column).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder `/ (root)`
   - Click **Save**.
4. Under **Custom domain** it should already show `portfolio.nadirdesign.com`.
   If the box is empty, type it and click **Save**.

## Step 4. Add the address (Cloudflare)

1. Open Cloudflare, choose **nadirdesign.com**, then **DNS → Records**.
2. Click **Add record**:
   - **Type:** CNAME
   - **Name:** `portfolio`
   - **Target:** `mohammed-nadir-mostefaoui.github.io`
   - **Proxy status:** click the orange cloud so it turns **grey (DNS only)**
3. Click **Save**.

This is the same setup your `www` record already uses.
The grey cloud matters: with the orange one GitHub cannot issue the security certificate.

## Step 5. Wait, then lock it

1. Wait 5 to 30 minutes.
2. Go back to **Settings → Pages** on github.com.
3. When the box **Enforce HTTPS** can be ticked, tick it.
4. Open https://portfolio.nadirdesign.com and check all four pages.

---

## After it is live

These are small, and Claude can do each one with you.

- **Your CV still links to nadirdesign.com.** The copy inside this site already links to the new address. Your Master CV and the tailored ones do not yet. One line changes in the CV generator.
- **The job-search hub page in Notion** lists the portfolio as nadirdesign.com. Update that line.
- **Applications already sent** keep the old link. That is fine. Nothing breaks.
- **nadirdesign.com does not change at all.**

---

## How to change something later

Same routine as your main site:
ask Claude for the edit, review it in GitHub Desktop, **Commit to main**, **Push origin**.

Never run git commands in a terminal inside this folder.
