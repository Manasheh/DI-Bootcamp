import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS file
import { Carousel } from 'react-responsive-carousel';
import japan from '../src/images/japan.webp';
import macao from '../src/images/macao.webp';
import Las_vegas from '../src/images/Las_vegas.webp';
import hongkong from '../src/images/hongkong.jpg';

function Reactcarousel() {
    return (
        <Carousel>
            <div>
                <img src={japan} alt="Japan" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src={macao} alt="Macao" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src={Las_vegas} alt="Las Vegas" />
                <p className="legend">Las Vegas</p>
            </div>
            <div>
                <img src={hongkong} alt="Hong Kong" />
                <p className="legend">HongKong</p>
            </div>
        </Carousel>
    );
}

export default Reactcarousel;
