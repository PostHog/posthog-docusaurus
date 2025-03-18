import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({ location, previousLocation }) {
      if (location.pathname != previousLocation?.pathname) {
        if (typeof window !== 'undefined' && typeof window.posthog !== 'undefined') {
          window.posthog.capture('$pageview');
        }
      }
    },
  };
})();
