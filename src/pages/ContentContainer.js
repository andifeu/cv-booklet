import React from 'react';

import styles from './ContentContainer.module.css';
import { getComponentByPageNum } from '../components/ContentLoader';

export default class ContentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();

        this.pageType =
            props.type === 'front' ? styles['page-front'] : styles['page-back'];
    }

    render() {
        const pageConfig = getComponentByPageNum(this.props.pageNum);
        const Content = pageConfig?.component;

        return (
            <>
                <div
                    ref={this.ref}
                    className={`${styles['page-content']} ${this.pageType}`}
                >
                    <div className={styles['page-content-header']}></div>
                    <div className={`${styles['page-content-text']}`}>
                        {Content && pageConfig && (
                            <Content
                                key={pageConfig.id}
                                headline={pageConfig.headline}
                                pageNum={this.props.pageNum}
                                part={pageConfig.part}
                            />
                        )}
                        <div className={styles['page-num']}>
                            {this.props.pageNum}
                        </div>
                    </div>
                    <div className={styles['page-content-footer']}></div>
                </div>
            </>
        );
    }
}
