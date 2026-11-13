# Docusaurus compatibility sample

Tests the local `posthog-docusaurus` source against Docusaurus **3.10.2** and React **19.3.1**, pinned in `package-lock.json`.

## Requirements

- Node.js 20+ (verified with Node.js 26.9.0).
- Brave Browser, installed at its standard macOS path, or set `BRAVE_EXECUTABLE`.
- Internet access to download the real PostHog CDN SDK (version **1.448.0** during verification).

## Run the compatibility checks

```sh
cd examples
npm ci
npm test
```

The test builds the site, launches a separate headless Brave process with a temporary profile, and runs eight checks:

- Production static rendering, hydration, SDK initialization, and configuration forwarding.
- Exactly one initial pageview.
- Custom events and button autocapture delivered to ingestion.
- Client-side navigation without a document reload, with exactly one pageview containing the destination URL.
- Analytics disabled by default in development.
- Analytics enabled explicitly in development.
- Default pageleave capture on unload.
- The landing pageview after opt-in, without navigation.

SDK assets are downloaded from PostHog. Configuration, feature flag responses, and ingestion are mocked locally. All non-local browser requests are blocked. No real project key is used and no events are sent to PostHog. Session replay and surveys are disabled in this test and are **not verified**.

## Pageview capture

The SDK captures the initial pageview. The plugin's `onRouteUpdate` hook skips the initial load and captures subsequent pathname-changing client-side navigation. Keeping SDK defaults preserves pageleave capture and the landing pageview after consent is granted.

All eight checks pass with the default configuration (nine passing tests including the parent suite). Explicit SDK options remain supported.

The test downloads the live SDK on each run, so future SDK releases may change results.

## Run the site manually

```sh
npm start
```

Development analytics are disabled by default. To try a production build with your own project, replace the dummy API key in `docusaurus.config.js`, then run:

```sh
npm run build
npm run serve
```
