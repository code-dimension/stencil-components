import { flush, render } from '@stencil/core/testing';
import { StcChip } from './chip';

describe('chip', () => {
  it('should build', () => {
    expect(new StcChip()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [StcChip],
        html: '<stc-chip></stc-chip>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).toEqual('');
    });

    it('should show the message in property', async () => {
      element.text = 'Just a text';
      await flush(element);

      expect(element.textContent).toEqual('Just a text');
    });

    it('should show the message and image', async () => {
      element.text = 'A text';
      element.image = 'http://localhost/image.jpg';

      await flush(element);

      expect(element.textContent).toEqual('A text');
      expect(element.getElementsByTagName('img')[0].attributes.getNamedItem('src').value).toEqual('http://localhost/image.jpg');
    });
  });
});
