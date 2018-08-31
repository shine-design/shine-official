import React, {Component, Fragment} from 'react';

import './style.less';

export default class Header extends Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="promo-title-wrapper helper pt60">
                            <h3 className="promo-title" > 特 性 </h3>
                            <p className="promo-description"> 服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。</p>
                        </div>
                        <div className="col-md-4">
                            <div className="box helper center">
                                <i className="fa fa-plug box-icon-large"/>
                                {/*<i className="pe-7s-plugin box-icon-large"/>*/}
                                <h4 className="box-title">组件库</h4>
                                <p className="box-description">内置众多通用组件，为开发者、设计师和产品经历提供丰富的创意和思路。</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box helper center">
                                <i className="fa fa-gears box-icon-large"/>
                                <h4 className="box-title">配置项</h4>
                                <p className="box-description">组件内置丰富配置项，支持样式定制和事件系统，千人千面，实现个性化组件。</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box helper center">
                                <i className="fa fa-code box-icon-large"/>
                                <h4 className="box-title">代码风格</h4>
                                <p className="box-description">代码风格统一，结构清晰，低耦合，可扩展性强，不污染代码，后续升级无忧。</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
