import { render } from '@stencil/core/testing';
import { StcTabs } from './tabs';
import { StcTabHeader } from './tab-header';
import { StcTabContent } from './tab-content';

describe('Tabs', () => {
  it('should build', () => {
    expect(new StcTabs()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [StcTabs, StcTabHeader, StcTabContent],
        html: `
        <stc-tabs>
          <stc-tab-header slot="header" name="tab1"></stc-tab-header>
          <stc-tab-content slot="content" name="tab1"></stc-tab-content>
        </stc-tabs>
        `
      });
    });

  });
});
