import { render, cleanup } from '@testing-library/react';

import { About } from '../About';

afterEach(cleanup);

const renderAbout = () => {
  const { container } = render(<About />);

  return {
    container
  };
};

describe('Testing About Component', () => {
  test('should take snapshot', async () => {
    const { container } = renderAbout();

    expect(container).toMatchSnapshot();
  });
});
