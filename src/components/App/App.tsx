import React from 'react';
import styleApp from './App.module.scss';
import Content from "../Content/Content";
import Main from "../Main/Main";
import Description from "../Description/Description";
import Reviews from "../Reviews/Reviews";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Showcase from "../Showcase/Showcase";

class App extends React.Component {
    render() {
        return (
            <div className={styleApp.App}>
                {/*<Branding/>
                <Header/>*/}
                <Content/>
                <Showcase/>
                <Main/>
                <Description/>
                <Reviews/>
                <About/>

                <Footer/>

                {/*<Description/>
                <Main/>
                <Reviews/>
                <Rooms/>
                <Rewards/>
                <Contact/>
                <Footer/>*/}
            </div>
        );
    }
}

export default App;
