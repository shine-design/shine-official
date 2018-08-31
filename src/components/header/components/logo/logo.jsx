import React, {Component, Fragment} from 'react';

import './style.less';

export default class LOGO extends Component {
    render() {
        return (
            <Fragment>
                <a href="/" className="logo-image logo-animated">
                    <img src={require('../../../../assets/images/logos/logo-light.png')} alt="logo"/>
                </a>
            </Fragment>
        )
    }
}