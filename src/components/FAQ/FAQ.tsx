import React, { PureComponent } from 'react';
import styles from './FAQ.module.scss';
import {ArrowDownIcon} from "../Catalog/Icones/ArrowDownIcon";

interface OwnProps {}

type Props = OwnProps;

class FAQ extends PureComponent<Props> {
  render() {
    return (
        <div className={styles.faq}>
            <div className={styles.container}>
                <h2 className={styles.title}>Самые интересующие вас вопросы</h2>
                <div className={styles.content}>
                    <div className={styles.row}>
                        <p className={styles.text}>Какой срок годности бисквитных тортов?</p>
                        <ArrowDownIcon/>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.text}>Какой срок годности бисквитных тортов?</p>
                        <ArrowDownIcon/>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.text}>Какой срок годности бисквитных тортов?</p>
                        <ArrowDownIcon/>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.text}>Какой срок годности бисквитных тортов?</p>
                        <ArrowDownIcon/>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.text}>Какой срок годности бисквитных тортов?</p>
                        <ArrowDownIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default FAQ;
