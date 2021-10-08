import React from 'react';
import { detect } from 'detect-browser';

import Page from './components/Page';
import Menu from './components/Menu';
import Toolkit from './utils/Toolkit';

import Config from './config/appconfig.json';

import styles from './Book.module.css';

const PAGINATION_INTERVAL = 300;

class Book extends React.Component {
    numPages = 0;

    numSites = 0;

    activePageIndex = 0;

    pageRefs = [];

    prevDirectionUp = true;

    animationActive = false;

    browserInfo = null;

    isSafari = false;

    constructor(props) {
        super(props);
        this.numPages = getNumberOfPages();
        this.numSites = Math.ceil(this.numPages / 2);
        this.browserInfo = detect();
        this.isSafari = this.browserInfo.name === 'safari';
    }

    isAnimationActive() {
        return this.pageRefs.some((page) => page.isAnimationActive());
    }

    goToPageByUrl(url) {
        let int = null, targetPageIndex = 0, i = 0, j = 0, 
            pageFound = false, pageUrl;
        const pages = Config.pages;

        while (i < pages.length) {
            pageUrl = pages[i].url;
            if (pages[i].url.substr(0, 1) !== '/') {
                pageUrl = '/' + pages[i].url;
            }

            if (url === pageUrl) {
                pageFound = true;
                break;
            }
            i++;
        }

        if (!pageFound) {
            this.props.history.replace('');
            return;
        }

        targetPageIndex = Math.floor((i + 1) / 2);
        const numPagesToTurn = targetPageIndex - this.activePageIndex;

        let goToPage = () => {
            if (j < numPagesToTurn) {
                this.pageAnimation(j, false);
                j++;
            } else {
                clearInterval(int);
            }
        }
        
        if (numPagesToTurn < 0) {
            j = Math.abs(numPagesToTurn) - 1;
            goToPage = () => {
                if (j >= 0) {
                    this.pageAnimation(j, false);
                    j--;
                } else {
                    clearInterval(int);
                }
            }
        }

        int = setInterval(goToPage, PAGINATION_INTERVAL);
    }

    componentDidMount() {
        document.addEventListener('wheel', this.mousewheelHandler.bind(this));
        this.goToPageByUrl(this.props.location.pathname);

        setMenuVisibility(this.props.menuRef.current, this.props.history.location.pathname);
        this.props.history.listen((location) => {
            setMenuVisibility(this.props.menuRef.current, location.pathname);
            if (
                !location.autoChange &&
                this.props.location.pathname !== location.pathname &&
                !this.isAnimationActive()
            ) {
                this.goToPageByUrl(location.pathname);
            }
        });
    }

    componentWillUnmount() {
        document.removeEventListener(
            'wheel',
            this.mousewheelHandler.bind(this)
        );
    }

    mousewheelHandler(e) {
        let pageIndex = this.activePageIndex;
        let directionUp = true;
        if (e.deltaY < 0) {
            if (pageIndex === 0) {
                return;
            }
            directionUp = false;
            pageIndex--;
        } else if (pageIndex === this.numSites) {
            return;
        }

        if (!this.pageRefs[pageIndex]) {
            return;
        }

        this.pageAnimation(
            pageIndex,
            this.prevDirectionUp !== directionUp,
            true
        );
    }

    pageAnimation(pageIndex, blockWhileActive, updateURL) {
        if (!this.pageRefs[pageIndex]) {
            console.error('page not set!');
            return;
        }
        const page = this.pageRefs[pageIndex],
            frontActive = page.isFrontActive(),
            animationActive = this.isAnimationActive();

        if ((animationActive && blockWhileActive) ||  page.pageBackEmpty){
            return;
        }

        if (!frontActive) {
            this.prevDirectionUp = false;
            this.activePageIndex--;
        } else {
            this.prevDirectionUp = true;
            this.activePageIndex++;
        }

        if (!animationActive) {
            for (let i = 0; i < this.pageRefs.length; i++) {
                if (this.browserInfo.name === 'firefox') {
                    this.pageRefs[i].ref.current.style.display = '';
                }
            }
        }

        page.animate((page) => {
            if (!this.isAnimationActive()) {
                if (updateURL) {
                    let pageNum = page.pageNum;
                    if (!page.isFrontActive()) {
                        pageNum++;
                    }
                    setUrlForPageNum(this.props.history, pageNum);
                }

                /**
                 * Firefox fix:
                 * z-order of pages broken when using z-index and transform-style "preserve-3d"
                 */
                if (this.browserInfo.name === 'firefox') {
                    for (let i = 0; i < this.pageRefs.length; i++) {
                        if (
                            i !== this.activePageIndex - 1 &&
                            i !== this.activePageIndex
                        ) {
                            this.pageRefs[i].ref.current.style.display = 'none';
                        }
                    }
                }
            }
        });
    }

    render() {
        const pages = [];
        const eventTagBlacklist = ['A'];
        for (let i = 0; i < this.numSites; i++) {
            const pageClickListener = (e) => {
                const selection = document.getSelection();
                if (selection.type.toLowerCase() === 'range') {
                    return;
                }

                if (eventTagBlacklist.indexOf(e.target.tagName) === -1) {
                    this.pageAnimation(i, true, true);
                }
            };

            pages.push(
                <Page
                    key={`page-${i}`}
                    numSites={this.numSites}
                    siteIndex={i}
                    ref={(ref) => {
                        this.pageRefs[i] = ref;
                    }}
                    onPageClick={pageClickListener}
                />
            );
        }

        return (
            <>
                <div className={styles.contents}>
                    <div className={styles.headline}>
                        <h1 className={styles.title}>
                            Andreas Feuerstein
                            <br />
                            Softwareentwicklung
                        </h1>
                    </div>
                    <div className={styles.index}>
                        <h2>Inhalte</h2>
                        <Menu />
                    </div>
                </div>
                {pages}
                <div className={styles.back}></div>
            </>
        );
    }
}

function getNumberOfPages() {
    const pages = Object.values(Config.pages);
    return pages.length;
}

function setUrlForPageNum(history, pageNum) {
    let currentChapter;
    for (let i = 0; i < pageNum; i++) {
        if (Config.pages[i]) {
            currentChapter = Config.pages[i];
        }
    }

    if (currentChapter.url === '') {
        currentChapter.url = '/';
    }

    if (currentChapter && currentChapter.url !== history.location.pathname) {
        history.push({
            pathname: currentChapter.url,
            autoChange: true,
        });
    }
}

function setMenuVisibility(menuDom, pathname) {
    if (pathname === '/') {
        menuDom.classList.add('hide');
    } else {
        menuDom.classList.remove('hide');
    }
}

export default Toolkit.withRouterAndRef(Book);