import { SpinnerType, SpinnerSizeUnit } from './interfaces';
interface Props {
    type: SpinnerType;
    loading: boolean;
    color?: string;
    margin?: string;
    size?: number | [number, number];
    sizeUnit?: SpinnerSizeUnit | [SpinnerSizeUnit, SpinnerSizeUnit];
}
declare const Spinner: (props: Props) => JSX.Element;
export { Spinner };
