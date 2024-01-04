import React from 'react';
import styleReview from './Review.module.scss';
import Rate from "./Rate/Rate";

interface reviewProps {
    value: number,
    title: string,
    text: string,
    author: string,
}

class Reviews extends React.Component<reviewProps> {
    render() {
        return (
            <section className={styleReview.review}>
                <Rate value={this.props.value}/>
                <h2 className={styleReview.review__title}>{this.props.title}</h2>
                <p className={styleReview.review__text}>{this.props.text}</p>
                <p className={styleReview.review__author}>{this.props.author}</p>
            </section>
        );
    }
}

export default Reviews;
