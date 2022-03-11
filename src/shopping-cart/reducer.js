
export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE_ITEM":
      const newItems = state.cart.filter((item) => item.id !== action.id);
      return { ...state, cart: newItems };

    case "INCREASE":
      const tmp = state.cart.map((item) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tmp };

    case "DECREASE":
      return {...state, cart: state.cart.map(item => {
        if (item.id === action.id) {
            return {...item, amount: item.amount - 1}
        }
        return item
      }).filter(item => item.amount !== 0)}

    case "UPDATE_TOTALS":
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { amount, price } = cartItem
            let itemTotal = amount * price
            cartTotal.amount += amount;
            cartTotal.total += itemTotal

            return cartTotal
        }, {
            total: 0,
            amount: 0
        })

        total = parseFloat(total.toFixed(2))
        return {...state, total, amount}

    default:
      return state;
    }
}

