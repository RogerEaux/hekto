import { createBrowserRouter } from 'react-router-dom';
import Root from './layout/Root';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import ProductDetails from './pages/product-details/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

export default router;
