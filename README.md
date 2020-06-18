# PostHog plugin for Docusaurus v2

To install:

```bash
yarn add posthog-docusaurus
```

Then

```javascript
// docusaurus.config.js
module.exports = {
  plugins: ["posthog-docusaurus"],
  themeConfig: {
    posthog: {
      apiKey: "YOURAPIKEY",
      appUrl: "https://app.posthog.com",  // optional
      enableInDevelopment: false  // optional
    }
  }
};
```
