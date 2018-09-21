import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';
import {Icon, Row, Col} from "shinec";

import './style.less';

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "状态颜色",
                    description: 'State Color',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        Shine 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>主色</p>
                    <p>页面的主色调，一个页面不建议超过两种主色调，用于统一视觉样式。</p>
                    <Example {...{
                        className: ['demo-color'],
                        display: (
                            <Fragment>
                                <Row>
                                    <Col part={3}>
                                        <div className='demo-color-box sh--bg-brand'>
                                            Brand
                                            <div className='value'>
                                                #716ACA
                                            </div>
                                        </div>
                                    </Col>
                                    <Col part={3}>
                                        <div className='demo-color-box sh--bg-accent'>
                                            Accent
                                            <div className='value'>
                                                #00C5DC
                                            </div>
                                        </div>
                                    </Col>
                                    <Col part={3}>
                                        <div className='demo-color-box sh--bg-focus'>
                                            Focus
                                            <div className='value'>
                                                #9816F4
                                            </div>
                                        </div>
                                    </Col>
                                    <Col part={3}>
                                        <div className='demo-color-box sh--bg-metal'>
                                            Metal
                                            <div className='value'>
                                                #C4C5D6
                                            </div>
                                        </div>
                                    </Col>
                                    <Col part={3}>
                                        <div className='demo-color-box light sh--bg-light'>
                                            Light
                                            <div className='value'>
                                                #FFFFFF
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/color/bg').default,
                            language: 'jsx'
                        }
                    }} />
                    <p className='title'>辅助色</p>
                    <p>除了主色外的状态色，需要在不同的状态中使用，使用统一的状态辅助色可以给用户最直观的提醒。（例如 <code>Danger</code> 表示 危险 的操作）。</p>
                    <Example {...{
                        className: ['demo-color'],
                        display: (
                            <Fragment>
                                <Row>
                                    <Col part={3}>
                                        <div className='demo-color-box sh--bg-success'>
                                            Success
                                            <div className='value'>
                                                #34BFA3
                                            </div>
                                        </div>
                                    </Col>
                                    <Col part={3}>
                                        <div className='demo-color-box sh--bg-warning'>
                                            Warning
                                            <div className='value'>
                                                #FFB822
                                            </div>
                                        </div>
                                    </Col>
                                    <Col part={3}>
                                        <div className='demo-color-box sh--bg-danger'>
                                            Danger
                                            <div className='value'>
                                                #F4516C
                                            </div>
                                        </div>
                                    </Col>
                                    <Col part={3}>
                                        <div className='demo-color-box sh--bg-primary'>
                                            Primary
                                            <div className='value'>
                                                #5867DD
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/color/helper').default,
                            language: 'jsx'
                        }
                    }} />

                </Info>
            </Fragment>
        );
    }
}