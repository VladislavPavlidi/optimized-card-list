import React from 'react';
import { render, screen } from 'Tests/test-utils';
import Title from '..';

describe('Title', () => {
  const titleText = 'test text';
  test('should show current text', () => {
    render(
      <Title sizeName="s" color="gray">
        {titleText}
      </Title>
    );
    expect(screen.getByText(titleText)).toBeDefined();
  });
  test('should get current size name class', () => {
    const { container } = render(<Title sizeName="s" color="gray" />);
    if (container && container.firstChild) {
      expect(
        (container.firstChild as HTMLElement).classList.contains('title--s')
      ).toBe(true);
    }
  });
  test('should get current margin size name class', () => {
    const { container } = render(<Title marginSizeName="l" />);
    if (container && container.firstChild) {
      expect(
        (container.firstChild as HTMLElement).classList.contains(
          'title--margin--l'
        )
      ).toBe(true);
    }
  });
});
