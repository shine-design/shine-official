import React, {Component, Fragment} from 'react';

import './style.less';

export default class Action extends Component {
    render() {
        return (
            <Fragment>
                <div className="call-to-action helper mt60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="call-to-action-title"> Got a minute? Join us, it's free! </h3>
                                <p className="call-to-action-description"> Dolorem sint neque dolores, soluta et vitae
                                    dignissimos harum ut adipisci obcaecati. </p>
                                <div className="call-to-action-buttons">
                                    <a href="#" className="call-to-action-button">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}