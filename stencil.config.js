exports.config = {
  namespace: 'stencilcomponents',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['stc-tabs', 'stc-tab-header', 'stc-tab-content'] },
    { components: ['stc-chip', 'stc-tags'] },
  ],
  // global: 'src/global/router.ts'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
