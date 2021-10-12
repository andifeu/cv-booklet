import React from 'react';
import ContentContainer from './ContentContainer';
import Toolkit from '../utils/Toolkit';

import { detect } from 'detect-browser';

import styles from '../styles/Page.module.css';

/**
 * Animation duration in ms
 */
const ANIMATION_DURATION = 1000;

export default class Page extends React.Component {
    frontActive = true;

    ref = null;

    animationActive = false;

    pageNum = 0;

    numSites = 0;

    siteIndex = 0;

    browserInfo = null;

    pageBackEmpty = false;

    constructor(props) {
        super(props);
        this.siteIndex = props.siteIndex;
        this.numSites = props.numSites;
        this.pageNum = this.siteIndex * 2 + 1;
        this.ref = React.createRef();
        this.frontRef = React.createRef();
        this.backRef = React.createRef();
        this.browserInfo = detect();
        this.isSafari = this.browserInfo.name === 'safari';
    }

    setFrontActive(activeState) {
        this.frontActive = activeState;
    }

    isFrontActive() {
        return this.frontActive;
    }

    isAnimationActive() {
        return this.animationActive;
    }

    animate(afterAnimationFinished) {
        const pageDom = this.ref.current;
        let zIndex = this.siteIndex * 10,
            keyframes,
            animation,
            min,
            max;

        min = 2;
        max = -182;

        /**
         * Safari looses z-order of pages when they have the same rotateY value
         */
        if (this.isSafari) {
            min = 0;
            max = -180 + this.siteIndex / 10;
        }

        if (!this.isFrontActive()) {
            min = max;
            max = this.isSafari ? 0 : 2;
            zIndex = (this.numSites - this.siteIndex) * 10;
        }

        keyframes = [min, max];

        this.animationActive = true;
        animation = animate.call(this, pageDom, ...keyframes);
        animation.addEventListener('finish', () => {
            this.setFrontActive(!this.frontActive);
            this.animationActive = false;
            if (typeof afterAnimationFinished === 'function') {
                afterAnimationFinished(this);
            }
        });
        Toolkit.delayedExecution(() => {
            pageDom.style.zIndex = zIndex;
        }, ANIMATION_DURATION / 2);
    }

    render() {
        let inlineCSS = {
            zIndex: (this.numSites - this.siteIndex) * 10,
            transform: this.isSafari ? 'rotateY(0)' : 'rotateY(2deg)'
        };

        if (this.props.siteIndex > 0 && this.browserInfo.name === 'firefox') {
            inlineCSS.display = 'none';
        }

        return (
            <div
                style={inlineCSS}
                ref={this.ref}
                onClick={this.props.onPageClick.bind(this)}
                className={styles.page}
            >
                <ContentContainer
                    ref={this.frontRef}
                    type="front"
                    pageNum={this.pageNum}
                    page={this}
                >
                    <h1>{this.pageNum}</h1>
                </ContentContainer>
                <ContentContainer
                    ref={this.backRef}
                    type="back"
                    pageNum={this.pageNum + 1}
                    page={this}
                >
                    <h1>{this.pageNum + 1}</h1>
                </ContentContainer>
            </div>
        );
    }
}

function animate(domNode, degFrom, degTo) {
    return domNode.animate(
        [
            { transform: 'rotateY(' + degFrom + 'deg)' },
            { transform: 'rotateY(' + degTo + 'deg)' },
        ],
        {
            duration: ANIMATION_DURATION,
            fill: 'forwards',
        }
    );
}
