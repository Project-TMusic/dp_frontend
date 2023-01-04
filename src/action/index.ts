export const AddToCart = 'ADD_TO_CART';
export const RemoveFromCart = 'REMOVE_FROM_CART';

export const addtocart = (product: string) => {
  return {
    type: AddToCart,
    payload: {
      id: new Date().getTime().toString(),
      product: product,
    },
  };
};

export const removefromcart = (id: any) => {
  return {
    type: RemoveFromCart,
    id,
  };
};
