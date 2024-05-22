# PostHog plugin for Docusaurus

Easily track and improve your Docusaurus site with PostHog. See [our docs on this plugin](https://posthog.com/docs/libraries/docusaurus) for more information.

## Installing the plugin

```bash
npm install posthog-docusaurus --save
```

or

```bash
yarn add posthog-docusaurus
```

## Configuring the plugin

```javascript
// docusaurus.config.js
module.exports = {
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "<ph_project_api_key>",
        appUrl: "<ph_client_api_host>", // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false, // optional
      },
    ],
  ],
};
```

> **Note:**You can pass additional PostHog [config options](/docs/libraries/js#config) to the plugin, but they are passed through `JSON.stringify()`, so functions (such as `sanitize_properties`) are not supported.

## Using the plugin

Once running, this autocaptures pageviews, events, and session replay (if enabled) and enables usage of other PostHog features like surveys.
