exports.config = {
  namespace: 'stencilcomponents',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['stc-tabs', 'stc-tab-header', 'stc-tab-content'] },
    { components: ['stc-chip'] },
    { components: ['stc-tags'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
