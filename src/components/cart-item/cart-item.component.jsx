import React from 'react';

import {
  CartItemContainer,
  CartItemImage,
  ItemDitailsContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDitailsContainer className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDitailsContainer>
  </CartItemContainer>
);

export default CartItem;
