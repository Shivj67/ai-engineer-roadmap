AI ENGINEER ROADMAP OS — INSTALLATION

This is an offline-first Progressive Web App. It does not use ChatGPT, an API key, or a subscription.

To use it on Android:
1. Upload the contents of this folder to a static HTTPS host (GitHub Pages, Cloudflare Pages, or Netlify).
2. Open the HTTPS site in Chrome on your phone.
3. Use Chrome menu > Add to Home screen / Install app.
4. Open it from the home screen. Load it once online so the service worker caches the app.
5. Export a JSON backup weekly and before clearing Chrome data or changing phones.

Data is stored in this browser on this device. It survives browser/app restarts, but browser storage can be cleared or evicted. The JSON backup is the portable recovery copy. Import it on the new device.

Reminder limitation: this build checks the daily reminder while the app is open. Android does not guarantee background notifications for a purely offline website. Reliable scheduled background push requires a push service/backend or a native Android app.

Timer uses an end timestamp and resumes correctly after app/browser restart. Study sessions are logged on timer completion. The tracker includes all 24 weeks, granular skill checklists, weekly deliverables, original LAPTOP/PHONE/DETOUR resource labels, continuous DSA from Week 5–24, learning journal, progress metrics, readiness gates, and JSON backup/restore.
