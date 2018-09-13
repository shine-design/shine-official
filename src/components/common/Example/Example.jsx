import React, {Component, Fragment} from 'react';

import './style.less';
import Code from "../Code/Code";

export default class extends Component {
    componentDidMount() {
        this._initTabs();
    }

    _initTabs() {
        let tab = $(this.refs.example);
        let config = {
            headerTag: "h4",
            bodyTag: "div",
            titleTemplate: '#title#',
            transitionEffect: "fade",
            enableFinishButton: false,
            enablePagination: false,
            enableAllSteps: true,
            labels: {
                current: ''
            }
        };
        let userConfig = tab.data('config');
        $.extend(true, config, userConfig);
        tab.steps(config);
    }


    render() {
        const {code, display, className = []} = this.props;
        return (
            <Fragment>
                <div ref='example'
                     className={'tabs js-tabs code-highlight-tabs code-highlight-tabs-center ' + className.join(' ')}>
                    <h4 className="tab-title">
                        <i className="fa fa-cube"/>示例
                    </h4>
                    <div className="tab-content full-width">
                        {display}
                    </div>
                    <h4 className="tab-title">
                        <i className="fa fa-code"/>代码
                    </h4>
                    <div className="tab-content full-width">
                        <Code {...code}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}