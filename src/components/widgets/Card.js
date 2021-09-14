import React from 'react';

import css from './Card.module.css';
import Toolkit from '../../utils/Toolkit';

export default class Card extends React.Component {
    breakpoint = 620;

    useFilter = null;

    filterRef = null;

    imageRef = null;

    filterFrequency = null;

    constructor(props) {
        super(props);
        this.filterId = props.filterId || 'card-filter_' + getRandomNumber();
        this.filterRef = React.createRef(null);
        this.imageRef = React.createRef(null);
        this.filterFrequency = props.filterFrequency || '0.02';
    }

    componentDidMount() {
        this.setImage(this.props.image);
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

    getImageInfo() {
        if (!this.props.description) {
            return null;
        }
        return (
            <div className={css.info}>
                {this.props.title ? <h2>{this.props.title}</h2> : null}
                <p>{this.props.description}</p>
            </div>
        );
    }

    render() {
        const bgImageCSS = {
            backgroundImage: `url(${this.image})`,
        };

        return (
            <div className={css['card-widget']}>
                <div ref={this.filterRef} className={css['card-bg']}></div>
                <div className={css.card}>
                    {this.getImageInfo()}
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
