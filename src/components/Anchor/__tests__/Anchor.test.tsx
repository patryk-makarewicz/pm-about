import { render, cleanup, getByText } from '@testing-library/react';

import { Anchor } from '../Anchor';

afterEach(cleanup);

const paths = [
  {
    href: '#about',
    title: 'About Testing'
  },
  {
    href: '#tech',
    title: 'Tech Testing'
  }
];

const renderAnchor = ({ mobile = false } = {}) => {
  const onClick = jest.fn();
  const { baseElement } = render(<Anchor paths={paths} mobile={mobile} onClick={onClick} />);

  return {
    baseElement,
    onClick,
    getByText
  };
};

describe('Testing Anchor Component', () => {
  test('should take snapshot', async () => {
    const { baseElement } = renderAnchor();

    expect(baseElement).toMatchSnapshot();
  });

  test('should render paths', async () => {});
});
