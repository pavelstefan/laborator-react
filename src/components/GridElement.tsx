import React from 'react';
import './grid-element.css';
// import logo1 from '../assets/1.png';
// import logo2 from '../assets/2.png';
// import logo3 from '../assets/3.png';
// import logo4 from '../assets/4.png';
// import logo5 from '../assets/5.png';
// import logo6 from '../assets/6.png';

// const logos = [
//     logo1,
//     logo2,
//     logo3,
//     logo4,
//     logo5,
//     logo6,
// ];

const GridElement: React.FC<{
    logoIndex: number;
    visible?: boolean;
    onClick?: () => void;
}> = ({ logoIndex, visible, onClick }) => {
    if (!visible) {
        return <div className="hidden-image" onClick={onClick} />
    }
    return <img src={`/assets/${logoIndex}.png`} alt="logo" width={64} height={64} />
}

export default GridElement;