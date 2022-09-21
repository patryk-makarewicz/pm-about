import { atom } from 'recoil';

export const modeState = atom({
  key: 'modeKey', // unique ID (with respect to other atoms/selectors)
  default: false // default value (aka initial value)
});
