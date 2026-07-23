import { CSSProperties } from 'react';
interface Props {
    text: string;
    title?: string;
    htmlFor?: string;
    isRequired?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const Label: {
    (props: Props): JSX.Element;
    defaultProps: {
        title: undefined;
        htmlFor: undefined;
    };
};
export { Label };
