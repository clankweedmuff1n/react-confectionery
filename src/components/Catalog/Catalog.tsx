import React from 'react';
import styles from "./Catalog.module.scss";
import Category from "./Category/Category";
import {ArrowDownIcon} from "./Icones/ArrowDownIcon";
import Product from "./Product/Product";

import MussImage from "../../assets/img/desserts/Муссовые пирожные.jpg";
import MussImage1 from "../../assets/img/desserts/Муссовые пирожные2.jpg";
import MussImage2 from "../../assets/img/desserts/Муссовые пирожные3.jpg";
import MussImage3 from "../../assets/img/desserts/Муссовые пирожные4.jpg";
import MussImage4 from "../../assets/img/desserts/Муссовые пирожные5.jpg";
import MussImage5 from "../../assets/img/desserts/Муссовые пирожные6.jpg";
import MussImage6 from "../../assets/img/desserts/Муссовые пирожные7.jpg";
import MussImage7 from "../../assets/img/desserts/Муссовые пирожные8.jpg";
import MussImage8 from "../../assets/img/desserts/Муссовые пирожные9.jpg";
import MussImage9 from "../../assets/img/desserts/Муссовые пирожные10.jpg";
import MussImage10 from "../../assets/img/desserts/Муссовые пирожные11.jpg";
import MussImage11 from "../../assets/img/desserts/Муссовые пирожные12.jpg";
import MussImage12 from "../../assets/img/desserts/Муссовые пирожные13.jpg";
import MussImage13 from "../../assets/img/desserts/Муссовые пирожные14.jpg";
import MussImage14 from "../../assets/img/desserts/Муссовые пирожные15.jpg";
import MussImage15 from "../../assets/img/desserts/Муссовые пирожные16.jpg";
import MussImage16 from "../../assets/img/desserts/Муссовые пирожные17.jpg";
import MussImage17 from "../../assets/img/desserts/Муссовые пирожные18.jpg";
import MussImage18 from "../../assets/img/desserts/Муссовые пирожные19.jpg";
import MussImage19 from "../../assets/img/desserts/Муссовые пирожные20.jpg";
import MussImage20 from "../../assets/img/desserts/Муссовые пирожные21.jpg";
import MussImage21 from "../../assets/img/desserts/Муссовые пирожные22.jpg";
import MussImage22 from "../../assets/img/desserts/Муссовые пирожные23.jpg";
import MussImage23 from "../../assets/img/desserts/Муссовые пирожные24.jpg";
import MussImage24 from "../../assets/img/desserts/Муссовые пирожные25.jpg";

import Cupcakes from "../../assets/img/desserts/Капкейки.jpg";
import Cupcakes1 from "../../assets/img/desserts/Капкейки2.jpg";
import Cupcakes2 from "../../assets/img/desserts/Капкейки3.jpg";
import Cupcakes3 from "../../assets/img/desserts/Капкейки3.jpg";
import Cupcakes4 from "../../assets/img/desserts/Капкейки4.jpg";
import Cupcakes5 from "../../assets/img/desserts/Капкейки5.jpg";
import Cupcakes6 from "../../assets/img/desserts/Капкейки6.jpg";
import CupcakesAndTrifles from "../../assets/img/desserts/Капкейкитрайфлы.jpg";

import Trifles from "../../assets/img/desserts/Трайфлы.jpg";

import Escimo from "../../assets/img/desserts/Эскимо.jpg";
import Escimo1 from "../../assets/img/desserts/Эскимо1.jpg";
import Escimo2 from "../../assets/img/desserts/Эскимо2.jpg";
import Escimo3 from "../../assets/img/desserts/Эскимо3.jpg";
import Escimo4 from "../../assets/img/desserts/Эскимо4.jpg";
import Escimo5 from "../../assets/img/desserts/Эскимо5.jpg";
import Escimo6 from "../../assets/img/desserts/Эскимо6.jpg";

import Potato from "../../assets/img/desserts/Картошка.jpg";
import Potato1 from "../../assets/img/desserts/Картошка1.jpg";
import Potato2 from "../../assets/img/desserts/Картошка2.jpg";
import Potato3 from "../../assets/img/desserts/Картошка3.jpg";

import CakePops from "../../assets/img/desserts/Кейкпопс.jpg";

class Catalog extends React.PureComponent {
    render() {
        const categoryArray = [
            {
                title: "Все",
                path: "/title",
                active: true
            },
            {
                title: "Капкейки",
                path: "/title",
                active: false
            },
            {
                title: "Трайфлы",
                path: "/title",
                active: false
            },
            {
                title: "Эскимо",
                path: "/title",
                active: false
            },
            {
                title: "Муссовые пирожные",
                path: "/title",
                active: false
            },
            {
                title: "Картошка",
                path: "/title",
                active: false
            },
            {
                title: "Кейк попс",
                path: "/title",
                active: false
            },
        ]

        const productArray = [
            {
                title: "Product",
                subtitle: "Subtitle",
                image: "https://cheeseit.ru/upload/resize/11070/11070_550x424x70_c.webp",
                path: "/product",
                price: 100,
            },
            {
                title: "Product",
                subtitle: "Subtitle",
                image: "https://cheeseit.ru/upload/resize/11070/11070_550x424x70_c.webp",
                path: "/product",
                price: 100,
            },
            {
                title: "Product",
                subtitle: "Subtitle",
                image: "https://cheeseit.ru/upload/resize/11070/11070_550x424x70_c.webp",
                path: "/product",
                price: 100,
            },
            {
                title: "Product",
                subtitle: "Subtitle",
                image: "https://cheeseit.ru/upload/resize/11070/11070_550x424x70_c.webp",
                path: "/product",
                price: 100,
            },
            {
                title: "Product",
                subtitle: "Subtitle",
                image: "https://cheeseit.ru/upload/resize/11070/11070_550x424x70_c.webp",
                path: "/product",
                price: 100,
            },
        ]

        let dessertsArray = [
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage1,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage2,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage3,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage4,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage5,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage6,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage7,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage8,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage9,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage10,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage11,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage12,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage13,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage14,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage15,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage16,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage17,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage18,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage19,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage20,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage21,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage22,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage23,
                path: "/product",
                price: 100,
            },
            {
                title: "Муссовые пирожные",
                subtitle: "Subtitle",
                image: MussImage24,
                path: "/product",
                price: 100,
            },
            {
                title: "Капкейки",
                subtitle: "Subtitle",
                image: Cupcakes,
                path: "/product",
                price: 100,
            },
            {
                title: "Капкейки",
                subtitle: "Subtitle",
                image: Cupcakes1,
                path: "/product",
                price: 100,
            },
            {
                title: "Капкейки",
                subtitle: "Subtitle",
                image: Cupcakes2,
                path: "/product",
                price: 100,
            },
            {
                title: "Капкейки",
                subtitle: "Subtitle",
                image: Cupcakes3,
                path: "/product",
                price: 100,
            },
            {
                title: "Капкейки",
                subtitle: "Subtitle",
                image: Cupcakes4,
                path: "/product",
                price: 100,
            },
            {
                title: "Капкейки",
                subtitle: "Subtitle",
                image: Cupcakes5,
                path: "/product",
                price: 100,
            },
            {
                title: "Капкейки",
                subtitle: "Subtitle",
                image: Cupcakes6,
                path: "/product",
                price: 100,
            },
            {
                title: "Кейкпопс",
                subtitle: "Subtitle",
                image: CakePops,
                path: "/product",
                price: 100,
            },
            {
                title: "Картошка",
                subtitle: "Subtitle",
                image: Potato,
                path: "/product",
                price: 100,
            },
            {
                title: "Картошка",
                subtitle: "Subtitle",
                image: Potato1,
                path: "/product",
                price: 100,
            },
            {
                title: "Картошка",
                subtitle: "Subtitle",
                image: Potato2,
                path: "/product",
                price: 100,
            },
            {
                title: "Картошка",
                subtitle: "Subtitle",
                image: Potato3,
                path: "/product",
                price: 100,
            },
            {
                title: "Трайфлы",
                subtitle: "Subtitle",
                image: Trifles,
                path: "/product",
                price: 100,
            },
            {
                title: "Эскимо",
                subtitle: "Subtitle",
                image: Escimo,
                path: "/product",
                price: 100,
            },
            {
                title: "Эскимо",
                subtitle: "Subtitle",
                image: Escimo1,
                path: "/product",
                price: 100,
            },
            {
                title: "Эскимо",
                subtitle: "Subtitle",
                image: Escimo2,
                path: "/product",
                price: 100,
            },
            {
                title: "Эскимо",
                subtitle: "Subtitle",
                image: Escimo3,
                path: "/product",
                price: 100,
            },
            {
                title: "Эскимо",
                subtitle: "Subtitle",
                image: Escimo4,
                path: "/product",
                price: 100,
            },
            {
                title: "Эскимо",
                subtitle: "Subtitle",
                image: Escimo5,
                path: "/product",
                price: 100,
            },
            {
                title: "Эскимо",
                subtitle: "Subtitle",
                image: Escimo6,
                path: "/product",
                price: 100,
            },
            {
                title: "Капкейки и трайфлы",
                subtitle: "Subtitle",
                image: CupcakesAndTrifles,
                path: "/product",
                price: 100,
            },
        ];
        dessertsArray = dessertsArray.sort(() => (Math.random() > .5) ? 1 : -1);
        return (
            <div className={styles.catalog}>
                <div className={styles.title_section}>
                    <h2 className={styles.title}>Десерты</h2>
                    <div className={styles.category_container}>
                        {categoryArray.map((item) => (
                            <Category category={item.title}
                                      active={item.active}
                                      key={item.title}/>
                        ))}
                    </div>
                    <p className={styles.filter}>Сначала дешевые<ArrowDownIcon/></p>
                </div>
                <div className={styles.product_section}>
                    {dessertsArray.map((item) => (
                        <Product key={item.title}
                                 title={item.title}
                                 subtitle={item.subtitle}
                                 price={item.price}
                                 path={item.path}
                                 image={item.image}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Catalog;
