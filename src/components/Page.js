import React from 'react';
import PageContent from './ContentContainer';

import { detect } from 'detect-browser';
import styles from './Page.module.css';

/**
 * Animation duration in ms
 */
const ANIMATION_DURATION = 500;

export default class Page extends React.Component {

    frontActive = true;

    ref = null;

    animationActive = false;

    pageNum = 0;

    numSites = 0;

    siteIndex = 0;

    browserInfo = null;

    constructor(props) {
        super(props);
        this.siteIndex = props.siteIndex;
        this.numSites = props.numSites;
        this.pageNum = this.siteIndex * 2 + 1;
        this.ref = React.createRef();
        this.frontRef = React.createRef();
        this.backRef = React.createRef();
        this.browserInfo = detect();
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
            keyframes1,
            keyframes2,
            animation;

        keyframes1 = [2, -90];
        keyframes2 = [-90, -182];

        if (!this.isFrontActive()) {
            keyframes1 = [-182, -90];
            keyframes2 = [-90, 2];
            if (this.browserInfo.name === 'safari') {
                keyframes1 = [-180, -90];
                keyframes2 = [-90, 0];
            }
            zIndex = (this.numSites - this.siteIndex) * 10;
        }

        this.animationActive = true;
        animation = animate.call(this, pageDom, ...keyframes1);
        animation.addEventListener('finish', () => {
            pageDom.style.zIndex = zIndex;

            animation = animate.call(this, pageDom, ...keyframes2, this.siteIndex);
            animation.addEventListener('finish', () => {
                this.setFrontActive(!this.frontActive);
                this.animationActive = false;
                if (typeof afterAnimationFinished === 'function') {
                    afterAnimationFinished(this);
                }
            });
        });
    }

    render() {
        let inlineCSS = {
            zIndex: (this.numSites - this.siteIndex) * 10,
        };

        if (this.props.siteIndex > 0 && this.browserInfo.name === 'firefox') {
            inlineCSS.display = 'none';
        }

        return (
            <div
                style={inlineCSS}
                ref={this.ref}
                onClick={this.props.onPageClick.bind(this)}
                className={`${styles.page} ${styles['page-right']}`}
            >
                <PageContent ref={this.frontRef} type="front" pageNum={this.pageNum}>
                    <h1>{this.pageNum}</h1>
                </PageContent>
                <PageContent ref={this.backRef} type="back" pageNum={this.pageNum + 1}>
                    <h1>{this.pageNum + 1}</h1>
                </PageContent>
            </div>
        );
    }
}

function animate(domNode, degFrom, degTo, siteIndex) {
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
