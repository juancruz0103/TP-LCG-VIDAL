import React, { useEffect, useState } from 'react';
import { fetchProducts, updateProductStock } from '../../services/product.service';

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    const handleStockUpdate = async (productId, newStock) => {
        try {
            await updateProductStock(productId, newStock);
            setProducts(products.map(product => 
                product.id === productId ? { ...product, stock: newStock } : product
            ));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Cargando</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Panel de Administración</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre del Producto</th>
                        <th>Stock Actual</th>
                        <th>Actualizar Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>
                                <input 
                                    type="number" 
                                    min="0" 
                                    defaultValue={product.stock} 
                                    onBlur={(e) => handleStockUpdate(product.id, e.target.value)} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;