import ChartJs from 'chart.js';
import { Component } from 'react';
import { Dataset } from './interfaces';
interface Props {
    doughnut?: boolean;
    title?: string;
    titleFontSize?: number;
    titleFontColor?: string;
    datasets: Dataset[];
    width?: string;
    height?: string;
}
declare class PieGraph extends Component<Props, Record<string, unknown>> {
    graph: ChartJs | null;
    chart: HTMLCanvasElement | null;
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
}
export { PieGraph };
