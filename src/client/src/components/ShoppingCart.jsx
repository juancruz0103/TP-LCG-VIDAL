import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const handleClear = () => {
        clearCart();
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart">
            <h2>Tu Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <span>{item.name} - ${item.price} x {item.quantity}</span>
                                <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    <button onClick={handleClear}>Vaciar Carrito</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;