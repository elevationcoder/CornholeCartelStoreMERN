import './Product.css'
import { Link } from 'react-router-dom' 
const Product = ({imageUrl, name, price, description, productId}) => {
    return (
        <div className="Product">
            <img 
            src={imageUrl} 
            alt={name} 
            />
            <div className="ProductInfo">
                <p className="InfoName">{name}</p>
                <p className="InfoDesc">
                    {description.substring(0, 100)}...
                </p>
                <p className="InfoPrice">${price}</p>
                <Link to={`/product/${productId}`} className="InfoButton">View</Link>
            </div>
        </div>
    )
}

export default Product
