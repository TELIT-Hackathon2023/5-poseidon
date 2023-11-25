import { FaCar } from "react-icons/fa";

import './carNumber.scss';

const CarNumber = () => {
    return (
        <div className="container">
            <div className="car-number">
                <FaCar className="car-number__icon" />
                <div className="car-number__content">PO567PA</div>
            </div>
        </div>
    )
}

export default CarNumber;