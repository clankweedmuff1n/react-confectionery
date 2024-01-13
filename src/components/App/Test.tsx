import React from 'react';
import Content from "../Content/Content";
import Main from "../Main/Main";
import Description from "../Description/Description";
import Reviews from "../Reviews/Reviews";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Showcase from "../Showcase/Showcase";
import styles from "./App.module.scss";

class Test extends React.Component {
    render() {
        return (
            <>
                <div className={styles.App}>
                    <Content/>
                    <Showcase/>
                    <Main/>
                    <Description/>
                    <Reviews/>
                    <About/>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Test;
