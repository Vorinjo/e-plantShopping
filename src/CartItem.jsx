import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from './CartSlice.jsx';

function CartNavbar({ onNavigate }) {
  const cartCount = useSelector(selectCartTotalQuantity);

  const goTo = (event, page) => {
    event.preventDefault();
    onNavigate(page);
  };

  return (
    <header className="shop-navbar">
      <a className="brand" href="#home" onClick={(event) => goTo(event, 'home')}>
        <span className="brand__icon" aria-hidden="true">🌿</span>
        <span>
          <strong>Paradise Nursery</strong>
          <small>Where green meets serenity</small>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#home" onClick={(event) => goTo(event, 'home')}>Home</a>
        <a href="#plants" onClick={(event) => goTo(event, 'plants')}>Plants</a>
        <a
          className="cart-link"
          href="#cart"
          onClick={(event) => goTo(event, 'cart')}
          aria-label={`Cart with ${cartCount} items`}
        >
          <span aria-hidden="true">🛒</span>
          Cart
          <span className="cart-badge">{cartCount}</span>
        </a>
      </nav>
    </header>
  );
}

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalAmount = useSelector(selectCartTotalAmount);

  const handleCheckout = () => {
    window.alert('Coming Soon! Checkout will be available shortly.');
  };

  return (
    <div className="shop-page" id="cart">
      <CartNavbar onNavigate={onNavigate} />
      <main className="cart-main">
        <div className="section-heading section-heading--compact">
          <span>Your growing collection</span>
          <h1>Shopping Cart</h1>
        </div>

        {items.length === 0 ? (
          <section className="empty-cart">
            <div aria-hidden="true">🪴</div>
            <h2>Your cart is ready for something green.</h2>
            <p>Explore our collection and choose a plant you will love.</p>
            <button
              className="primary-button"
              type="button"
              onClick={() => onNavigate('plants')}
            >
              Continue Shopping
            </button>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Cart items">
              {items.map((plant) => (
                <article className="cart-item" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="cart-item__details">
                    <h2>{plant.name}</h2>
                    <p className="unit-price">
                      Unit price: ${plant.price.toFixed(2)}
                    </p>
                    <div className="quantity-controls" aria-label={`Quantity of ${plant.name}`}>
                      <button
                        type="button"
                        onClick={() => dispatch(decrementQuantity(plant.id))}
                        disabled={plant.quantity === 1}
                        aria-label={`Decrease ${plant.name} quantity`}
                      >
                        −
                      </button>
                      <span>{plant.quantity}</span>
                      <button
                        type="button"
                        onClick={() => dispatch(incrementQuantity(plant.id))}
                        aria-label={`Increase ${plant.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => dispatch(removeItem(plant.id))}
                    >
                      Delete
                    </button>
                  </div>
                  <strong className="line-total">
                    ${(plant.price * plant.quantity).toFixed(2)}
                  </strong>
                </article>
              ))}
            </section>

            <aside className="cart-summary" aria-label="Order summary">
              <span>Order summary</span>
              <h2>Total Cart Amount: {totalQuantity}</h2>
              <div className="summary-row">
                <span>Plants</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="summary-row summary-row--total">
                <span>Total Cost</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>
              <button
                type="button"
                className="primary-button checkout-button"
                onClick={handleCheckout}
              >
                Checkout — Coming Soon
              </button>
              <button
                type="button"
                className="secondary-button"
                onClick={() => onNavigate('plants')}
              >
                Continue Shopping
              </button>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;
