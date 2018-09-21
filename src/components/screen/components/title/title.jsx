import React, {Component, Fragment} from 'react';

import './style.less';

export default class Language extends Component {

    render() {
        return (
            <Fragment>
                <div className="page-info helper center">
                    <h1 className="page-title">Shine Design</h1>
                    <h2 className="page-description">为开发者、设计师和产品经理准备的 UI 设计语言</h2>
                </div>
                <div className="header-back-buttons helper center">
                    <a href="" className="button stroke rounded large green">开始使用</a>
                    <a href="https://github.com/qulongjun/Omega-UI" rel='noopener noreferrer' target='_blank'
                       className="button stroke rounded large blue-light">GitHub</a>
                </div>
            </Fragment>
        )
    }
}
