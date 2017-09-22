exports.config = {
  namespace: 'stencilcomponents',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['stc-tabs', 'stc-tab'] },
  ],
  // global: 'src/global/router.ts'
};