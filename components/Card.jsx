import './style/card.css'
import desktop from './images/image-product-desktop.jpg'
import btnicon from './images/icon-cart.svg'
export function Card(){
    return (
        <div className="card">
            <img src={desktop} alt="" className="card-image" />
            <div className="card-text">
                <span className="card-category">PERFUME</span>
                <h1 className="card-title">Gabrielle Essence Eau De Parfum</h1>
                <p className="card-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className="price-section">
                    <h1 className="actual-price">$149.99</h1>
                    <span className="last-price">$169.99</span>
                </div>
                <a href="#" className="button"><img src={btnicon} alt="" className="button-icon" /><span className="button-label">Add to Cart</span></a>
            </div>
        </div>
    )
} 
