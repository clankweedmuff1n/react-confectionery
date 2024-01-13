import React, {PureComponent} from 'react';
import styles from "./Product.module.scss";
import {RubleIcon} from "../Icones/RubleIcon";

interface OwnProps {
    title: string;
    subtitle: string;
    image: string;
    path: string;
    price: number;
}

type Props = OwnProps;

class Product extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.product}>
                <div className={styles.image} style={{backgroundImage: `url('${this.props.image}')`}}/>
                <div className={styles.about_container}>
                    <div className={styles.text_container}>
                        <h2 className={styles.title}>{this.props.title}</h2>
                        <p className={styles.title}>{this.props.subtitle}</p>
                        <p className={styles.price}>от {this.props.price}<RubleIcon className={styles.icon}/></p>
                    </div>
                    <div className={styles.button}>Купить</div>
                </div>
            </div>
        );
    }
}

export default Product;
