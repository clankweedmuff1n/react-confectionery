import React from 'react';
import styleReviews from './Reviews.module.scss';
import Review from "./Review/Review";
import review from "./Review/Review";

class Reviews extends React.Component {
    render() {
        const reviewArray = [
            {
                value: 5,
                title: "Традиционный и оригинальный",
                text: "Различные сорта хлеба, традиционные и оригинальные багеты",
                author: "Патрисия Дор",
            },
            {
                value: 5,
                title: "Также забери с собой",
                text: "Просто идеально, настоящее удовольствие. Также забрать",
                author: "Река Торхани",
            },
            {
                value: 4,
                title: "Очень хорошее соотношение цены и качества",
                text: "Очень вкусно, хорошее соотношение цены и качества. Я знал магазин на авеню д'Итали (13-й дом) и не думал, что это сеть «Le Grenier à Pain». Оба вкусные!",
                author: "Эмна Бендиаф",
            },
            {
                value: 5,
                title: "Моя любимая пекарня",
                text: "Моя любимая пекарня воскресным утром",
                author: "Чарльз Баучер Томас",
            }
        ]
        return (
            <section className={styleReviews.reviews}>
                <h2 className={styleReviews.reviews__title}>Отзывы о нас</h2>
                <div className={styleReviews.reviews__wrapper}>
                    {reviewArray.map(review =>
                        <Review value={review.value}
                                title={review.title}
                                text={review.text}
                                author={review.author}/>
                    )}
                </div>
            </section>
        );
    }
}

export default Reviews;
