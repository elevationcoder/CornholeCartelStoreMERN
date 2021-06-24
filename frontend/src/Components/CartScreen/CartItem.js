import './CartItem.css'
import {Link} from 'react-router-dom'

const CartItem = ({item, qtyChangeHandler, removeFromCartHandler}) => {
    return (
        <div className="CartItem">
            <div className="CartItemImage">
                <img src={item.imageUrl} alt={item.name} />
            </div>

            <Link to={`/product/${item.product}`} className="CartItemName">
                <p>{item.name}</p>
            </Link>

            <p className="CartItemPrice">${item.price}</p>

            <select className="CartItemSelect" 
                value={item.qty} 
                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>

            <button className="CartItemDeleteButton" onClick={() => removeFromCartHandler(item.product)}>
                <i className="fas fa-trash"></i>
            </button>

        </div>
    )
}

export default CartItem
