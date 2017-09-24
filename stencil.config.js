exports.config = {
  namespace: 'stencilcomponents',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['stc-tabs', 'stc-tab-header', 'stc-tab-content'] },
  ],
  // global: 'src/global/router.ts'
};
