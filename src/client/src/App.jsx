import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import SalesPage from './components/SalesPage';
import ShoppingCart from './components/ShoppingCart';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import './styles/main.css';

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />
                        <Route path="/sales" component={SalesPage} />
                        <Route path="/cart" component={ShoppingCart} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/admin" component={AdminPanel} />
                    </Switch>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;