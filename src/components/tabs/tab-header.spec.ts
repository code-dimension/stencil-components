import { render } from '@stencil/core/testing';
import { StcTabHeader } from './tab-header';

describe('Tab Content', () => {
  it('should build', () => {
    expect(new StcTabHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [StcTabHeader],
        html: '<stc-tab-header></stc-tab-header>'
      });
    });

    it('should be not selected on load', () => {
      const stcTabContent = new StcTabHeader();
      expect(stcTabContent.isSelected).toBeFalsy();
    });

    it('should select the tab header', () => {
      const stcTabContent = new StcTabHeader();
      stcTabContent.select();
      expect(stcTabContent.isSelected).toBeTruthy();
    });

    it('should unselect the tab header', () => {
      const stcTabContent = new StcTabHeader();
      stcTabContent.select();
      expect(stcTabContent.isSelected).toBeTruthy();
      stcTabContent.unselect();
      expect(stcTabContent.isSelected).toBeFalsy();
    });

  });
});
