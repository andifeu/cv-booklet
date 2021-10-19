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


    getPageContent(pageNumber) {
        const elements = [];
        this.careerElements[pageNumber].forEach(step => {
            elements.push(<CareerStep key={step.id} step={step} />);
        });

        return (
            <>
                <h2>{this.headline}</h2>
                {elements}
            </>
        );
    }


    render1() {
        return this.getPageContent(1);
    }

    render2() {
        return this.getPageContent(1);
    }
}
