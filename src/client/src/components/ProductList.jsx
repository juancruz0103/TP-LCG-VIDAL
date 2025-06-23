import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="product-list">
            <h2>Productos Disponibles</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <button onClick={() => onAddToCart(product)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;