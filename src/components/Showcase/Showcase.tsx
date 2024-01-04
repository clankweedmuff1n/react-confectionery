import React, {PureComponent} from 'react';
import stylesShowcase from './Showcase.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import SwiperImage2 from '../../assets/img/swiper-images/swiper2.jpg';
import SwiperImage3 from '../../assets/img/swiper-images/swiper3.jpg';
import SwiperImage4 from '../../assets/img/swiper-images/swiper4.jpg';
import SwiperImage5 from '../../assets/img/swiper-images/swiper5.jpg';
import SwiperImage7 from '../../assets/img/swiper-images/swiper7.jpg';
import SwiperImage9 from '../../assets/img/swiper-images/swiper9.jpg';
import SwiperImage10 from '../../assets/img/swiper-images/swiper10.jpg';
import SwiperImage11 from '../../assets/img/swiper-images/swiper11.jpg';
import SwiperImage12 from '../../assets/img/swiper-images/swiper12.jpg';
import SwiperImage13 from '../../assets/img/swiper-images/swiper13.jpg';
import SwiperImage14 from '../../assets/img/swiper-images/swiper14.jpg';

import MainImage from '../../assets/img/main.jpg';

import {EffectCards} from 'swiper/modules';
import {IGIcon} from "./Icones/IGIcon";
import {TGIcon} from "./Icones/TGIcon";
import {WhatsappIcon} from "./Icones/WhatsappIcon";
import {ViberIcon} from "./Icones/ViberIcon";

interface OwnProps {
}

type Props = OwnProps;

type State = Readonly<{
    width: number
}>;

class Showcase extends PureComponent<Props, State> {
    readonly state: State = {
        width: window.innerWidth
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth,
        });
    };

    copyToClipboard() {
        navigator.clipboard.writeText("+7 (905) 246 6044").then();
    }
    render() {
        const images = [
            SwiperImage4, SwiperImage2, SwiperImage3, SwiperImage5, SwiperImage7, SwiperImage9, SwiperImage10, SwiperImage11, SwiperImage12, SwiperImage13, SwiperImage14
        ]
        return (
            <>
                <div className={stylesShowcase.showcase}>
                    <div className={stylesShowcase.showcase__main}>
                        <img className={stylesShowcase.showcase__main_image}
                             src={MainImage}/>
                        <h2 className={stylesShowcase.showcase__main_title}>Filatova cakes</h2>
                        <div className={stylesShowcase.showcase__button_wrapper}>
                            <IGIcon className={stylesShowcase.showcase__main_button}/>
                            <TGIcon className={stylesShowcase.showcase__main_button}/>
                            <WhatsappIcon className={stylesShowcase.showcase__main_button}/>
                            <ViberIcon className={stylesShowcase.showcase__main_button}/>
                        </div>
                        <p onClick={this.copyToClipboard} className={stylesShowcase.showcase__main_text}>+7 (905) 246 6044</p>
                    </div>
                    {this.state.width < 600 && (
                        <Swiper
                            className={stylesShowcase.showcase__swiper}
                            grabCursor={true}
                            modules={[Pagination, Autoplay]}
                            slidesPerView={1}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                        >
                            {images.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    {this.state.width > 600 && (
                        <Swiper
                            className={stylesShowcase.showcase__swiper}
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                        >
                            {images.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
                {/*
                <h1>Showcase {this.state.status}</h1>
                <button onClick={() => this.setStatus("new")}>NEw</button>
                <button onClick={() => this.setStatus("update")}>Update</button>*/
                }
            </>
        )
            ;
    }
}

export default Showcase;
