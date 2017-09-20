// exports.config = {
//   bundles: [
//     { components: ['my-name'] }
//   ],
//   collections: [
//     { name: '@stencil/router' }
//   ]
// };

// exports.devServer = {
//   root: 'www',
//   watchGlob: '**/**'
// }

exports.config = {
  namespace: 'stencilbulma',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['my-name'] }
    // { components: ['test-app', 'test-demo-three', 'test-demo-four'] },
    // { components: ['stencil-router', 'stencil-route', 'stencil-route-link', 'stencil-router-redirect', 'stencil-async-content'] }
  ],
  // global: 'src/global/router.ts'
};