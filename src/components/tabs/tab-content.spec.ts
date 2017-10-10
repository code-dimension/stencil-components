import { render } from '@stencil/core/testing';
import { StcTabContent } from './tab-content';

describe('Tab Content', () => {
  it('should build', () => {
    expect(new StcTabContent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [StcTabContent],
        html: '<stc-tab-content></stc-tab-content>'
      });
    });

    it('should be not selected on load', () => {
      const stcTabContent = new StcTabContent();
      expect(stcTabContent.isSelected).toBeFalsy();
    });

    it('should select the tab content', () => {
      const stcTabContent = new StcTabContent();
      stcTabContent.select();
      expect(stcTabContent.isSelected).toBeTruthy();
    });

    it('should unselect the tab content', () => {
      const stcTabContent = new StcTabContent();
      stcTabContent.select();
      expect(stcTabContent.isSelected).toBeTruthy();
      stcTabContent.unselect();
      expect(stcTabContent.isSelected).toBeFalsy();
    });

  });
});
