exports.config = {
  namespace: 'stencilcomponents',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['stc-tabs', 'stc-tab-header', 'stc-tab-content'] },
  ],
  // global: 'src/global/router.ts'
};