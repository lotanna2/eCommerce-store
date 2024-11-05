import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
     return (
     <div className="cart-cont">
        <div className="cart-wrapper">
            {_cartItems.cartItems.length > 0 ? // if the length is grater than 0 meaning if they have added an item to cart
            _cartItems.cartItems.map((item) => {
                return (
                    <div className="cart-list-cont" key={item.id}> 
                    <img 
                    src={item.img} 
                    alt={item.productName} 
                    className="cart-img" 
                 />
                    <div>
                     <button className="free-shipping"> Free Shipping </button>
                     <h2 className="cart-item-h2"> {item.productName}</h2>
                     <h3 className="cart-item-h3"> {(item.price * 1.2).toFixed(2)}</h3>
                     <h1 className="cart-item-h1"> {item.price.toFixed(2)} </h1>
                     <h4 className="cart-item-h4">
                        {item.description.length > 200 ?
                        `${item.description.substring(0, 200)}...`
                         : item.description}
                    </h4>
                    </div>
                    </div>
               );
            }) : (  // else say show this
            
            <h1> YOU HAVEN'T ADDED ANY ITEM TO CART</h1>

            )};
        </div>
        {_cartItems.cartItems.length > 0  && // the logic for when the card items is empty, dont show the summary card 
         <div className="cart-summary-cont">
         <h2>Total: ${_cartItems.totalAmount.toFixed(2)}</h2>
         <h5>Shipping Cost: $0 </h5>
         <h5>Total Items: {_cartItems.numberOfItems} </h5>
         <button // adding a custom/default styling
         style={{ alignSelf: "center", width: "100%"}}
         onClick={() => navigate("/checkout")}
         >
             Checkout
         </button> 
     </div>
        } 
       
     </div>

     );
};

export default Cart;