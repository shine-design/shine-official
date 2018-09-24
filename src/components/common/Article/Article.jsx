import React, {Component, Fragment} from 'react';

import './style.less';

export default class extends Component {

    render() {
        const {children} = this.props;
        return (
            <Fragment>
                <article className="article ">
                    <div className="article-content">
                        {children}
                    </div>
                </article>
            </Fragment>
        )
    }
}
