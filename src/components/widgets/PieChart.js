import React from 'react';

import Easypiechart from '../../plugins/easypiechart';

import css from '../../styles/PieChart.module.css';

const CONFIG = {
    barColor: '#3c77b1',
    trackColor: '#d4d4d4',
    lineCap: 'round',
    lineWidth: 6,
    size: 100,
    rotate: 0,
    scaleColor: false,
    animate: {
        enabled: false,
    },
};

export default class PageContent extends React.Component {
    constructor(props) {
        super(props);
        this.label = props.label;
        this.sublabel = props.sublabel;
        this.value = props.value;
        this.pieRef = React.createRef();
    }

    componentDidMount() {
        this.pieChart = new Easypiechart(this.pieRef.current, CONFIG);
    }

    render() {
        return (
            <div className={css['chart-widget']}>
                <div className={css.flex}>
                    <div className={css['label-container']}>
                        <h3 className={css.label}>{this.label}</h3>
                        <span className={css.sublabel}>{this.sublabel}</span>
                    </div>
                    <div
                        className={css.chart}
                        data-percent={this.value}
                        ref={this.pieRef}
                    >
                        <div className={css.background}>
                            <span
                                className={css.percent}
                            >{`${this.value}%`}</span>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}
