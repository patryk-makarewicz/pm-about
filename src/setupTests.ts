import 'jest-styled-components';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));
