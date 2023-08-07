import React from 'react';
import { render, screen } from 'Tests/test-utils';
import Description from '..';

describe('Description', () => {
  const descriptionText = 'test text';
  test('should show current text', () => {
    render(
      <Description sizeName="s" color="gray">
        {descriptionText}
      </Description>
    );
    expect(screen.getByText(descriptionText)).toBeDefined();
  });
  test('should show current danger text', () => {
    render(
      <Description dangerHTML={descriptionText} sizeName="s" color="gray" />
    );
    expect(screen.getByText(descriptionText)).toBeDefined();
  });
  test('should get current size name class', () => {
    const { container } = render(<Description sizeName="s" color="gray" />);
    if (container && container.firstChild) {
      expect(
        (container.firstChild as HTMLElement).classList.contains(
          'description--s'
        )
      ).toBe(true);
    }
  });
});
