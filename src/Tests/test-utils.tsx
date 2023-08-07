import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';

export * from '@testing-library/react';

interface IAllProviders {
  children: React.ReactNode;
  route?: string;
}

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <Router>
    <RecoilRoot>{children}</RecoilRoot>
  </Router>
);

const hookRender = (hook: any, wrapperProps = {}) => {
  return renderHook(hook, {
    wrapper: (props: IAllProviders) => (
      <AllProviders {...props} {...wrapperProps} />
    ),
  });
};

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render, hookRender };
