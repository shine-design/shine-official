import React, {Component, Fragment} from 'react';

import './style.less'

export default class extends Component {

    render() {
        const {steps} = this.props;
        return (
            <Fragment>
                <ul className="steps">
                    {
                        steps.map((step, index) => {
                            return (
                                <li key={index} className="step">
                                    <span className="step-number">{index+1}</span>
                                    <h4 className="step-title">{step.title}</h4>
                                    <div className="step-content">{step.content}</div>
                                </li>
                            );
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}