export const addToCart = (product: object) => {
  return (
    dispatch: (arg0: { type: string; payload: { quantity: number } }) => void
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: 1 },
    });
  };
};

export const deleteProductCart = (name: string) => {
  return (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
      type: "DELETE_PRODUCT_CART",
      payload: name,
    });
  };
};
