// External imports
import React, { useState } from 'react'
import { Route } from 'react-router-dom'

// Asset imports
import data from './data'

// Local imports
import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'
import ProductCTX from './context/ProductCTX'
import CartCTX from './context/CartCTX'


const App = () => {
    const [products] = useState(data)
    const [cart, setCart] = useState([])

    const addItem = item => {
        setCart([...cart, item])
    }

    return (
        <ProductCTX.Provider value={{ products, addItem }}>
            <CartCTX.Provider value={{ cart }}>
                <div className="App">
                    <Navigation />
                    <Route exact path="/" component={Products} />
                    <Route path="/cart" component={ShoppingCart} />
                </div>
            </CartCTX.Provider>
        </ProductCTX.Provider>
    )
}

export default App