import '../App.css';
import { CartPage } from './CartPage/index';
import { DiscoverPage } from './DiscoverPage/index';
import { Footer } from './Footer/index';

function App() {
    return (
        <div>
            <div className="discover-page">
                <DiscoverPage />
            </div>
            <div className="cart-page">
                <CartPage />
            </div>
        </div>        
    );
}
export default App;
