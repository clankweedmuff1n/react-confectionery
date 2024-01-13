import React, {PureComponent} from 'react';
import styles from './Category.module.scss';

interface OwnProps {
    category: string;
    active: boolean;
}

type Props = OwnProps;

class Category extends PureComponent<Props> {
    render() {
        return (
            <div className={`${styles.category} ${this.props.active ? styles.active : ''}`}>
                <p className={styles.name}>{this.props.category}</p>
            </div>
        );
    }
}

export default Category;
