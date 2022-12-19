import { atom } from 'recoil';

export const todoAtom = atom<string>({
  default: '',
  key: 'Address',
});
