import Cookies from "js-cookie";

//function to get data thorugh cookies
export const getCartItems = () => {
  const cartItems = Cookies.get("cartItems");
  return cartItems ? JSON.parse(cartItems) : []; ///converting here in string to json data
};

//function to store data in cookie
//set data

export const setCartItems = (cartItems) => {
  //cookies only data only in string formatte that we parse here
  Cookies.set("cartItems", JSON.stringify(cartItems));
};

//function to add data/item to cart
//add data
export const addToCart = (product, quantity) => {
  const cartItems = getCartItems(); //checking here data is present or not
  const existingItem = cartItems.find((item) => item.id === product.id); //checking here existing product id is same or not
  if (existingItem) {
    existingItem.qty += quantity; // addting here items(quantity) in existing items if cond. is true.
  } else {
    cartItems.push({
      id: product?.id,
      title: product?.title,
      price: product?.price,
      image: product?.thumbnail,
      qty: quantity, //bex addting two qty that by use here quantity
    });
  }
  setCartItems(cartItems);
};

/// function delete/remove data
export const removeFromCart = (productId) => {
  const cartItems = getCartItems().filter((item) => item.id !== productId);
  setCartItems(cartItems);
};

//function update data

export const updateCartItems = (productId, quantity) => {
  const cartItems = getCartItems().map((item) => {
    if (item.id === productId) {
      return {
        ...item, qty: quantity
      }
    } else {
      return item;
    }

  });
  setCartItems(cartItems);
};
