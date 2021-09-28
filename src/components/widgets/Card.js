import React from 'react';
import { detect } from 'detect-browser';
import ImageContext from '../../store/ImageContext';

import css from './Card.module.css';
import Toolkit from '../../utils/Toolkit';

export default class Card extends React.Component {
    static contextType = ImageContext;

    breakpoint = 620;

    useFilter = null;

    filterRef = null;

    imageRef = null;

    filterFrequency = null;

    browserInfo = null;

    fallbackMode = false;

    constructor(props) {
        super(props);
        this.browserInfo = detect();

        this.imageRef = React.createRef(null);
        this.fallbackMode = this.browserInfo.name === 'safari';
        this.filterRef = React.createRef(null);
        if (!this.fallbackMode) {
            this.filterId = props.filterId || 'card-filter_' + getRandomNumber();
            this.filterFrequency = props.filterFrequency || '0.02';
        }
    }

    componentDidMount() {
        this.setImage(this.props.image);
        if (this.fallbackMode) {
            return;
        }

        setFilter(this, true);
        window.addEventListener('resize', (e) => {
            this.timer = Toolkit.delayedExecution(
                () => {
                    setFilter(this);
                },
                100,
                this.timer
            );
        });
    }

    setImage(imageName) {
        import(`../../images/${imageName}`).then((image) => {
            if (!image || !image.default) {
                console.error('Image not found');
                return;
            }
            this.image = image.default;
            updateImage(this);
        });
    }

    showImage(e) {
        e.stopPropagation();
        this.context.setName(this.image);
        this.context.setVisible(true);
    }

    render() {
        const bgImageCSS = {};

        if (this.image) {
            bgImageCSS.backgroundImage = `url(${this.image})`;
        }

        return (
            <div
                onClick={(e) => this.showImage(e)}
                className={css['card-widget']}
            >
                <div ref={this.filterRef} className={css['card-bg']}></div>
                <div className={css.card}>
                    <div
                        ref={this.imageRef}
                        className={`${css.image}`}
                        style={bgImageCSS}
                    ></div>
                </div>
                <svg>
                    <filter id={this.filterId}>
                        <feTurbulence
                            x="0"
                            y="0"
                            baseFrequency={this.filterFrequency}
                            numOctaves="5"
                            seed="1"
                        ></feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="20" />
                    </filter>
                </svg>
            </div>
        );
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100000 + 1);
}

function setFilter(card, initialize) {
    if (
        (initialize || card.useFilter === true) &&
        window.innerWidth < card.breakpoint
    ) {
        card.filterRef.current.style.filter = '';
        card.useFilter = false;
    } else if (
        (initialize || card.useFilter === false) &&
        window.innerWidth >= card.breakpoint
    ) {
        card.filterRef.current.style.filter = `url(#${card.filterId})`;
        card.useFilter = true;
    }
}

function updateImage(card) {
    card.imageRef.current.style.backgroundImage = `url(${card.image})`;
}
