import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>price</span>
        </div>
        <div className='header-block'>
          <span> Remove </span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <div>TOTAL:${total}</div>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   cartItemss: state.cart.cartItems,
// });
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
