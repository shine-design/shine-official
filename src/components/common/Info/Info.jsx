import React, {Component, Fragment} from 'react';

import './style.less';

export default class extends Component {
    render() {
        const {title, description, link, guide = false, children} = this.props;
        return (
            <Fragment>
                <div className="category-info helper pt0 pb0">
                    <h3 className="category-title"> {title}
                        {
                            link && (
                                <a className="fragment-identifier js-fragment-identifier fragment-identifier-scroll"
                                   href={link}>
                                    <i className="fa fa-link"/>
                                </a>
                            )
                        }
                    </h3>
                    {
                        guide ? (
                            <h4 className="category-description category-guide">{description}</h4>
                        ) : (
                            <h4 className="category-description">{description}</h4>
                        )
                    }
                </div>
                <div className="category-content">
                    {children}
                </div>
            </Fragment>
        );
    }
}