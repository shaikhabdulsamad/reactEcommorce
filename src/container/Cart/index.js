import './style.css'

function Cart() {
    return (
        <div className="mt-81 cart">
           
            <div>
        <h1>Shopping Cart</h1>
        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>
          
          <div className="product">
            <div className="product-image">
              <img src="https://static-01.daraz.pk/p/cf9a45356e37e8b5496c09382789ff28.jpg" />
            </div>
            <div className="product-details">
              <div className="product-title">China Airpods</div>
              <p className="product-description">product discription will place here...</p>
            </div>
            <div className="product-price">100</div>
            <div className="product-quantity">
              <input type="number" defaultValue={1} min={1} />
            </div>
            <div className="product-removal">
              <button className="remove-product">
                Remove
              </button>
            </div>
            <div className="product-line-price">100</div>
          </div>
          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">100</div>
            </div>
            <div className="totals-item">
              <label>Tax (5%)</label>
              <div className="totals-value" id="cart-tax">20</div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">20</div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">140</div>
            </div>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
        </div>
    )
}

export default Cart;