import React, {Component, Fragment} from 'react';

import './style.less';

export default class extends Component {

    render() {
        const {title, children} = this.props;
        return (
            <Fragment>
                <article className="article ">
                    {/*<h2 className="article-title"> {title} </h2>*/}
                    <div className="article-content">
                        {children}
                    </div>
                </article>
            </Fragment>
        )
    }
}
