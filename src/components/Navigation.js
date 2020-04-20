import React, { useContext }  from 'react'
import { NavLink } from 'react-router-dom'

import CartCTX from '../context/CartCTX'

const Navigation = props => {

    const { cart } = useContext(CartCTX)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
                Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	)
}

export default Navigation
