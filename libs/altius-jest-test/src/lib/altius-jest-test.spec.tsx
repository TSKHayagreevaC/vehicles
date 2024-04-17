import { render } from '@testing-library/react';

import AltiusJestTest from './altius-jest-test';

describe('AltiusJestTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AltiusJestTest />);
    expect(baseElement).toBeTruthy();
  });
});
