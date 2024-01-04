import React from 'react';
import styleAbout from './About.module.scss';
import {Parallax} from "react-parallax";
import {Arrow} from "./Arrow/Arrow";

interface AboutProps {
    isArrowVisible: boolean;
}

class About extends React.Component<{}, AboutProps> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isArrowVisible: false,
        };
    }

    handleButtonHover = () => {
        this.setState({isArrowVisible: true});
    };

    handleButtonLeave = () => {
        this.setState({isArrowVisible: false});
    };

    render() {
        return (
            <Parallax
                bgImage={"https://legrenierapain.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Flegrenierapain.com%2Fwp-content%2Fuploads%2F2021%2F06%2Fpain-accroche-au-planfond-avec-un-fil.jpg&cacheMarker=1625475798-34679&token=7cf5714055e62510"}
                className={styleAbout.about}
                strength={500}>
                <div className={styleAbout.about__wrapper}>
                    <h2 className={styleAbout.about__title}>Секторы с экологически ответственными ценностями</h2>
                    <div className={styleAbout.about__wrapper_text}>
                        <p className={styleAbout.about__text}>Le Grenier à Pain — это традиционная пекарня с высокими
                            экологическими ценностями, которая предлагает вам продукцию, изготовленную из 100%
                            французской муки. </p>


                        {/*<div className="et_pb_column et_pb_column_2_5 et_pb_column_30  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper  et_pb_module ">
                                <a className="et_pb_button et_pb_button_0 et_pb_bg_layout_light" href="/nos-filieres">Узнать больше</a>
                            </div>
                        </div>*/}


                        <div className={styleAbout.about__button}
                             onMouseEnter={() => this.handleButtonHover()}
                             onMouseLeave={() => this.handleButtonLeave()}>
                            Узнать больше
                            <Arrow className={styleAbout.about__arrow}/>
                            {this.state.isArrowVisible && <Arrow className={styleAbout.about__arrow}/>}
                        </div>
                    </div>
                </div>
            </Parallax>
        );
    }
}

export default About;
