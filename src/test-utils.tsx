import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';

type AllProvidersProps = {
  children?: ReactNode;
};

export function AllProviders({ children }: AllProvidersProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: AllProviders,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
