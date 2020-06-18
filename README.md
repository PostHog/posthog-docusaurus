# PostHog plugin for Docusaurus v2

Please see the main [PostHog docs](https://posthog.com/docs).

Specifically, the [Docusaurus v2 integration](https://posthog.com/docs/integrations/docusaurus-integration) details.

## Installing the plugin

```bash
yarn add posthog-docusaurus
```

or

```bash
npm install posthog-docusaurus --save
```

## Configuring the plugin

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

## Using the plugin

That's it! You're ready to go!
