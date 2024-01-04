import React, {useEffect, useState} from 'react';
import styleRate from './Rate.module.scss';
import Star from "./Star/Star";

interface rateProps {
    value: number,
}

const Rate: React.FC<rateProps> = ({ value }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (windowWidth < 800) stars.push(<Star size={"2rem"} key={i} filled={i <= value} />);
            else stars.push(<Star key={i} filled={i <= value} />);
        }

        return stars;
    }

    return <div className={styleRate.rate}>{renderStars()}</div>;
}

export default Rate;