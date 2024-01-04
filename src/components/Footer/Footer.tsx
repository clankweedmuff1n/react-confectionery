import React from 'react';
import styleFooter from './Footer.module.scss';
import {Facebook} from "./Icons/Facebook";
import {Twitter} from "./Icons/Twitter";
import {Instagram} from "./Icons/Instagram";

class Footer extends React.Component {
    render() {
        return (
            <section className={styleFooter.footer}>
                <div className={styleFooter.footer__wrapper}>
                    <div className={styleFooter.footer__block}>
                        <h2 className={styleFooter.footer__title}>Полезные ссылки</h2>
                        <ul>
                            <p className={styleFooter.footer__text}>Связаться с нами</p>
                            <p className={styleFooter.footer__text}>Найти магазин</p>
                            <p className={styleFooter.footer__text}>Станьте ремесленником-пекарем</p>
                        </ul>
                    </div>
                    <img className={styleFooter.footer__img} src={"https://legrenierapain.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Flegrenierapain.com%2Fwp-content%2Fuploads%2F2020%2F07%2FlogoSFBLANC2-300x105-1.png&cacheMarker=1625475797-5574&token=0d3409ed8764caa5"}/>
                    <div className={styleFooter.footer__block}>
                        <h2 className={styleFooter.footer__title}> </h2>
                        <ul>
                            <p className={styleFooter.footer__text}>Наши отрасли</p>
                            <p className={styleFooter.footer__text}>Наш партнерский регион</p>
                            <p className={styleFooter.footer__text}>Легальная информация</p>
                        </ul>
                    </div>
                </div>
                <div className={styleFooter.footer__last}>
                    <p className={styleFooter.footer__last_text}>Le Grenier – Все права защищены ©</p>
                    <div className={styleFooter.footer__last_wrapper}>
                        <Facebook className={styleFooter.footer__icon}/>
                        <Twitter className={styleFooter.footer__icon}/>
                        <Instagram className={styleFooter.footer__icon}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
