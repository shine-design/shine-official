import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";

import {Col, Row, Badge} from 'shined';
import './style.less';
import APITable from "../../../common/APITable/APITable";
import {NavLink} from "react-router-dom";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "标记",
                    description: '用于突出显示新的或未读的项',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>标记主要用于突出显示新的或未读的项，或对某些内容进行高亮标注。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础标记</p>
                    <p>使用 <code>Badge</code> 组件可以创建一个标记，使用 <code>color</code> 属性或 <code>borderColor</code> 可以设置标记颜色。
                    </p>
                    <Example {...{
                        className: ['demo-badge'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12} className='helper mb10'>
                                        <Badge {...{
                                            text: 2,
                                            color: 'brand'
                                        }}/>
                                        <Badge {...{
                                            text: 3,
                                            color: 'metal'
                                        }}/>
                                        <Badge {...{
                                            text: 4,
                                            color: 'success'
                                        }}/>
                                        <Badge {...{
                                            text: 5,
                                            color: 'danger'
                                        }}/>
                                        <Badge {...{
                                            text: 6,
                                            color: 'primary'
                                        }}/>
                                        <Badge {...{
                                            text: 7,
                                            color: 'danger'
                                        }}/>
                                        <Badge {...{
                                            text: 8,
                                            color: 'info'
                                        }}/>
                                        <Badge {...{
                                            text: 9,
                                            color: 'accent'
                                        }}/>
                                    </Col>
                                    <Col part={12}>
                                        <Badge {...{
                                            text: 2,
                                            color: 'light',
                                            borderColor: 'brand'
                                        }}/>
                                        <Badge {...{
                                            text: 3,
                                            color: 'light',
                                            borderColor: 'metal'
                                        }}/>
                                        <Badge {...{
                                            text: 4,
                                            color: 'light',
                                            borderColor: 'success'
                                        }}/>
                                        <Badge {...{
                                            text: 5,
                                            color: 'light',
                                            borderColor: 'danger'
                                        }}/>
                                        <Badge {...{
                                            text: 6,
                                            color: 'light',
                                            borderColor: 'primary'
                                        }}/>
                                        <Badge {...{
                                            text: 7,
                                            color: 'light',
                                            borderColor: 'danger'
                                        }}/>
                                        <Badge {...{
                                            text: 8,
                                            color: 'light',
                                            borderColor: 'info'
                                        }}/>
                                        <Badge {...{
                                            text: 9,
                                            color: 'light',
                                            borderColor: 'accent'
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/badge/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>点状标记</p>
                    <p>设置 <code>isDot</code> 属性可以使标记以点状的形式展示。
                    </p>
                    <Example {...{
                        className: ['demo-badge'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12} className='helper mb10'>
                                        <Badge {...{
                                            color: 'brand',
                                            isDot: true
                                        }}/>
                                        <Badge {...{
                                            color: 'metal',
                                            isDot: true
                                        }}/>
                                        <Badge {...{
                                            color: 'success',
                                            isDot: true
                                        }}/>
                                        <Badge {...{
                                            color: 'danger',
                                            isDot: true
                                        }}/>
                                        <Badge {...{
                                            color: 'primary',
                                            isDot: true
                                        }}/>
                                        <Badge {...{
                                            color: 'danger',
                                            isDot: true
                                        }}/>
                                        <Badge {...{
                                            color: 'info',
                                            isDot: true
                                        }}/>
                                        <Badge {...{
                                            color: 'accent',
                                            isDot: true
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/badge/dot').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>圆角标记</p>
                    <p>我们为文字标记设计了圆角样式，使用 <code>isRound</code> 属性可以使标记以圆角的形式展示，配合 <code>isWide</code> 属性可以使标记加宽显示。
                    </p>
                    <Example {...{
                        className: ['demo-badge'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12} className='helper mb10'>
                                        <Badge {...{
                                            color: 'brand',
                                            text: 'brand',
                                            isRound: true,
                                            isWide: true
                                        }}/>
                                        <Badge {...{
                                            color: 'metal',
                                            text: 'metal',
                                            isRound: true,
                                            isWide: true
                                        }}/>
                                        <Badge {...{
                                            color: 'success',
                                            text: 'success',
                                            isRound: true,
                                            isWide: true
                                        }}/>
                                        <Badge {...{
                                            color: 'danger',
                                            text: 'danger',
                                            isRound: true,
                                            isWide: true
                                        }}/>
                                        <Badge {...{
                                            color: 'primary',
                                            text: 'primary',
                                            isRound: true,
                                            isWide: true
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/badge/round').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['color', '定义标记的色彩', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, 'default'],
                            ['borderColor', '定义标记边框的色彩', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, 'default'],
                            ['isWide', '定义标记是否加宽显示', 'Boolean', 'true / false', 'false'],
                            ['isDot', (<Fragment>
                                定义标记是否以点状显示 ，该属性与 <code>isRound</code> 互斥
                            </Fragment>), 'Boolean', 'true / false', 'false'],
                            ['isRound', (<Fragment>
                                定义标记是否以圆角显示 ，该属性与 <code>isDot</code> 互斥
                            </Fragment>), 'Boolean', 'true / false', 'false']
                        ],
                        attribute: true,
                        callback: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}