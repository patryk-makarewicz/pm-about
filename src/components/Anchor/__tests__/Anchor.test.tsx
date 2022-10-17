import { render, cleanup, queryByText } from '@testing-library/react';

import { Anchor } from '../Anchor';

afterEach(cleanup);

const pathsData = [
  {
    href: '#about',
    title: 'About Testing'
  },
  {
    href: '#tech',
    title: 'Tech Testing'
  }
];

const renderAnchor = ({ mobile = false, paths = pathsData } = {}) => {
  const onClick = jest.fn();
  const { baseElement, container, getByText } = render(<Anchor paths={paths} mobile={mobile} onClick={onClick} />);

  return {
    baseElement,
    onClick,
    container,
    getByText
  };
};

describe('Testing Anchor Component', () => {
  test('should take snapshot with paths', () => {
    const { baseElement } = renderAnchor();

    expect(baseElement).toMatchSnapshot();
  });

  test('should render paths', () => {
    const { getByText } = renderAnchor();

    expect(getByText('About Testing')).toBeTruthy();
  });

  test('should not render paths', () => {
    const { container } = renderAnchor({ paths: [] });

    expect(queryByText(container, 'About Testing')).toBeFalsy();
  });
});
