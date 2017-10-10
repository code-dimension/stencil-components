import { flush, render } from '@stencil/core/testing';
import { StcTags } from './tags';


describe('Tags', () => {
  it('should build', () => {
    expect(new StcTags()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [StcTags],
        html: '<stc-tags></stc-tags>'
      });
    });

    it('should always has an input element', () => {
      expect(element.querySelector('input')).toBeTruthy();
    });

    it('should change the input placeholder', async () => {
      const placeholder = 'Adding a custom placeholder';
      element.placeholder = placeholder;

      await flush(element);

      expect(element.querySelector('input').placeholder).toEqual(placeholder);
    });

    it('should add two stc-chip elements and keep the input element', async () => {
      element.tags = [
        { text: 'First chip' }, 
        { text: 'Second chip' }
      ];

      await flush(element);
      
      expect(element.querySelectorAll('stc-chip').length).toEqual(2);
      expect(element.querySelectorAll('input').length).toEqual(1);
    });

    it('should add one tag', () => {
      const stcTags = new StcTags();

      expect(stcTags.state.length).toEqual(0);
      
      stcTags.addTag('some tag');

      expect(stcTags.state.length).toEqual(1);
    });
    
  });
});
