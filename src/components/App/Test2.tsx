import React from 'react';
import Showcase from "../Showcase/Showcase";
import styles from "./App.module.scss";
import {Header} from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import Footer from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";

class Test extends React.Component {
    render() {
        return (
            <>
                <div className={styles.App}>
                    <Catalog/>
                    <FAQ/>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Test;
