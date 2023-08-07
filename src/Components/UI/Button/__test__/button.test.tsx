import React from 'react';
import { render, screen } from 'Tests/test-utils';
import user from '@testing-library/user-event';
import Button from '..';

describe('Button', () => {
  test('should handle click', async () => {
    const testOnClick = jest.fn();
    const buttonText = 'click me';
    render(<Button onClick={testOnClick}>{buttonText}</Button>);
    await user.click(screen.getByText(buttonText));
    expect(testOnClick).toBeCalledTimes(1);
  });
});
