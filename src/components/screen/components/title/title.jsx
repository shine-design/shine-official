import React, {Component, Fragment} from 'react';

import './style.less';

export default class Language extends Component {

    render() {
        return (
            <Fragment>
                <div className="page-info helper center">
                    <h1 className="page-title">Shine.</h1>
                    <h2 className="page-description">基于 React 实现的企业级响应式 UI 设计语言</h2>
                </div>
                <div className="header-back-buttons helper center">
                    <a href="" className="button stroke rounded large green">快速入门</a>
                    <a href="https://github.com/qulongjun/Omega-UI" rel='noopener noreferrer' target='_blank'
                       className="button stroke rounded large blue-light">GitHub</a>
                </div>
            </Fragment>
        )
    }
}
