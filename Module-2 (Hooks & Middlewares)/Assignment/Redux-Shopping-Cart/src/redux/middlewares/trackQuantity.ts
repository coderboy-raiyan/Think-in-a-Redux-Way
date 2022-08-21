/* eslint-disable no-alert */
const trackQty = (store: any) => (next: any) => (action: any) => {
    const {
        cart: { cart: cartItems },
    } = store.getState();

    const checkTheAvailability = cartItems.find((product: any) => product.id === action.payload.id);

    // console.log(checkTheAvailability);

    if (
        action.type === "cart/addToCart" &&
        checkTheAvailability &&
        checkTheAvailability?.quantity >= checkTheAvailability?.availableItems
    ) {
        alert(`You can't add more then ${checkTheAvailability.availableItems}`);
        return;
    }

    // eslint-disable-next-line consistent-return
    return next(action);
};

export default trackQty;
