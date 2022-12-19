import { atom } from 'recoil';
import { ITodo } from 'src/types/interfaces';

export const todoAtom = atom<ITodo>({
  default: {
    name: '박준희',
    address: '포스빌1113호',
  },
  key: 'Address',
});
