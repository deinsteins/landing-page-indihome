import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from '@/components/layout/Wrapper';

describe('Wrapper component', () => {
  it('renders without errors', () => {
    render(<Wrapper />);
  });

  it('renders children', () => {
    const { getByText } = render(
      <Wrapper>
        <div>Child Content</div>
      </Wrapper>
    );
    expect(getByText('Child Content')).toBeInTheDocument();
  });

  it('renders footer when footer prop is true', () => {
    const { getByTestId } = render(<Wrapper footer={true} />);
    expect(getByTestId('footer-component')).toBeInTheDocument();
  });
});
