import React from 'react';
import styleImageElement from './ImageElement.module.scss';
import styleElement from '../Element.module.scss';

interface ImageElementProps {
    src: string;
    alt: string;
}

class ImageElement extends React.Component<ImageElementProps> {
    render() {
        const {src, alt} = this.props;

        return (
            <div className={styleElement.element}>
                <div className={styleImageElement.element__image} style={{ backgroundImage: `url(${src})` }}/>
            </div>
        );
    }
}

export default ImageElement;
