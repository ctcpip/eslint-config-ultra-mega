(async () => {
  const { default: ultraMegaConfig } = await import('../index.cjs');
  const { default: commonTest } = await import('./common.cjs');
  commonTest(ultraMegaConfig);
})();
