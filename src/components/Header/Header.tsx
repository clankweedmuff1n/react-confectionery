import React, {PureComponent} from 'react';
import styles from './Header.module.scss';

interface OwnProps {
}

type Props = OwnProps;

type State = Readonly<{
    width: number,
}>;

export const Header: React.FC<{}> = () => {
    return <HeaderInner />
}


class HeaderInner extends PureComponent<Props, State> {
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
    render() {
        return (
            <>
                <p className={styles.header}>FJDJFSJFS</p>
            </>
        );
    }
}