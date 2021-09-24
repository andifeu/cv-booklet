import PageContent from './PageContent';
import CareerStep from '../CareerStep';

import Config from '../../config/appconfig.json';

export default class Career extends PageContent {

    careerElements = [];

    constructor(props) {
        super(props);

        Config.career.forEach(step => {
            const pageIndex = parseInt(step.part, 10) - 1;
            if (this.careerElements[pageIndex] === undefined) {
                this.careerElements[pageIndex] = [];
            }
            this.careerElements[pageIndex].push(step);
        });
    }


    render1() {
        const elements = [];
        this.careerElements[0].forEach(step => {
            elements.push(<CareerStep key={step.id} step={step} />);
        });

        return (
            <>
                <h2>{this.headline}</h2>
                {elements}
            </>
        );
    }

    render2() {
        const elements = [];
        this.careerElements[1].forEach(step => {
            elements.push(<CareerStep key={step.id} step={step} />);
        });

        return (
            <>
                <h2>{this.headline}</h2>
                {elements}
            </>
        );
    }
}
