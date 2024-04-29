import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Navigation } from './layouts/Navigation';
import { ProductsPage } from './pages/ProductPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './layouts/Footer';

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>        
                <Route path='/' element={<ProductsPage/>}/>
                <Route path='/product/:id' element={<ProductDetailPage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App