import React from 'react';

interface IImage {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void
}

const Image = ({ src, alt, className, onClick }: IImage) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onClick={onClick}
        />
    );
};

export default Image;