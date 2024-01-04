import React from 'react';
import styleContent from './Content.module.scss';
import {Parallax} from 'react-parallax';
import Image from '../../assets/img/main-image.jpg';

class Content extends React.Component {
    render() {
        return (
            <section className={styleContent.content}>
                <Parallax bgImage={Image}
                          bgImageStyle={{backgroundRepeat: 'no-repeat'}}
                          className={styleContent.content__element}
                          strength={500}>
                    {/*<div className={styleContent.content__element}>*/}
                    <div className={styleContent.content__wrapper}>
                        <h1 className={styleContent.content__title}>Filatova cakes</h1>
                        <p className={styleContent.content__subtitle}></p>
                        <div className={styleContent.content__button}>
                            НАШИ ТВОРЕНИЯ
                        </div>
                    </div>
                    {/*</div>*/}

                </Parallax>
                <div className={styleContent.content__overlay}></div>
            </section>
        );
    }
}

export default Content;
