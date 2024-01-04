import React from 'react';
import styleTextElement from './TextElement.module.scss';
import styleElement from '../Element.module.scss';

interface TextElementProps {
    title: string;
    text: string;
    buttonText: string;
}

class TextElement extends React.Component<TextElementProps> {
    render() {
        const { title, text, buttonText } = this.props;

        return (
            <div className={styleElement.element}>
                <div className={styleTextElement.element__wrapper}>
                    <p className={styleTextElement.element__title}>{title}</p>
                    <p className={styleTextElement.element__text}>{text}</p>
                    <div className={styleTextElement.element__button}>{buttonText}</div>
                </div>
            </div>

        );
    }
}

export default TextElement;
