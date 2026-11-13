const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const posthogPlugin = require("../src");

function initializationOptions(options = {}) {
  const plugin = posthogPlugin({}, {
    apiKey: "phc_test",
    enableInDevelopment: true,
    ...options,
  });
  const script = plugin.injectHtmlTags().headTags.find(
    (tag) => tag.tagName === "script"
  );
  const context = {
    document: {
      createElement: () => ({}),
      getElementsByTagName: () => [{
        parentNode: { insertBefore() {} },
      }],
    },
  };
  context.window = context;
  vm.runInNewContext(script.innerHTML, context);
  return context.posthog._i[0][1];
}

test("disables SDK pageviews by default so the route hook owns pageviews", () => {
  assert.equal(initializationOptions().capture_pageview, false);
});

test("preserves an explicit capture_pageview option", () => {
  assert.equal(initializationOptions({ capture_pageview: true }).capture_pageview, true);
});
