import React, { useContext } from 'react'

// Components
import Product from './Product'


import ProductCTX from '../context/ProductCTX'

const Products = props => {

    const { products, addItem } = useContext(ProductCTX)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	)
}

export default Products
