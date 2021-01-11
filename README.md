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
      enableInDevelopment: false,  // optional
      // other options are passed to posthog-js init as is
    }
  }
};
```

## Using the plugin

That's it! You're ready to go!

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ)
