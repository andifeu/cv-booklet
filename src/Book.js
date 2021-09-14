import React from 'react';
import { withRouter } from 'react-router';

import Page from './pages/Page';
import Menu from './components/Menu';
import Toolkit from './utils/Toolkit';

import Config from './config/pageconfig.json';

import styles from './Book.module.css';

class Book extends React.Component {
    numPages = 14;

    numSites = 0;

    activePageIndex = 0;

    pageRefs = [];

    prevDirectionUp = true;

    animationActive = false;

    constructor(props) {
        super(props);
        this.numSites = Math.ceil(this.numPages / 2);
    }

    isAnimationActive() {
        return this.pageRefs.some((page) => page.isAnimationActive());
    }

    goToPageByUrl(url) {
        if (url.indexOf('/') === 0) {
            url = url.substr(1);
        }
        for (const [key, value] of Object.entries(Config.pages)) {
            let int = null,
                i = 0;
            const pageIndex = parseInt(key, 10);
            const numPages = Math.floor(pageIndex / 2);

            if (int !== null || url !== value.url) {
                continue;
            }

            int = setInterval(() => {
                if (i < numPages) {
                    this.pageAnimation(i, false);
                    i++;
                } else {
                    clearInterval(int);
                    int = null;
                    i = 0;
                }
            }, 300);
            break;
        }
    }

    componentDidMount() {
        document.addEventListener('wheel', this.mousewheelHandler.bind(this));
        this.goToPageByUrl(this.props.location.pathname);

        this.props.history.listen((location) => {
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
        } else if (pageIndex === this.numSites - 1) {
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

        if (animationActive && blockWhileActive) {
            return;
        }

        if (!frontActive) {
            this.prevDirectionUp = false;
            this.activePageIndex--;
        } else {
            this.prevDirectionUp = true;
            this.activePageIndex++;
        }

        if (!animationActive && Toolkit.isFirefox()) {
            for (let i = 0; i < this.pageRefs.length; i++) {
                this.pageRefs[i].ref.current.style.display = '';
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
                if (Toolkit.isFirefox()) {
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
                if (selection.type === 'Range') {
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
                        this.pageRefs[i] = React.createRef();
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
            </>
        );
    }
}

function setUrlForPageNum(history, pageNum) {
    let currentChapter;
    for (let i = 0; i <= pageNum; i++) {
        if (Config.pages[i]) {
            currentChapter = Config.pages[i];
        }
    }

    if (currentChapter && currentChapter.url !== history.location.pathname) {
        history.push({
            pathname: currentChapter.url,
            autoChange: true,
        });
    }
}

export default withRouter(Book);
