import ChartJs from 'chart.js';
import { Component } from 'react';
import { Axis, Dataset } from './interfaces';
interface Props {
    horizontal?: boolean;
    stacked?: boolean;
    title?: string;
    titleFontSize?: number;
    titleFontColor?: string;
    datasets: Dataset[];
    width?: string;
    height?: string;
    xAxes: Axis[];
    yAxes: Axis[];
}
declare class BarGraph extends Component<Props, Record<string, unknown>> {
    graph: ChartJs | null;
    chart: HTMLCanvasElement | null;
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
}
export { BarGraph };
