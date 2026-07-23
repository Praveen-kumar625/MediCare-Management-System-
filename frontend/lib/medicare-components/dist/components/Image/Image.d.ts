import React from 'react';
interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    fluid?: boolean;
    rounded?: boolean;
    circle?: boolean;
    src: string;
}
declare const Image: (props: Props) => JSX.Element;
export { Image };
