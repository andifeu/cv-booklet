import React from 'react';

import css from './PageContent.module.css';

export default class PageContent extends React.Component {
    constructor(props) {
        super(props);
        this.headline = props.headline  || null;
        this.pageNum = props.pageNum;
        this.part = props.part || null;
        this.css = css;
    }

    render() {
        if (this.part && this['render' + this.part]) {
            return this['render' + this.part](this.props);
        }
        throw new Error('Fehler: render' + (this.part || '') + '() nicht implementiert');
    }
}