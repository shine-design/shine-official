import React, {Component, Fragment} from 'react';

import './style.less';

export default class Brand extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="promo-title-wrapper ">
                            <h3 className="promo-title"> 社 区 </h3>
                            <p className="promo-description"> 我们提供了丰富的通用继承方案。目前，已经有许多公司或平台集成并使用她。</p>
                        </div>
                        <ul className="brands ">
                            <li className="brand-item">
                                <a href="https://www.baidu.com/" target='_blank' rel="noopener noreferrer" className="brand-item-link">
                                    <img src={require('../../../../assets/images/brands/baidu.png')}
                                         className="brand-item-image"
                                         alt="brand logo"/> </a>
                            </li>
                            <li className="brand-item">
                                <a href="http://www.chubao.cn/home" target='_blank' rel="noopener noreferrer" className="brand-item-link">
                                    <img src={require('../../../../assets/images/brands/chubao.png')}
                                         className="brand-item-image"
                                         alt="brand logo"/> </a>
                            </li>
                            <li className="brand-item">
                                <a href="https://www.epub360.com/" target='_blank' rel="noopener noreferrer" className="brand-item-link">
                                    <img src={require('../../../../assets/images/brands/yipai.png')} className="brand-item-image"
                                         alt="brand logo"/> </a>
                            </li>
                            <li className="brand-item">
                                <a href="https://gitee.com/" target='_blank' rel="noopener noreferrer" className="brand-item-link">
                                    <img src={require('../../../../assets/images/brands/mayun.png')} className="brand-item-image"
                                         alt="brand logo"/> </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}