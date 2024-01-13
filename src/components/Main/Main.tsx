import React, {useEffect, useState} from 'react';
import styleMain from './Main.module.scss';
import ImageElement from "./Element/ImageElement/ImageElement";
import TextElement from "./Element/TextElement/TextElement";

import MussImage from "../../assets/img/swiper-images/muss.jpg";
import BisImage from "../../assets/img/bisquit.jpg";


const Main = () => {
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
    const textElementsArray = [
        <TextElement title="Торты муссовые"
                     text="Сладкие подарки под любой повод. Персонализированный диайн"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Торты бисквитные"
                     text="Широкий выбор наборов со свежими ягодами в бельгийском шоколаде"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Макарон"
                     text="Эксклюзивный подарок, сочетающий в себе клубнику в шоколаде и цветы"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Дессерты"
                     text='Капкейки, трайфлы, эскимо, "картошка", муссовые пирожные'
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Свадебные торты"
                     text="Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Детские торты"
                     text="Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Для него"
                     text="Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Для неё"
                     text="Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Бенто cakes"
                     text="Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Начинки муссовые"
                     text="Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде"
                     buttonText="Перейти в каталог"/>,
        <TextElement title="Начинки бисквит"
                     text="Красочные букеты из свежей и ароматной клубники в бельгийском шоколаде"
                     buttonText="Перейти в каталог"/>
    ]

    const imageElementsArray = [
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/09/Arctic-treehouse-suite-lounge.jpg"*/
            src={MussImage}
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/12/villa-viima-arctic-treehousehotel-rovaniemi-lapland.jpg"*/
            src={BisImage}
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/Rakas-restaurant-ala-carte-winter-menu.jpg"*/
            src="https://i.imgur.com/PkgSYB3.png"
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/Winter-activities-snowshoeing-arctic-treehouse-hotel_1920x1280.jpg"*/
            src="https://static.wixstatic.com/media/4167b5_83e6beb4cd5c4db4847fa93996259047~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_83e6beb4cd5c4db4847fa93996259047~mv2.jpg"
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"*/
            src="https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg"
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"*/
            src="https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg"
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"*/
            src="https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg"
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"*/
            src="https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg"
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"*/
            src="https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg"
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"*/
            src="https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg"
            alt="change this"/>,
        <ImageElement
            /*src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"*/
            src="https://static.wixstatic.com/media/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4167b5_b94af8c404d34fb488e05d6c1a18cb67~mv2.jpg"
            alt="change this"/>
    ]
    return (
        <section className={styleMain.main}>
            <div className={styleMain.main__container}>
                {textElementsArray.map((textElement, index) => {
                    if ((/*windowWidth > 800 ||*/ index % 2 === 0) && windowWidth >= 420) {
                        return (
                            <>
                                {textElement}
                                {!(windowWidth > 800 && index === imageElementsArray.length - 1) && imageElementsArray[index]}
                            </>);
                    } else {
                        return (
                            <>
                                {imageElementsArray[index]}
                                {textElement}
                            </>);
                    }
                })}
            </div>
        </section>
    );
}

export default Main;
