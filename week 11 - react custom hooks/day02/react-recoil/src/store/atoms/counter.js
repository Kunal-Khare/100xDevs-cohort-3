import { atom } from 'recoil';

// Define a Recoil atom for the counter state
export const counterState = atom({
  key: 'counterState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (initial value)
});
