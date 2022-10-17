import { render, cleanup } from '@testing-library/react';

import { About } from '../About';

afterEach(cleanup);

const renderAbout = () => {
  const { baseElement } = render(<About />);

  return {
    baseElement
  };
};

describe('Testing About Component', () => {
  test('should take snapshot', async () => {
    const { baseElement } = renderAbout();

    expect(baseElement).toMatchSnapshot();
  });
});
