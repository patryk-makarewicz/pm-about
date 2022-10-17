import { render, cleanup, waitFor } from '@testing-library/react';
import { queryClient } from 'api';
import { QueryClientProvider } from 'react-query';

import { Projects } from '../Projects';

afterEach(cleanup);

const renderProjects = () => {
  const onClick = jest.fn();
  const { baseElement, container, getByText } = render(
    <QueryClientProvider client={queryClient}>
      <Projects />
    </QueryClientProvider>
  );

  return {
    baseElement,
    onClick,
    container,
    getByText
  };
};

describe('Testing Projects Component', () => {
  test('should take snapshot', async () => {
    const { baseElement } = renderProjects();

    await waitFor(() => expect(baseElement).toMatchSnapshot());
  });
});
