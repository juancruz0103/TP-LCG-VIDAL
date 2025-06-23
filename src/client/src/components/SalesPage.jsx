import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import ProductList from './ProductList';

const SalesPage = () => {
    const { cartItems, addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    return (
        <div className="sales-page">
            <h1>Bienvenido a La Cueva Gamer</h1>
            <ProductList addToCart={addToCart} />
            <div className="shopping-cart">
                <h2>Tu Carrito de Compras</h2>
                {cartItems.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                )}
            </div>
            {user && user.role === 'admin' && (
                <div className="admin-notice">
                    <p>Has iniciado sesión como administrador. Puedes gestionar el stock de productos.</p>
                </div>
            )}
        </div>
    );
};

export default SalesPage;