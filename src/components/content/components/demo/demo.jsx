import React, {Component, Fragment} from 'react';

import './style.less';

export default class Brand extends Component {
    render() {
        return (
            <Fragment>
                <div className="background-gradient-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="promo-title-wrapper ">
                                    <h3 className="promo-title"> 官方教程 </h3>
                                    <p className="promo-description"> 为了让您更快入门 ，我们编写了详细的组件开发教程，配合官方示例和社区支持，您可以敏捷地开发满足需求的响应式企业应用。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="helper center mb60">
                                    <a href=""
                                       className="reguest-demo-button button blue stroke rounded button-icon button-icon-right"> 查看教程
                                        <i className="fa fa-angle-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

