import { INIT_CART } from 'src/status';
import { AddToCart, RemoveFromCart } from 'src/action';

export const CartReducer = (state = INIT_CART, action: any) => {
  switch (action.type) {
    case AddToCart:
      // eslint-disable-next-line no-case-declarations
      const { id, product } = action.payload;
      // eslint-disable-next-line no-case-declarations
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            product: product,
          },
        ],
      };
    case RemoveFromCart:
      // eslint-disable-next-line no-case-declarations
      const removeItem = state.list.filter(
        (elem: any) => elem.id !== action.id
      );
      console.log(
        state.list
          .filter((elem: any) => elem.id !== action.id)
          .map((value: any) => value.id),
        '리므부'
      );
      return {
        ...state,
        list: removeItem,
      };

    default:
      return state;
  }
};
