import React, {Component, Fragment} from 'react';

import './style.less';

export default class Background extends Component {

    render() {
        const {title, description} = this.props;
        return (
            <Fragment>
                <div className="header-back header-back-simple header-back-small">
                    <div className="header-back-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-info page-info-simple">
                                        <h1 className="page-title">{title}</h1>
                                        <h2 className="page-description">{description}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
