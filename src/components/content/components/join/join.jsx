import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";

import './style.less';

export default class Header extends Component {

    render() {
        return (
            <Fragment>
                <div className="call-to-action helper mt60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="call-to-action-title"> 加入 Shine 开源社区 </h3>
                                <p className="call-to-action-description"> Shine 愿意像愚公一样，用坚持不懈的努力帮助用户提高使用效率，那么你呢？ </p>
                                <div className="call-to-action-buttons">
                                    <NavLink to='/contribute' className="call-to-action-button">贡献指南</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
