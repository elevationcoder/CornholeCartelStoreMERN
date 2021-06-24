import './HomeScreen.css'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Product from '../ProductScreen/Product'

import { getProducts as listProducts} from '../../redux/actions/productActions'

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);

    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="HomeScreen">
            <h2 className="HomeScreenTitle">Latest Products</h2>
            
            <div className="HomeScreenProducts">
            {loading ? (<h2>Loading...</h2>) : error ? <h2>{error}</h2> : products.map((product) => 
                <Product 
                key={product._id} 
                productId={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}    
                />
            )}
            </div>
        </div>
    )
}

export default HomeScreen
