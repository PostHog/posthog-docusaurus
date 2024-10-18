import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({location, previousLocation}) {
      if (location.pathname != previousLocation?.pathname) {
        window.posthog.capture('$pageview');
      }
    },
  };
})();